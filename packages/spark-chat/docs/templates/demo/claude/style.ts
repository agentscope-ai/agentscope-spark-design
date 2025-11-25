import { createGlobalStyle } from 'antd-style';
import claudeFontBase64 from './claudeFontBase64';

export default createGlobalStyle`
@font-face { 
  font-family: "claude clone";
  src: url(${claudeFontBase64});
}


.claude-clone-font {
  font-family: "claude clone";
}
`;
