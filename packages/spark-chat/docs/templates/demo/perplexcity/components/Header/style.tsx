import { createStyles } from 'antd-style';

export default createStyles(({ css, token }) => ({
  header: css`
    width: 100%;
    height: 64px;
    padding: 0 24px 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
}));