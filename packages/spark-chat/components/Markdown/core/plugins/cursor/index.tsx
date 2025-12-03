import Underline from './Underline';
import Dot from './Dot';

export const CursorComponent = function (props) {
  const type = props['data-type'];
  if (type === 'dot') {
    return <Dot />
  }

  if (type === 'underline') {
    return <Underline />
  }

  return null;
}

export function cursorExtension() {
  const options = {
    cursors: {
      dot: 'dot',
      underline: 'underline',
    },
  };

  const cursorNames = Object.keys(options.cursors).map(e => e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
  const cursorRegex = new RegExp(`:(${cursorNames}):`);
  const tokenizerRule = new RegExp(`^${cursorRegex.source}`);

  return {
    name: 'cursor',
    level: 'inline',
    start(src) { return src.match(cursorRegex)?.index; },
    tokenizer(src, tokens) {
      const match = tokenizerRule.exec(src);
      if (!match) {
        return;
      }

      const name = match[1];
      const cursor = options.cursors[name];

      if (!cursor) {
        return;
      }
      
      return {
        type: 'cursor',
        raw: match[0],
        name,
        cursor,
      };
    },
    renderer(token) {
      const content = `<custom-cursor data-type="${token.name}"></custom-cursor>`;
      
      return content;
    },
  };
}