import { createStyles } from 'antd-style';

export default createStyles(({ css, token }) => ({
  container: {
    height: '100%',
    background: token.colorBgLayout,
  },
  chat: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },

  disclaimer: {
    margin: 'auto 0 0 0'
  }
}));
