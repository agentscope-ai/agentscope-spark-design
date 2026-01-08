export interface IImage {
  type: 'image';
  src: string;
  width: number;
  height: number;
}
export interface IVideo {
  type: 'video';
  poster?: string;
  src: string;
  width: number;
  height: number;
}
export interface IAudio {
  type: 'audio';
  src: string;
} 