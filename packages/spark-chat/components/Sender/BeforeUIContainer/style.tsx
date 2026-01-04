import { createGlobalStyle } from 'antd-style';


export default createGlobalStyle`
.${p => p.theme.prefixCls}-sender-before-ui-container {
  position: relative;
  height: 40px;

  &-content {
    position: absolute;
    top: 8px;
    left: 0;
    right: 0;
    height: 40px;
    border: 1px solid ${p => p.theme.colorBorderSecondary};
    border-radius: ${p => p.theme.borderRadiusLG}px ${p => p.theme.borderRadiusLG}px 0 0;
    background: ${p => p.theme.colorFillTertiary};
    transition: all 0.3s;

    &-children {
      display: flex;
      justify-content: space-between; 
      align-items: center;
      height: 32px;
      padding: 0 12px;
    }
  }
}
`