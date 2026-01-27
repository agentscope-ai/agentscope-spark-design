---
hero:
  title: Changelog
  description: Release versions follow Semantic Versioning 2.0.0.
---

### 1.0.27
`2025-01-27`

##### Changed
- Added InputSearch component documentation

##### Fixed
- Table: changed default header border-radius from rounded to square when header is fixed
- Empty: fixed the issue where SVG might be missing when multiple Empty components are imported
- Fixed documentation search white screen issue

### 1.0.26
`2025-01-21`

##### Changed
- Audio: refactored detection logic and improved performance using useCallback
- Audio & Video: added SVG icons, supporting display in FileIcon component
- Documentation: added icons list display and copy functionality

### 1.0.25
`2025-01-07`

##### Fixed
- Tooltip: fixed the style specificity issue inside the popover.

### 1.0.24
`2025-01-04`

##### Changed
- Video: added the `enableFullscreen` prop to support fullscreen playback.

### 1.0.22
`2025-12-29`

##### Changed
- Carbon theme: updated the `colorTextOnPrimary` token to `#ffffff`.

### 1.0.21
`2025-12-25`

##### Changed
- AlertDialog: adjusted the default top offset to 36% of the current viewport height.
- Table: updated the row hover background color to the `color-bg-layout` token; updated the selected row background color to the `color-primary-bg-hover` token.
- Select: adjusted the selected item background color in multiple selection mode.
- Theme tokens updates:
  - bailianDarkTheme: added `"colorLinkHover": "#857DE3"`.
  - bailianTheme: added `"colorLinkHover": "#8080FF"`.
  - carbonDarkTheme: updated `"colorTextOnPrimary": "#ffffff"`.

##### Fixed
- Slider: removed the default left/right margins for the horizontal slider; ensured the handle does not overflow the track at both ends.

