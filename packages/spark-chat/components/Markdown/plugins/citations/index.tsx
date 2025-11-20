import { MarkdownProps } from "../../Markdown/interface";
export { default as CitationComponent } from './CitationComponent';

export function citationsExtension(citationsData: MarkdownProps['citationsMap']) {

  return {
    name: 'citation',
    level: 'inline' as const,
    tokenizer(src: string) {
      // 使用负向前瞻确保不匹配 markdown 链接语法 [text](url)
      const match = src.match(/^\[([^\]]+)\](?!\()/);
      if (match) {
        const content = match[0].trim();
        const text = content?.replace(/^\[([^\]]+)\]/g, '$1');

        if (citationsData[text]) {
          return {
            type: 'citation',
            raw: content,
            text: content?.replace(/^\[([^\]]+)\]/g, '$1'),
            renderType: 'component',
          };
        }
      }
    },
    renderer(token) {
      if (citationsData && Object.keys(citationsData).length === 0) return null;
      const { text } = token;
      const citation = citationsData?.[text];

      if (!citation) return token.raw;

      return `<citation text="${text}" url="${citation.url}" title="${citation.title}" content="${citation.content}"></citation>`;

    },
  };
}