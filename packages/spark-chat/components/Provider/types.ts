export interface ProviderProps {
  /**
   * @description 提供者组件的子元素，用于包装应用内容
   * @descriptionEn Child elements of the provider component for wrapping application content
   */
  children: React.ReactNode;
  /**
   * @description 卡片配置对象，用于自定义不同类型卡片的渲染
   * @descriptionEn Card configuration object for customizing rendering of different card types
   */
  cardConfig: Record<string, any>;
  /**
   * @description Markdown渲染配置，用于控制文本显示效果
   * @descriptionEn Markdown rendering configuration for controlling text display effects
   */
  markdown?: {
    /**
     * @description 基础字体大小，影响所有Markdown内容的字体大小
     * @descriptionEn Base font size that affects font size of all Markdown content
     */
    baseFontSize?: number;
  };
}
