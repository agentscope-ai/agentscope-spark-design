// @ts-nocheck
import { ConfigProviderProps } from 'antd';

const INVISIBLE_COLOR = 'rgba(0,0,0,0)';

// border
const borderRadiusXS = 2;
const borderRadiusSM = 4;
const borderRadius = 6;
const borderRadiusLG = 8;
const borderRadiusXL = 12;
const borderRadiusFull = 999;
// font
const footnoteRegular = `normal 12px/20px inherit`;
const footnoteMedium = `500 12px/20px inherit`;
const footnoteSystemMonospace = `normal 12px/20px Menlo, monospace`;
const bodyFormTitle = `500 13px/20px inherit`;
const bodyRegular = `normal 14px/24px inherit`;
const bodyMedium = `500 14px/24px inherit`;
const bodyCode = `normal 14px/24px Menlo, monospace`;
const h5Regular = `normal 16px/28px inherit`;
const h5Medium = `500 16px/28px inherit`;
const h4Medium = `500 18px/32px inherit`;
const h3Medium = `500 20px/36px inherit`;
const h2Medium = `500 24px/44px inherit`;
const h1Medium = `500 32px/48px inherit`;

export default function generateThemeByToken(
  /**
   * @description 输入自定义 token，包含颜色、尺寸等主题变量。这些令牌会被合并到 Ant Design 的主题配置中，覆盖默认样式
   * @descriptionEn custom token, including color, size, etc. theme variables. These tokens will be merged into the theme configuration of Ant Design, overriding the default style
   * @returns ConfigProviderProps
   */
  token: {
    [key: string]: string | number | boolean;
  },
  darkMode?: boolean,
): Partial<ConfigProviderProps> {
  // 输入token，生成主题
  return {
    theme: {
      cssVar: true,
      hashed: false,
      darkMode,
      token: {
        borderRadiusXS,
        borderRadiusSM,
        borderRadius,
        borderRadiusLG,
        // @ts-ignore
        borderRadiusXL,
        borderRadiusFull,
        // font 系列
        footnoteRegular,
        footnoteMedium,
        footnoteSystemMonospace,
        bodyFormTitle,
        bodyRegular,
        bodyMedium,
        bodyCode,
        h5Regular,
        h5Medium,
        h4Medium,
        h3Medium,
        h2Medium,
        h1Medium,
        ...token,
      },
      components: {
        Alert: {
          colorErrorBorder: INVISIBLE_COLOR,
          colorInfoBorder: INVISIBLE_COLOR,
          colorSuccessBorder: INVISIBLE_COLOR,
          colorWarningBorder: INVISIBLE_COLOR,
          colorInfoBg: token.colorInfoBg as string,
          borderRadiusLG: 0, // Alert 不要圆角
          defaultPadding: '8px 20px',
          fontSize: 12,
          // @ts-ignore
          lineHeight: '20px',
        },
        Badge: {
          colorError: token.colorPrimary as string,
          indicatorHeight: 16,
          textFontSize: 10,
        },
        Breadcrumb: {
          separatorMargin: 4,
          lastItemColor: token.colorText as string,
        },
        Button: {
          contentFontSizeSM: 12,
          defaultHoverBg: token.colorFillSecondary as string,
          defaultHoverBorderColor: token.colorBorderSecondary as string,
          defaultHoverColor: token.colorText as string,
          defaultActiveBg: token.colorFillSecondary as string,
          defaultActiveBorderColor: token.colorBorderSecondary as string,
          defaultActiveColor: token.colorText as string,
          defaultGhostColor: token.colorText as string,
          defaultGhostBorderColor: 'transparent',
          dangerShadow: 'none',
          defaultShadow: 'none',
          primaryShadow: 'none',
        },
        DatePicker: {
          paddingInline: 8,
          colorBgBase: token.colorBgBase as string,
          colorBgContainerDisabled: token.colorFillTertiary as string,
        },
        Dropdown: {
          paddingBlock: 4,
          controlPaddingHorizontal: 8,
          controlItemBgHover: token.colorFillTertiary as string,
        },
        Progress: {
          remainingColor: token.colorPrimaryBg as string,
          defaultColor: token.colorPrimary as string,
        },
        Input: {
          colorBgBase: token.colorBgBase as string,
          colorBgContainerDisabled: token.colorFillTertiary as string,
        },
        InputNumber: {
          colorBgBase: token.colorBgBase as string,
          colorBgContainerDisabled: token.colorFillTertiary as string,
        },
        Select: {
          colorBgBase: token.colorBgBase as string,
          selectorBg: token.colorBgBase as string,
          colorBgContainerDisabled: token.colorFillTertiary as string,
        },
        Skeleton: {
          paragraphLiHeight: 24,
          paragraphMarginTop: 16,
          blockRadius: 8,
        },
        Slider: {
          railBg: token.colorPrimaryBg as string,
          railHoverBg: token.colorPrimaryBgHover as string,
          trackBg: token.colorPrimary as string,
          trackHoverBg: token.colorPrimary as string,
          handleColor: token.colorPrimary as string,
          railSize: 8,
          handleSize: 12,
          handleSizeHover: 12,
        },
        Segmented: {
          itemSelectedBg: token.colorBgBase as string,
          trackPadding: 4,
          controlHeight: 40,
          controlHeightLG: 42,
          itemHoverBg: 'unset',
        },
        Steps: {
          iconSize: 20,
          iconFontSize: 12,
          titleLineHeight: 20,
        },
        Modal: {
          headerBg: token.colorBgBase as string,
          contentBg: token.colorBgBase as string,
          titleFontSize: 16,
          controlHeight: 20,
        },
        Tooltip: {
          sizePopupArrow: 0,
        },
        Popover: {
          sizePopupArrow: 0,
        },
        Table: {
          cellPaddingInline: 20,
        },
        Form: {
          itemMarginBottom: 20,
        },
        Collapse: {
          contentPadding: '8px 12px',
          headerPadding: '4px 12px',
        },
        Descriptions: {
          colonMarginRight: 10,
          // @ts-ignores
          verticalLabelPaddingBottom: 4,
          verticalContentPaddingBottom: 24,
        },
        Switch: {
          handleBg: token.colorBgContainer as string,
          trackHeight: 24,
          handleSize: 20,
          trackHeightSM: 20,
          handleSizeSM: 16,
          trackMinWidth: 44,
          trackMinWidthSM: 32,
        },
      },
    },
    checkbox: {
      style: {
        fontWeight: '500',
      },
    },
    radio: {
      style: {
        fontWeight: '500',
      },
    },
  };
}
