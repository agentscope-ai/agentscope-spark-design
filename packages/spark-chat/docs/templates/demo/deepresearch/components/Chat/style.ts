import { createStyles } from 'antd-style';

export default createStyles(({ css, token }) => ({
  container: {
    display: 'flex',
    height: '100%',
    background: token.colorBgBase,
  },
  chat: {
    height: '100%',
    transition: 'width .3s ease-out',
  },
}));
