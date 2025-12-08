import { createGlobalStyle } from 'antd-style';

export default createGlobalStyle`
.${(p) => p.theme.prefixCls}-media-info {
  display: flex;
  flex-direction: column;
  gap: 4px;

  /* 标题 */
  &-title {
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    color: ${(p) => p.theme.colorText};
  }

  /* 描述 */
  &-description {
    font-size: 12px;
    line-height: 20px;
    color: ${(p) => p.theme.colorTextTertiary};
  }
}
`;

