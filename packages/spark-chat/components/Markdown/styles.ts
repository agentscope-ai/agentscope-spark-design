import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`
.${(p) => p.theme.prefixCls}-markdown {
  color: inherit;
  max-width: 100%;

  blockquote {
    padding-inline: 0.6em 0;
    padding-block: 0;
    margin: 1em 0;
    border-inline-start: 4px solid ${(p) => p.theme.colorBorder};
    opacity: 0.85;
  }

  figure {
    margin: 0;
  }

  code {
    font-size: 0.8571428571428571em;
    border: 0;
    margin: 0;
    background-color: ${(p) => p.theme.colorFillQuaternary};
    color: ${(p) => p.theme.colorText};
    border-radius: ${(p) => p.theme.borderRadiusSM}px;
    padding: 2px 6px;
    margin-inline: 3px;
    border: 1px solid ${(p) => p.theme.colorBorderSecondary};
  }

  pre code {
    font-size: 0.8571428571428571em;
    background-color: transparent;
    border: none;
  }

  pre {
    background-color: ${(p) => p.theme.colorFillQuaternary};
    padding: 4px 10px;
    border: 1px solid ${(p) => p.theme.colorBorderSecondary};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0.5714285714285714em;
    margin-bottom: 0.5714285714285714em;
    font-weight: 500;
    line-height: 1.7777;
    color: inherit;
  }

  p {
    margin-bottom: 0.5714285714285714em;
  }

  h1 {
    font-size: 1.2857142857142858em;
  }

  h2 {
    font-size: 1.1428571428571428em;
  }

  h3 {
    font-size: 1em;
  }

  h4 {
    font-size: 1em;
  }

  h5 {
    font-size: 1em;
  }

  h6 {
    font-size: 1em;
  }

  hr {
    border-color: ${(p) => p.theme.colorBorderSecondary};
    border-style: solid;
    border-width: 1px 0 0 0;
    margin: 1em 0;
  }

  table {
    border-collapse: collapse;
    display: block;
    width: max-content;
    max-width: 100%;
    overflow: auto;
  }

  table th {
    background: ${(p) => p.theme.colorFillQuaternary};
    text-align: left;
  }

  table td,
  table th {
    padding: 0.75em 1.5em;
    border: 1px solid ${(p) => p.theme.colorBorderSecondary};
    white-space: pre;
  }

  .${(p) => p.theme.prefixCls}-image {
    max-width: 480px;
    overflow: hidden;
  }

  .${(p) => p.theme.prefixCls}-markdown-video {
    position: relative;
    
    &-poster {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 480px;
      background-color: #000;
      border-radius: 8px;
      padding: 100px 0;
      cursor: pointer;
    }

    &-play {
      color: #ccc;
      font-size: 30px;
    }
  }
}

.${(p) => p.theme.prefixCls}-markdown.x-markdown {
  img {
    margin: 0;
  }
}


.${(p) => p.theme.prefixCls}-markdown  > *:last-child {
  margin-bottom: 0 !important;
}

.${(p) => p.theme.prefixCls}-markdown  > *:first-child {
  margin-top: 0 !important;
}
`;
