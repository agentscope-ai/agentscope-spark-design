/**
 * 主题生成器 - Theme Generator

 * 核心功能：
 * 1. 颜色空间转换（HEX/RGB/HSL）
 * 2. 颜色调整和生成
 * 3. 完整主题配置生成（支持浅色/暗色模式）
 *
 * 设计原则（参考 Radix Colors）：
 * - 浅色模式：背景 95-99% 亮度，边框 80-90% 亮度，文本 15-25% 亮度
 * - 暗色模式：背景 0-10% 亮度，边框使用透明度，文本 85-95% 亮度
 * - 状态色和装饰色在暗色模式下使用预设优化值
 *
 * 生成规则：
 * - 主色 (Primary)：从输入的主色生成，暗色模式自动调整亮度
 * - 背景色系：基于 bgBase 生成，保持色相统一
 * - 文本色系：基于 textBase 生成，保持色相统一
 * - 边框色系：基于 bgBase 生成，饱和度提高以增强可见度
 * - 填充色系：暗色模式基于文本色+透明度，浅色模式基于背景色
 * - 状态色/装饰色/阴影：暗色模式使用预设优化值，浅色模式使用配置文件
 */

import themeDataDark from './bailianDarkTheme.json';
import themeData from './bailianTheme.json';

// ==================== 颜色转换工具函数 ====================

/**
 * HEX 转 RGB
 */
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

/**
 * RGB 转 HEX
 */
const rgbToHex = (r, g, b) => {
  return (
    '#' +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
};

/**
 * RGB 转 HSL
 */
const rgbToHsl = (r, g, b) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
      default:
        h = 0;
    }
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
};

/**
 * HSL 转 RGB
 */
const hslToRgb = (h, s, l) => {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
};

// ==================== 颜色调整函数 ====================

/**
 * 调整颜色的亮度和饱和度（相对调整）
 */
const adjustColor = (hex, lightness, saturation = 0) => {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;

  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  hsl.l = Math.max(0, Math.min(100, hsl.l + lightness));
  hsl.s = Math.max(0, Math.min(100, hsl.s + saturation));

  const newRgb = hslToRgb(hsl.h, hsl.s, hsl.l);
  return rgbToHex(newRgb.r, newRgb.g, newRgb.b);
};

/**
 * 生成指定亮度的颜色（绝对值）
 */
const generateColorWithLightness = (
  hex,
  targetLightness,
  targetSaturation = null,
) => {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;

  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  hsl.l = targetLightness;
  if (targetSaturation !== null) {
    hsl.s = targetSaturation;
  }

  const newRgb = hslToRgb(hsl.h, hsl.s, hsl.l);
  return rgbToHex(newRgb.r, newRgb.g, newRgb.b);
};

/**
 * 基于基础色生成色阶（保持色相，调整亮度和饱和度）
 */
const generateColorScale = (baseHex, lightness, saturationMultiplier = 1) => {
  const rgb = hexToRgb(baseHex);
  if (!rgb) return baseHex;

  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  hsl.l = lightness;
  hsl.s = Math.max(0, Math.min(100, hsl.s * saturationMultiplier));

  const newRgb = hslToRgb(hsl.h, hsl.s, hsl.l);
  return rgbToHex(newRgb.r, newRgb.g, newRgb.b);
};

// ==================== 主题生成函数 ====================

/**
 * 生成完整主题
 * @param {string} primaryHex - 主色调
 * @param {string} bgBaseHex - 背景基础色
 * @param {string} textBaseHex - 文本基础色
 * @param {boolean} darkMode - 是否为暗色模式
 * @returns {Object} 完整的主题配置对象
 */
