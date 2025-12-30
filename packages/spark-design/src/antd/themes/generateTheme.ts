/**
 * Theme Generator

 * Generates a complete theme configuration based on input primary color, background color, and text color.
 * Supports both light and dark modes.
 *
 * ## Core Features
 * 1. **Color Space Conversion**: HEX ↔ RGB ↔ HSL conversions
 * 2. **Color Adjustment and Generation**: Adjust brightness and saturation based on HSL color space
 * 3. **Complete Theme Configuration**: Generates a complete theme configuration object including
 *    primary colors, text colors, background colors, border colors, fill colors, status colors,
 *    decorative colors, shadows, etc.
 *
 * ## Design Principles
 * ### Light Mode
 * - Background: 95-99% lightness
 * - Border: 80-90% lightness
 * - Text: 15-25% lightness
 *
 * ### Dark Mode
 * - Background: 0-10% lightness
 * - Border: Uses transparency to enhance layering
 * - Text: 85-95% lightness
 * - Status colors and decorative colors: Use preset optimized values
 *
 * ## Generation Rules
 * - **Primary Color**: Generated from input primary color, automatically adjusts brightness in dark mode for readability
 * - **Background Color System**: Generated based on bgBase, maintains consistent hue
 * - **Text Color System**: Generated based on textBase, uses transparency to achieve different levels
 * - **Border Color System**: Generated based on bgBase, increases saturation to enhance visibility
 * - **Fill Color System**: Dark mode uses text color + transparency, light mode uses background color
 * - **Status Colors/Decorative Colors/Shadows**: Dark mode uses preset optimized values, light mode uses configuration file
 */

import themeDataDark from './bailianDarkTheme.json';
import themeData from './bailianTheme.json';

// ==================== Color Conversion Utility Functions ====================

/**
 * Converts HEX color value to RGB object
 * @param {string} hex - HEX color value (e.g., '#FF0000' or 'FF0000')
 * @returns {{r: number, g: number, b: number} | null} RGB object, returns null if conversion fails
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
 * Converts RGB values to HEX color string
 * @param {number} r - Red component (0-255)
 * @param {number} g - Green component (0-255)
 * @param {number} b - Blue component (0-255)
 * @returns {string} HEX color string (e.g., '#FF0000')
 */
const rgbToHex = (r, g, b) => {
  return (
    '#' +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
};

/**
 * Converts RGB values to HSL object
 * @param {number} r - Red component (0-255)
 * @param {number} g - Green component (0-255)
 * @param {number} b - Blue component (0-255)
 * @returns {{h: number, s: number, l: number}} HSL object (h: 0-360, s: 0-100, l: 0-100)
 */
const rgbToHsl = (r, g, b) => {
  const rr = r / 255;
  const gg = g / 255;
  const bb = b / 255;
  const max = Math.max(rr, gg, bb),
    min = Math.min(rr, gg, bb);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rr:
        h = ((gg - bb) / d + (gg < bb ? 6 : 0)) / 6;
        break;
      case gg:
        h = ((bb - rr) / d + 2) / 6;
        break;
      case bb:
        h = ((rr - gg) / d + 4) / 6;
        break;
      default:
        h = 0;
    }
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
};

/**
 * Converts HSL values to RGB object
 * @param {number} h - Hue (0-360)
 * @param {number} s - Saturation (0-100)
 * @param {number} l - Lightness (0-100)
 * @returns {{r: number, g: number, b: number}} RGB object (r, g, b: 0-255)
 */
