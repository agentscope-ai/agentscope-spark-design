import { createStyles } from 'antd-style';

export default createStyles(({ css, token }) => ({
  rightPanel: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    borderLeft: `1px solid ${token.colorBorderSecondary}`,
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    height: 64,
    background: token.colorFillTertiary,
  },

  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },

  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },

  title: {
    fontFamily: 'claude clone',
    fontSize: 16,
    marginLeft: 8,
    fontWeight: 600,
  },

  content: {
    flex: 1,
    overflow: 'auto',
  },
}));
