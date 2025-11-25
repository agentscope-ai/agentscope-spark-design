import { createStyles } from 'antd-style';

export default createStyles(({ css, token }) => ({
  wrapper: css`
    height: 0;
    flex: 1;
    width: 844px;
    margin: 0 auto;
    left: -22px;
    > div::-webkit-scrollbar {
      width: 0;
    }
  `,

  list: css`
    padding: 16px 0 0 0 !important;
  `
}));
