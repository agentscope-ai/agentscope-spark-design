export interface IImage {
  /**
   * @description 图片地址
   * @descriptionEn Image URL
   * @default ''
   */
  src: string;
  /**
   * @description 图片宽度（比例值）
   * @descriptionEn Image Width (Ratio Value)
   * @default 0
   */
  width: number;
  /**
   * @description 图片高度（比例值）
   * @descriptionEn Image Height (Ratio Value)
   * @default 0
   */
  height: number;
}
export interface IVideo {
  /**
   * @description 封面图片地址
   * @descriptionEn Poster Image URL
   * @default ''
   */
  poster?: string;
  /**
   * @description 视频地址
   * @descriptionEn Video URL
   * @default ''
   */
  src: string;
  /**
   * @description 视频宽度（比例值）
   * @descriptionEn Video Width (Ratio Value)
   * @default 0
   */
  width: number;
  /**
   * @description 视频高度（比例值）
   * @descriptionEn Video Height (Ratio Value)
   * @default 0
   */
  height: number;
}
export interface IAudio {
  /**
   * @description 音频地址
   * @descriptionEn Audio URL
   * @default ''
   */
  src: string;
} 