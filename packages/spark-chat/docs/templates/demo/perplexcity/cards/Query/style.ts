import { createStyles } from 'antd-style';

export default createStyles(({ css, token }) => ({
  container: css`
    width: 100%;
    display: flex;
    gap: 12px;
  `,

  avatar: {
    backgroundColor: token.colorPrimary,
  },

  content: {
    width: 0,
    flex: 1,
    lineHeight: '32px',
    fontSize: 20,
    fontWeight: 500,
    color: token.colorText,
  },
  hr: {
    marginTop: 20,
    borderBottom: `1px dashed ${token.colorBorder}`,
  },
}));