interface GenerateThemeProps {
  primaryHex: string;
  bgBaseHex?: string;
  textBaseHex?: string;
  darkMode: boolean;
}
const generateTheme = ({
  primaryHex,
  bgBaseHex,
  textBaseHex,
  darkMode = false,
}: GenerateThemeProps) => {
  bgBaseHex = bgBaseHex || (darkMode ? '#000000' : '#ffffff');
  textBaseHex = textBaseHex || (darkMode ? '#E7E7ED' : '#1a1a1a');
  const rgb = hexToRgb(primaryHex);
  if (!rgb) return null;

  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  // 获取背景色和文本色的 RGB 和 HSL
  const bgBaseRgb = hexToRgb(bgBaseHex);
  const textBaseRgb = hexToRgb(textBaseHex);
  const bgBaseHsl = bgBaseRgb
    ? rgbToHsl(bgBaseRgb.r, bgBaseRgb.g, bgBaseRgb.b)
    : { h: 210, s: 8, l: darkMode ? 5 : 99 };

  // 参考 Radix Colors 的色阶系统
  // 浅色模式：
  //   Scale 1-3: 背景色 (95-99% 亮度)
  //   Scale 6-8: 边框色、填充色 (80-90% 亮度)
  //   Scale 11-12: 文本色 (15-25% 亮度)
  // 暗色模式：
  //   Scale 1-3: 背景色 (0-10% 亮度)
  //   Scale 6-8: 边框色、填充色 (带透明度)
  //   Scale 11-12: 文本色 (85-95% 亮度)

  const baseSaturation = Math.max(8, Math.min(hsl.s, 40)); // 主色背景（如 primaryBg）使用低饱和度
  const borderSaturation = Math.max(12, Math.min(hsl.s * 0.6, 35)); // 主色边框（如 primaryBorder）使用的饱和度

  // 生成主色相关的颜色
  const theme = {
    // 保留边框圆角配置
    borderRadiusXS: themeData.borderRadiusXS,
    borderRadiusSM: themeData.borderRadiusSM,
    borderRadius: themeData.borderRadius,
    borderRadiusLG: themeData.borderRadiusLG,
    borderRadiusXL: themeData.borderRadiusXL,
    borderRadiusFull: themeData.borderRadiusFull,
    wireframe: themeData.wireframe,

    // 主色系 - 暗色模式下生成适配的主色
    colorPrimary: darkMode
      ? generateColorWithLightness(
          primaryHex,
          Math.max(hsl.l - 5, 42),
          hsl.s * 0.95,
        )
      : primaryHex,
    colorPrimaryHover: darkMode
      ? generateColorWithLightness(
          primaryHex,
          Math.min(hsl.l + 10, 55),
          hsl.s * 0.95,
        )
      : adjustColor(primaryHex, hsl.l < 50 ? 10 : -10, 0),
    colorPrimaryActive: darkMode
      ? generateColorWithLightness(
          primaryHex,
          Math.max(hsl.l - 10, 35),
          hsl.s * 0.95,
        )
      : adjustColor(primaryHex, hsl.l < 50 ? -10 : -20, 0),
    colorPrimaryBg: darkMode
      ? generateColorWithLightness(primaryHex, 13, baseSaturation * 0.6) // 暗色模式：深色背景
      : generateColorWithLightness(primaryHex, 96, baseSaturation * 0.8), // 浅色模式：浅色背景
    colorPrimaryBgHover: darkMode
      ? generateColorWithLightness(primaryHex, 13, baseSaturation * 0.6)
      : generateColorWithLightness(primaryHex, 94, baseSaturation),
    colorPrimaryBorder: darkMode
      ? generateColorWithLightness(primaryHex, 17, borderSaturation * 0.8)
      : generateColorWithLightness(primaryHex, 88, borderSaturation * 0.8),
    colorPrimaryBorderHover: darkMode
      ? generateColorWithLightness(primaryHex, 22, borderSaturation)
      : generateColorWithLightness(primaryHex, 82, borderSaturation),
    colorPrimaryText: darkMode
      ? generateColorWithLightness(
          primaryHex,
          Math.max(hsl.l - 5, 42),
          hsl.s * 0.95,
        )
      : primaryHex,
    colorPrimaryTextHover: darkMode
      ? generateColorWithLightness(
          primaryHex,
          Math.min(hsl.l + 10, 55),
          hsl.s * 0.95,
        )
      : adjustColor(primaryHex, hsl.l < 50 ? 10 : -10, 0),
    colorPrimaryTextActive: darkMode
      ? generateColorWithLightness(
          primaryHex,
          Math.max(hsl.l - 10, 35),
          hsl.s * 0.95,
        )
      : adjustColor(primaryHex, hsl.l < 50 ? -10 : -20, 0),

    // 文本颜色 - 基于 textBase 的色相生成（Scale 11-12）
    colorTextBase: textBaseHex,
    colorText: `rgba(${textBaseRgb.r}, ${textBaseRgb.g}, ${textBaseRgb.b}, 0.88)`,
    colorTextSecondary: `rgba(${textBaseRgb.r}, ${textBaseRgb.g}, ${textBaseRgb.b}, 0.65)`,
    colorTextTertiary: `rgba(${textBaseRgb.r}, ${textBaseRgb.g}, ${textBaseRgb.b}, 0.45)`,
    colorTextQuaternary: `rgba(${textBaseRgb.r}, ${textBaseRgb.g}, ${textBaseRgb.b}, 0.25)`,
    colorTextWhite: '#fff',

    // 背景颜色 - 基于 bgBase 的色相生成 (Scale 1-3)
    colorBgBase: bgBaseHex,
    colorBgContainer: darkMode
      ? generateColorScale(bgBaseHex, Math.min(bgBaseHsl.l + 3, 8), 1.2) // 暗色：稍微亮一点 (5-8%)
      : generateColorScale(bgBaseHex, Math.min(bgBaseHsl.l + 1, 99), 0.8), // 浅色：稍微深一点
    colorBgElevated: darkMode
      ? generateColorScale(bgBaseHex, Math.min(bgBaseHsl.l + 3, 8), 1.2) // 暗色：与 container 相同
      : bgBaseHex, // 浅色：使用 bgBase 本身
    colorBgLayout: darkMode
      ? generateColorScale(bgBaseHex, Math.min(bgBaseHsl.l + 3, 8), 1.2) // 暗色：与 container 相同
      : generateColorScale(bgBaseHex, Math.max(bgBaseHsl.l - 2, 96), 1.2), // 浅色：稍微深一点
    colorBgSpotlight: darkMode
      ? `rgba(${hexToRgb(generateColorScale(bgBaseHex, 28, 1.2)).r}, ${
          hexToRgb(generateColorScale(bgBaseHex, 28, 1.2)).g
        }, ${hexToRgb(generateColorScale(bgBaseHex, 28, 1.2)).b}, 0.85)`
      : `rgba(${textBaseRgb.r}, ${textBaseRgb.g}, ${textBaseRgb.b}, 0.85)`,
    colorBgMask: darkMode
      ? `rgba(${bgBaseRgb.r}, ${bgBaseRgb.g}, ${bgBaseRgb.b}, 0.8)`
      : `rgba(${textBaseRgb.r}, ${textBaseRgb.g}, ${textBaseRgb.b}, 0.45)`,

    // 边框和填充 - 暗色模式使用透明度，浅色模式使用实色
    colorBorder: darkMode
      ? `rgba(${hexToRgb(generateColorScale(bgBaseHex, 28, 2)).r}, ${
          hexToRgb(generateColorScale(bgBaseHex, 28, 2)).g
        }, ${hexToRgb(generateColorScale(bgBaseHex, 28, 2)).b}, 0.8)` // 暗色：中等亮度 + 透明度
      : generateColorScale(bgBaseHex, 81, 2.5), // 浅色：实色边框
    colorBorderSecondary: darkMode
      ? `rgba(${hexToRgb(generateColorScale(bgBaseHex, 22, 1.8)).r}, ${
          hexToRgb(generateColorScale(bgBaseHex, 22, 1.8)).g
        }, ${hexToRgb(generateColorScale(bgBaseHex, 22, 1.8)).b}, 0.8)`
      : generateColorScale(bgBaseHex, 88, 2),
    colorFill: darkMode
      ? `rgba(${textBaseRgb.r}, ${textBaseRgb.g}, ${textBaseRgb.b}, 0.18)` // 暗色：基于文本色的透明填充
      : generateColorScale(bgBaseHex, 81, 2.5) + '5c',
    colorFillSecondary: darkMode
      ? `rgba(${textBaseRgb.r}, ${textBaseRgb.g}, ${textBaseRgb.b}, 0.12)`
      : generateColorScale(bgBaseHex, 81, 2.5) + '33',
    colorFillTertiary: darkMode
      ? `rgba(${textBaseRgb.r}, ${textBaseRgb.g}, ${textBaseRgb.b}, 0.08)`
      : generateColorScale(bgBaseHex, 81, 2.5) + '26',
    colorFillQuaternary: darkMode
      ? `rgba(${textBaseRgb.r}, ${textBaseRgb.g}, ${textBaseRgb.b}, 0.04)`
      : generateColorScale(bgBaseHex, 81, 2.5) + '1a',
    colorFillDisable: darkMode
      ? generateColorScale(textBaseHex, 55, 0.8) // 暗色：中等亮度的灰色
      : generateColorScale(bgBaseHex, 86, 1.8),

    // 链接色 - 暗色模式下生成适配的颜色
    colorLink: darkMode
      ? generateColorWithLightness(
          primaryHex,
          Math.max(hsl.l - 5, 42),
          hsl.s * 0.95,
        )
      : primaryHex,

    // 状态色 - 暗色模式下使用预设值
    colorInfo: darkMode ? themeDataDark.colorInfo : themeData.colorInfo,
    colorInfoHover: darkMode
      ? themeDataDark.colorInfoHover
      : themeData.colorInfoHover,
    colorInfoText: darkMode
      ? themeDataDark.colorInfoText
      : themeData.colorInfoText,
    colorInfoBg: darkMode ? themeDataDark.colorInfoBg : themeData.colorInfoBg,
    colorInfoBgHover: darkMode
      ? themeDataDark.colorInfoBgHover
      : themeData.colorInfoBgHover,
    colorInfoBorder: darkMode
      ? themeDataDark.colorInfoBorder
      : themeData.colorInfoBorder,
    colorInfoBorderHover: darkMode
      ? themeDataDark.colorInfoBorderHover
      : themeData.colorInfoBorderHover,

    colorSuccess: darkMode
      ? themeDataDark.colorSuccess
      : themeData.colorSuccess,
    colorSuccessHover: darkMode
      ? themeDataDark.colorSuccessHover
      : themeData.colorSuccessHover,
    colorSuccessBg: darkMode
      ? themeDataDark.colorSuccessBg
      : themeData.colorSuccessBg,
    colorSuccessBgHover: darkMode
      ? themeDataDark.colorSuccessBgHover
      : themeData.colorSuccessBgHover,
    colorSuccessBorder: darkMode
      ? themeDataDark.colorSuccessBorder
      : themeData.colorSuccessBorder,
    colorSuccessBorderHover: darkMode
      ? themeDataDark.colorSuccessBorderHover
      : themeData.colorSuccessBorderHover,

    colorWarning: darkMode
      ? themeDataDark.colorWarning
      : themeData.colorWarning,
    colorWarningHover: darkMode
      ? themeDataDark.colorWarningHover
      : themeData.colorWarningHover,
    colorWarningBg: darkMode
      ? themeDataDark.colorWarningBg
      : themeData.colorWarningBg,
    colorWarningBgHover: darkMode
      ? themeDataDark.colorWarningBgHover
      : themeData.colorWarningBgHover,
    colorWarningBorder: darkMode
      ? themeDataDark.colorWarningBorder
      : themeData.colorWarningBorder,
    colorWarningBorderHover: darkMode
      ? themeDataDark.colorWarningBorderHover
      : themeData.colorWarningBorderHover,

    colorError: darkMode ? themeDataDark.colorError : themeData.colorError,
    colorErrorHover: darkMode
      ? themeDataDark.colorErrorHover
      : themeData.colorErrorHover,
    colorErrorBg: darkMode
      ? themeDataDark.colorErrorBg
      : themeData.colorErrorBg,
    colorErrorBgHover: darkMode
      ? themeDataDark.colorErrorBgHover
      : themeData.colorErrorBgHover,
    colorErrorBorder: darkMode
      ? themeDataDark.colorErrorBorder
      : themeData.colorErrorBorder,
    colorErrorBorderHover: darkMode
      ? themeDataDark.colorErrorBorderHover
      : themeData.colorErrorBorderHover,

    // 装饰色 - 暗色模式下使用预设值
    colorPurple: darkMode ? themeDataDark.colorPurple : themeData.colorPurple,
    colorPurpleHover: darkMode
      ? themeDataDark.colorPurpleHover
      : themeData.colorPurpleHover,
    colorPurpleBg: darkMode
      ? themeDataDark.colorPurpleBg
      : themeData.colorPurpleBg,
    colorPink: darkMode ? themeDataDark.colorPink : themeData.colorPink,
    colorPinkHover: darkMode
      ? themeDataDark.colorPinkHover
      : themeData.colorPinkHover,
    colorPinkBg: darkMode ? themeDataDark.colorPinkBg : themeData.colorPinkBg,
    colorYellow: darkMode ? themeDataDark.colorYellow : themeData.colorYellow,
    colorYellowHover: darkMode
      ? themeDataDark.colorYellowHover
      : themeData.colorYellowHover,
    colorYellowBg: darkMode
      ? themeDataDark.colorYellowBg
      : themeData.colorYellowBg,
    colorOrange: darkMode ? themeDataDark.colorOrange : themeData.colorOrange,
    colorOrangeHover: darkMode
      ? themeDataDark.colorOrangeHover
      : themeData.colorOrangeHover,
    colorOrangeBg: darkMode
      ? themeDataDark.colorOrangeBg
      : themeData.colorOrangeBg,
    colorTeal: darkMode ? themeDataDark.colorTeal : themeData.colorTeal,
    colorTealHover: darkMode
      ? themeDataDark.colorTealHover
      : themeData.colorTealHover,
    colorTealBg: darkMode ? themeDataDark.colorTealBg : themeData.colorTealBg,
    colorBlue: darkMode ? themeDataDark.colorBlue : themeData.colorBlue,
    colorBlueHover: darkMode
      ? themeDataDark.colorBlueHover
      : themeData.colorBlueHover,
    colorBlueBg: darkMode ? themeDataDark.colorBlueBg : themeData.colorBlueBg,
    colorMauve: darkMode ? themeDataDark.colorMauve : themeData.colorMauve,
    colorMauveHover: darkMode
      ? themeDataDark.colorMauveHover
      : themeData.colorMauveHover,
    colorMauveBg: darkMode
      ? themeDataDark.colorMauveBg
      : themeData.colorMauveBg,
    colorSlate: darkMode
      ? themeDataDark.colorSlate
      : themeData.colorSlate || '#1E293B',
    colorSlateHover: darkMode
      ? themeDataDark.colorSlateHover
      : themeData.colorSlateHover || '#475569',
    colorSlateBg: darkMode
      ? themeDataDark.colorSlateBg
      : themeData.colorSlateBg || '#E2E8F0',
    colorLavender: darkMode
      ? themeDataDark.colorLavender
      : themeData.colorLavender || '#A77BFF',
    colorLavenderHover: darkMode
      ? themeDataDark.colorLavenderHover
      : themeData.colorLavenderHover || '#BB99FF',
    colorLavenderBg: darkMode
      ? themeDataDark.colorLavenderBg
      : themeData.colorLavenderBg || 'rgba(226, 212, 255, 0.8)',

    // 阴影 - 暗色模式使用预设值
    boxShadow: darkMode ? themeDataDark.boxShadow : themeData.boxShadow,
    boxShadowSecondary: darkMode
      ? themeDataDark.boxShadowSecondary
      : themeData.boxShadowSecondary,
    boxShadowTertiary: darkMode
      ? themeDataDark.boxShadowTertiary
      : themeData.boxShadowTertiary,
    boxShadowTertiaryLeft: darkMode
      ? themeDataDark.boxShadowTertiaryLeft
      : themeData.boxShadowTertiaryLeft,
    boxShadowInput: darkMode
      ? themeDataDark.boxShadowInput
      : themeData.boxShadowInput,
  };

  return theme;
};

export default generateTheme;
