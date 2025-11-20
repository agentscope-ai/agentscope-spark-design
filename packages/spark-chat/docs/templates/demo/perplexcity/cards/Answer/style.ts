import { createStyles } from 'antd-style';

export default createStyles(({ css, token }) => ({
  container: css`
    width: 100%;
    display: flex;
    gap: 12px;
  `,

  content: {
    width: 0,
    flex: 1,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 8,
    overflow: 'hidden'
  },
}));
