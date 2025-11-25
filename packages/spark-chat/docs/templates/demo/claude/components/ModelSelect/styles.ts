import { createStyles } from 'antd-style';

export default createStyles(({ css, token }) => ({
  display: {
    fontFamily: 'claude clone',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    cursor: 'pointer',
    color: token.colorText,
  },

  small: {
    fontSize: 14,
    height: 20,

    img: {
      width: 20,
      height: 20,
      padding: 2.5,
      background: token.colorPrimaryBg,
      borderRadius: 4,
    },
  },
  large: {
    fontSize: 20,
    height: 40,

    img: {
      width: 24,
      height: 24,
    },
  },

  item: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  itemIcon: {
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },

  itemTitle: {
    fontFamily: 'claude clone',
  },
}));
