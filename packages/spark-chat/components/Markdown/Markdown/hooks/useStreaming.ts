import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { MarkdownProps } from '../interface';

enum TokenType {
  Text = 0,
  Link = 1,
  Image = 2,
  Heading = 3,
  MaybeEmphasis = 4,
  Emphasis = 5,
  Strong = 6,
  XML = 7,
  MaybeCode = 8,
  Code = 9,
  MaybeHr = 10,
  MaybeList = 11,
  MaybeInlineMath = 12,
  InlineMath = 13,
  MaybeBlockMath = 14,
  BlockMath = 15,
  MaybeBackslashMath = 16,
  Word = 17,
}

const Markdown_Symbols = {
  emphasis: ['*', '_'],
  code: ['`'],
  list: ['-', '+', '*'],
};

// 辅助函数：判断是否是英文字母
const isEnglishLetter = (char: string): boolean => {
  const code = char.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122); // A-Z or a-z
};

// 辅助函数：判断是否是单词的一部分（字母、数字、连字符、撇号）
const isWordChar = (char: string): boolean => {
  const code = char.charCodeAt(0);
  return (
    (code >= 65 && code <= 90) ||   // A-Z
    (code >= 97 && code <= 122) ||  // a-z
    (code >= 48 && code <= 57) ||   // 0-9
    char === '-' ||                  // 连字符 (well-known)
    char === "'"                     // 撇号 (don't)
  );
};

// 辅助函数：判断是否是单词分隔符
const isWordSeparator = (char: string): boolean => {
  return (
    char === ' ' ||
    char === '\n' ||
    char === '\t' ||
    char === ',' ||
    char === '.' ||
    char === '!' ||
    char === '?' ||
    char === ';' ||
    char === ':' ||
    char === ')' ||
    char === ']' ||
    char === '}' ||
    char === '"' ||
    char === "'" ||
    char === '>' ||
    char === '<'
  );
};

const STREAM_BUFFER_INIT = {
  processedLength: 0,
  rawStream: '',
  pending: '',
  token: TokenType.Text,
  tokens: [TokenType.Text],
  headingLevel: 0,
  emphasisCount: 0,
  backtickCount: 0,
  dollarCount: 0,
  mathDelimiter: '' as '$' | '$$' | '\\(' | '\\[' | '',
  blockMathEnding: false, // 标记是否遇到了结束的 $$
};

