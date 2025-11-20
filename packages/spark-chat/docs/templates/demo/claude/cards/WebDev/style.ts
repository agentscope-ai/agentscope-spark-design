import { createStyles } from 'antd-style';

export default createStyles(({ css, token }) => ({
  webDev: {
    width: '100%',
    backgroundColor: token.colorBgBase,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadius,
    overflow: 'hidden',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 48,
    padding: '0 16px',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },

  title: {
    fontFamily: 'claude clone',
    fontSize: 14,
    marginLeft: 8,
    fontWeight: 600,
  },

  content: {},

  iframe: {
    border: 0,
    display: 'block',
    width: '100%',
    height: '100%',
  },
}));
