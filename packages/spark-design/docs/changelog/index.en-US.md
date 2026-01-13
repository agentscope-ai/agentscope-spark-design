---
hero:
  title: Changelog
  description: Release versions follow Semantic Versioning 2.0.0.
---

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