const useStreaming = (input: string, config?: MarkdownProps['streaming'], cursor?: MarkdownProps['cursor']) => {
  const { hasNextChunk = false, enableWordCaching = false, enableMathCaching = true } = config || {};

  const [output, setOutput] = useState('');
  const streamBuffer = useRef({ ...STREAM_BUFFER_INIT });

  const pushToken = useCallback((type: TokenType) => {
    streamBuffer.current.tokens = [...streamBuffer.current.tokens, type];
    streamBuffer.current.token = type;
  }, []);

  const popToken = useCallback(() => {
    const { tokens } = streamBuffer.current;
    if (tokens.length <= 1) return;

    const newTokens = [...tokens.slice(0, -1)];
    streamBuffer.current.tokens = newTokens;
    streamBuffer.current.token = newTokens[newTokens.length - 1];
  }, []);

  const flushOutput = (needPopToken = true) => {
    if (needPopToken) popToken();

    streamBuffer.current.pending = '';
    streamBuffer.current.blockMathEnding = false;
    const renderText = streamBuffer.current.rawStream;
    if (renderText) {
      setOutput(renderText);
    }
  };

  const handleChunk = (chunk: string) => {
    const buffer = streamBuffer.current;
    for (const char of chunk) {
      buffer.rawStream += char;
      buffer.pending += char;

      const { token, pending, tokens, emphasisCount } = buffer;
      switch (token) {
        case TokenType.Image: {
          /**
           * \![
           *   ^
           */
          const isInvalidStart = pending.indexOf('![') === -1;
          /**
           * \![image]()
           *           ^
           */
          const isImageEnd = char === ')' || char === '\n';
          if (isInvalidStart || isImageEnd) {
            if (tokens[tokens.length - 2] === TokenType.Link) {
              popToken();
            } else {
              flushOutput();
            }
          }
          break;
        }
        case TokenType.Link: {
          // not support link reference definitions, [foo]: /url "title" \n[foo]
          const isReferenceLink = pending.endsWith(']:');
          const isLinkEnd = char === ')' || char === '\n';
          const isImageInLink = char === '!';
          if (isImageInLink) {
            pushToken(TokenType.Image);
          } else if (isLinkEnd || isReferenceLink) {
            flushOutput();
          }
          break;
        }
        case TokenType.Heading: {
          /**
           * # token / ## token / #####token
           *  ^         ^              ^
           */
          buffer.headingLevel++;

          const shouldFlushOutput = char !== '#' || buffer.headingLevel >= 6;
          if (shouldFlushOutput) {
            flushOutput();
            buffer.headingLevel = 0;
          }
          break;
        }
        case TokenType.MaybeEmphasis: {
          /**
             * /* / *\/n
                ^     ^
             */
          const shouldFlushOutput = char === ' ' || char === '\n';
          if (shouldFlushOutput) {
            flushOutput();
          } else if (Markdown_Symbols.emphasis.includes(char)) {
            buffer.emphasisCount++;
          } else {
            popToken();
            if (emphasisCount === 1) {
              /**
               * _token_ / *token*
               * ^         ^
               */
              pushToken(TokenType.Emphasis);
            } else if (emphasisCount === 2) {
              /**
               * __token__ / **token**
               *  ^           ^
               */
              pushToken(TokenType.Strong);
            } else if (emphasisCount === 3) {
              /**
               * ___token___ / ***token***
               *   ^             ^
               */
              pushToken(TokenType.Emphasis);
              pushToken(TokenType.Strong);
            } else {
              // no more than 3
              buffer.emphasisCount = 0;
            }
          }

          break;
        }
        case TokenType.Strong: {
          /**
           * __token__ / **token**
           *         ^           ^
           */
          if (char === '\n') {
            flushOutput();
          } else if (pending.endsWith('**') || pending.endsWith('__')) {
            if (tokens[tokens.length - 2] === TokenType.Emphasis) {
              popToken();
            } else {
              flushOutput();
            }
          }

          break;
        }
        case TokenType.Emphasis: {
          /**
           * _token_ / *token*
           *       ^         ^
           */
          if (char === '\n') {
            flushOutput();
            buffer.emphasisCount = 0;
          } else if (Markdown_Symbols.emphasis.includes(char)) {
            flushOutput();
            buffer.emphasisCount = 0;
          }

          break;
        }
        case TokenType.XML: {
          /**
           * <XML /> /<XML></XML>
           *       ^      ^
           */
          const shouldFlushOutput = char === '>' || pending === '< ' || char === '\n';
          if (shouldFlushOutput) {
            flushOutput();
            continue;
          }
          break;
        }
        case TokenType.MaybeCode: {
          if (char === '`') {
            buffer.backtickCount++;
          } else {
            if (buffer.backtickCount > 2) {
              /**
               * ```
               *   ^
               */
              flushOutput();
              buffer.backtickCount = 0;
            } else {
              /**
               * ``
               *  ^
               */
              popToken();
              pushToken(TokenType.Code);
            }
          }
          break;
        }
        case TokenType.Code: {
          if (char === '`') {
            buffer.backtickCount--;
          }

          if (buffer.backtickCount === 0) {
            flushOutput();
            buffer.backtickCount = 0;
          }
          break;
        }
        case TokenType.MaybeHr: {
          if (char !== '-' && char !== '=') {
            flushOutput();
          }
          break;
        }
        case TokenType.MaybeList: {
          if (char !== ' ') {
            flushOutput();
          }
          break;
        }
        case TokenType.MaybeInlineMath: {
          /**
           * $ / $$
           * ^    ^
           */
          if (char === '$') {
            buffer.dollarCount++;
            if (buffer.dollarCount === 2) {
              // $$ 块级公式
              popToken();
              pushToken(TokenType.MaybeBlockMath);
              buffer.mathDelimiter = '$$';
            }
          } else if (char === '\n') {
            // $ 后跟换行，不是有效的公式
            flushOutput();
            buffer.dollarCount = 0;
            buffer.mathDelimiter = '';
          } else {
            // 确认为行内公式
            popToken();
            pushToken(TokenType.InlineMath);
            buffer.mathDelimiter = '$';
          }
          break;
        }
        case TokenType.InlineMath: {
          /**
           * $x^2$ / \(x^2\)
           *     ^         ^
           */
          if (buffer.mathDelimiter === '$') {
            if (char === '$') {
              flushOutput();
              buffer.dollarCount = 0;
              buffer.mathDelimiter = '';
            } else if (char === '\n') {
              // 行内公式不应跨行
              flushOutput();
              buffer.dollarCount = 0;
              buffer.mathDelimiter = '';
            }
          } else if (buffer.mathDelimiter === '\\(') {
            if (pending.endsWith('\\)')) {
              flushOutput();
              buffer.mathDelimiter = '';
            }
          }
          break;
        }
        case TokenType.MaybeBlockMath: {
          /**
           * $$
           *   ^
           */
          if (char !== '$') {
            // $$ 后跟任何非 $ 字符，确认为块级公式
            popToken();
            pushToken(TokenType.BlockMath);
          }
          break;
        }
        case TokenType.BlockMath: {
          /**
           * $$E=mc^2$$
           *         ^^
           */
          // 处理 $$ 块级公式
          if (buffer.mathDelimiter === '$$') {
            // 检测是否遇到结束的 $$
            if (char === '$') {
              buffer.dollarCount++;
              if (buffer.dollarCount === 2) {
                // 遇到了结束 $$，立即释放缓存
                flushOutput();
                buffer.dollarCount = 0;
                buffer.mathDelimiter = '';
              }
            } else {
              buffer.dollarCount = 0;
            }
          } else if (buffer.mathDelimiter === '\\[') {
            // 处理 \[...\] 块级公式
            if (pending.endsWith('\\]')) {
              flushOutput();
              buffer.mathDelimiter = '';
            }
          }
          break;
        }
        case TokenType.MaybeBackslashMath: {
          /**
           * \( / \[
           *  ^    ^
           */
          if (char === '(') {
            // \( 行内公式
            popToken();
            pushToken(TokenType.InlineMath);
            buffer.mathDelimiter = '\\(';
          } else if (char === '[') {
            // \[ 块级公式
            popToken();
            pushToken(TokenType.BlockMath);
            buffer.mathDelimiter = '\\[';
          } else {
            // 不是数学公式，普通反斜杠
            flushOutput();
            buffer.mathDelimiter = '';
          }
          break;
        }
        case TokenType.Word: {
          /**
           * Hello world
           *      ^
           * 缓存英文单词，直到遇到分隔符（空格、标点等）
           */
          if (isWordSeparator(char)) {
            // 遇到分隔符，释放缓存显示完整单词
            flushOutput();
          } else if (!isWordChar(char)) {
            // 遇到非单词字符且非分隔符（如 Markdown 符号），也释放缓存
            flushOutput();
          }
          // 否则继续缓存单词字符
          break;
        }
        default: {
          buffer.pending = char;

          if (char === '!') {
            pushToken(TokenType.Image);
          } else if (char === '[') {
            pushToken(TokenType.Link);
          } else if (char === '#') {
            pushToken(TokenType.Heading);
          } else if (char === '_' || char === '*') {
            pushToken(TokenType.MaybeEmphasis);
            buffer.emphasisCount = 1;
          } else if (char === '<') {
            pushToken(TokenType.XML);
          } else if (char === '`') {
            pushToken(TokenType.MaybeCode);
            buffer.backtickCount = 1;
          } else if (char === '-' || char === '=') {
            pushToken(TokenType.MaybeHr);
          } else if (Markdown_Symbols.list.includes(char)) {
            pushToken(TokenType.MaybeList);
          } else if (enableMathCaching && char === '$') {
            // 只有启用公式缓存时，才缓存 $ 符号的公式
            pushToken(TokenType.MaybeInlineMath);
            buffer.dollarCount = 1;
            buffer.mathDelimiter = '';
          } else if (enableMathCaching && char === '\\') {
            // 只有启用公式缓存时，才缓存 \ 开头的公式
            pushToken(TokenType.MaybeBackslashMath);
          } else if (enableWordCaching && isEnglishLetter(char)) {
            // 只有启用单词缓存时，才缓存英文单词
            pushToken(TokenType.Word);
          } else {
            flushOutput(false);
          }
        }
      }
    }
  };
  
  const cursorContent = useMemo(() => {
    if (config?.enableAnimation) return  '';
    if (cursor) {
      if (cursor === 'dot') return ' :dot:';
      if (cursor === 'underline') return ' :underline:';
      return ' :dot:';
    }
    return '';
  }, [cursor]);

  useEffect(() => {
    if (!input) {
      setOutput('');
      streamBuffer.current = { ...STREAM_BUFFER_INIT };
      return;
    }

    if (typeof input !== 'string') {
      console.error(`X-Markdown: input must be string, not ${typeof input}.`);
      return;
    }

    if (!hasNextChunk) {
      setOutput(input);
      return;
    }

    const chunk = input.slice(streamBuffer.current.processedLength);
    if (chunk.length) {
      streamBuffer.current.processedLength += chunk.length;
      handleChunk(chunk);
    }
  }, [input, hasNextChunk]);

  return output + cursorContent;
};

export default useStreaming;
