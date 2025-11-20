import { createStyles } from 'antd-style';

export default createStyles(({ css, token }) => ({
  header: css`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px 0 12px;
    width: 100%;
  `,
  model: css`
    height: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  modelLogo: css`
    width: 20px;
    height: 20px;
    background-color: ${token.colorBgBase};
    border-radius: 6px;
  `,
  modelName: css`
    font-weight: 500;
    line-height: 20px;
    color: ${token.colorText};
  `,
}));