const hslToRgb = (h, s, l) => {
  const hh = h / 360;
  const ss = s / 100;
  const ll = l / 100;
  let r, g, b;

  if (ss === 0) {
    r = g = b = ll;
  } else {
    const hue2rgb = (p, q, t) => {
      let tt = t;
      if (tt < 0) tt += 1;
      if (tt > 1) tt -= 1;
      if (tt < 1 / 6) return p + (q - p) * 6 * tt;
      if (tt < 1 / 2) return q;
      if (tt < 2 / 3) return p + (q - p) * (2 / 3 - tt) * 6;
      return p;
    };

    const q = ll < 0.5 ? ll * (1 + ss) : ll + ss - ll * ss;
    const p = 2 * ll - q;
    r = hue2rgb(p, q, hh + 1 / 3);
    g = hue2rgb(p, q, hh);
    b = hue2rgb(p, q, hh - 1 / 3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
};

// ==================== Color Adjustment Functions ====================

/**
 * Adjusts color brightness and saturation relatively
 * @param {string} hex - Original HEX color value
 * @param {number} lightness - Lightness adjustment value (positive for lighter, negative for darker)
 * @param {number} [saturation=0] - Saturation adjustment value (positive to increase, negative to decrease)
 * @returns {string} Adjusted HEX color value
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
 * Generates a color with specified lightness (absolute value)
 * @param {string} hex - Base HEX color value
 * @param {number} targetLightness - Target lightness value (0-100)
 * @param {number | null} [targetSaturation=null] - Target saturation value (0-100), keeps original saturation if null
 * @returns {string} Generated HEX color value
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
 * Generates color scale based on base color (maintains hue, adjusts lightness and saturation)
 * @param {string} baseHex - Base HEX color value
 * @param {number} lightness - Target lightness value (0-100)
 * @param {number} [saturationMultiplier=1] - Saturation multiplier (1 to keep original saturation)
 * @returns {string} Generated HEX color value
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

// ==================== Theme Generation Function ====================

/**
 * Generates complete theme configuration
 * 
 * Generates a complete theme configuration object based on input primary color, background color,
 * text color, and mode (light/dark). The theme configuration includes: primary colors, text colors,
 * background colors, border colors, fill colors, status colors, decorative colors, shadows, etc.
 * 
 * @param {Object} props - Theme generation parameters
 * @param {string} props.primaryHex - Primary color HEX value (required)
 * @param {string} [props.bgBaseHex] - Background base color HEX value, uses default if not provided (light: #ffffff, dark: #000000)
 * @param {string} [props.textBaseHex] - Text base color HEX value, uses default if not provided (light: #1a1a1a, dark: #E7E7ED)
 * @param {boolean} [props.darkMode=false] - Whether it is dark mode
 * @returns {Object | null} Complete theme configuration object, returns null if parameters are invalid
 */
interface GenerateThemeProps {
  /** Primary color HEX value */
  primaryHex: string;
  /** Background base color HEX value */
  bgBaseHex?: string;
  /** Text base color HEX value */
  textBaseHex?: string;
  /** Whether it is dark mode */
  darkMode: boolean;
}
const generateTheme = (config: GenerateThemeProps) => {
  const { primaryHex, darkMode = false } = config;
  const bgBaseHex = config.bgBaseHex || (darkMode ? '#000000' : '#ffffff');
  const textBaseHex = config.textBaseHex || (darkMode ? '#E7E7ED' : '#1a1a1a');
  const rgb = hexToRgb(primaryHex);
  if (!rgb) return null;

  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  // Get RGB and HSL values for background and text colors
  const bgBaseRgb = hexToRgb(bgBaseHex);
  const textBaseRgb = hexToRgb(textBaseHex);
  const bgBaseHsl = bgBaseRgb
    ? rgbToHsl(bgBaseRgb.r, bgBaseRgb.g, bgBaseRgb.b)
    : { h: 210, s: 8, l: darkMode ? 5 : 99 };

  // Light mode:
  //   Scale 1-3: Background colors (95-99% lightness)
  //   Scale 6-8: Border colors, fill colors (80-90% lightness)
  //   Scale 11-12: Text colors (15-25% lightness)
  // Dark mode:
  //   Scale 1-3: Background colors (0-10% lightness)
  //   Scale 6-8: Border colors, fill colors (with transparency)
  //   Scale 11-12: Text colors (85-95% lightness)

  // Calculate saturation values related to primary color
  // Primary color background uses low saturation to ensure background is not too vibrant
  const baseSaturation = Math.max(8, Math.min(hsl.s, 40));
  // Primary color border uses medium saturation to enhance visibility
  const borderSaturation = Math.max(12, Math.min(hsl.s * 0.6, 35));

  // Calculate actual generated primary color (considering dark mode adjustment)
  const actualPrimaryHex = darkMode
    ? generateColorWithLightness(
        primaryHex,
        Math.max(hsl.l - 5, 42),
        hsl.s * 0.95,
      )
    : primaryHex;
  // Get actual primary color lightness to determine text on primary color
  const actualPrimaryRgb = hexToRgb(actualPrimaryHex);
  const actualPrimaryHsl = actualPrimaryRgb
    ? rgbToHsl(actualPrimaryRgb.r, actualPrimaryRgb.g, actualPrimaryRgb.b)
    : hsl;

  // Generate complete theme configuration object
    const theme = {
    // ========== Border Radius Configuration ==========
    borderRadiusXS: themeData.borderRadiusXS,
    borderRadiusSM: themeData.borderRadiusSM,
    borderRadius: themeData.borderRadius,
    borderRadiusLG: themeData.borderRadiusLG,
    borderRadiusXL: themeData.borderRadiusXL,
    borderRadiusFull: themeData.borderRadiusFull,
    wireframe: themeData.wireframe,

    // ========== Primary Color System ==========
    // Automatically adjusts primary color brightness in dark mode to ensure readability
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
      ? generateColorWithLightness(primaryHex, 13, baseSaturation * 0.6) // Dark mode: dark background (13% lightness)
      : generateColorWithLightness(primaryHex, 96, baseSaturation * 0.8), // Light mode: light background (96% lightness)
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
    // Text color displayed on primary color background: automatically selects black or white based on actual primary color lightness
    // Light theme colors (lightness > 50) use black text, dark theme colors (lightness <= 50) use white text
    colorTextOnPrimary: actualPrimaryHsl.l > 50 ? '#000000' : '#ffffff',

    // ========== Text Color System ==========
    // Generated based on textBase hue, uses transparency to achieve different levels
    colorTextBase: textBaseHex,
    colorText: `rgba(${textBaseRgb.r}, ${textBaseRgb.g}, ${textBaseRgb.b}, 0.88)`,
    colorTextSecondary: `rgba(${textBaseRgb.r}, ${textBaseRgb.g}, ${textBaseRgb.b}, 0.65)`,
    colorTextTertiary: `rgba(${textBaseRgb.r}, ${textBaseRgb.g}, ${textBaseRgb.b}, 0.45)`,
    colorTextQuaternary: `rgba(${textBaseRgb.r}, ${textBaseRgb.g}, ${textBaseRgb.b}, 0.25)`,
    colorTextWhite: '#fff',

    // ========== Background Color System ==========
    // Generated based on bgBase hue, maintains consistent hue
    colorBgBase: bgBaseHex,
    colorBgContainer: darkMode
      ? generateColorScale(bgBaseHex, Math.min(bgBaseHsl.l + hsl.l * 0.08, 12), 1.2) // Dark mode: dynamically adjusts based on primary color lightness (brighter primary = brighter container, max 12% lightness)
      : generateColorScale(bgBaseHex, Math.max(100 - hsl.l * 0.05, 96), 0.8), // Light mode: darker primary = grayer container; lighter primary = closer to white (min 96% lightness)
    colorBgElevated: darkMode
      ? generateColorScale(bgBaseHex, Math.min(bgBaseHsl.l + 3, 8), 1.2) // Dark mode: slightly brighter than container (max 8% lightness)
      : bgBaseHex, // Light mode: uses bgBase itself (usually white)
    colorBgLayout: bgBaseHex, // Keeps consistent with bgBase
    colorBgSpotlight: darkMode
      ? `rgba(${hexToRgb(generateColorScale(bgBaseHex, 28, 1.2)).r}, ${
          hexToRgb(generateColorScale(bgBaseHex, 28, 1.2)).g
        }, ${hexToRgb(generateColorScale(bgBaseHex, 28, 1.2)).b}, 0.85)`
      : `rgba(${textBaseRgb.r}, ${textBaseRgb.g}, ${textBaseRgb.b}, 0.85)`,
    colorBgMask: darkMode
      ? `rgba(${bgBaseRgb.r}, ${bgBaseRgb.g}, ${bgBaseRgb.b}, 0.8)`
      : `rgba(${textBaseRgb.r}, ${textBaseRgb.g}, ${textBaseRgb.b}, 0.45)`,

    // ========== Border and Fill Color System ==========
    // Dark mode uses transparency to enhance layering, light mode uses solid colors
    colorBorder: darkMode
      ? `rgba(${hexToRgb(generateColorScale(bgBaseHex, 28, 2)).r}, ${
          hexToRgb(generateColorScale(bgBaseHex, 28, 2)).g
        }, ${hexToRgb(generateColorScale(bgBaseHex, 28, 2)).b}, 0.8)` // Dark mode: medium lightness (28%) + 80% opacity
      : generateColorScale(bgBaseHex, 81, 2.5), // Light mode: solid border (81% lightness)
    colorBorderSecondary: darkMode
      ? `rgba(${hexToRgb(generateColorScale(bgBaseHex, 22, 1.8)).r}, ${
          hexToRgb(generateColorScale(bgBaseHex, 22, 1.8)).g
        }, ${hexToRgb(generateColorScale(bgBaseHex, 22, 1.8)).b}, 0.8)`
      : generateColorScale(bgBaseHex, 88, 2),
    colorFill: darkMode
      ? `rgba(${textBaseRgb.r}, ${textBaseRgb.g}, ${textBaseRgb.b}, 0.18)` // Dark mode: transparent fill based on text color
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
      ? generateColorScale(textBaseHex, 55, 0.8) // Dark mode: medium lightness gray (55% lightness)
      : generateColorScale(bgBaseHex, 86, 1.8), // Light mode: light gray (86% lightness)

    // ========== Link Color ==========
    // Automatically adjusts brightness in dark mode to ensure readability
    colorLink: darkMode
      ? generateColorWithLightness(
          primaryHex,
          Math.max(hsl.l - 5, 42),
          hsl.s * 0.95,
        )
      : primaryHex,

    // ========== Status Colors ==========
    // Dark mode uses preset optimized values, light mode uses values from configuration file
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

    // ========== Decorative Colors ==========
    // Dark mode uses preset optimized values, light mode uses values from configuration file
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

    // ========== Shadows ==========
    // Dark mode uses preset optimized values, light mode uses values from configuration file
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