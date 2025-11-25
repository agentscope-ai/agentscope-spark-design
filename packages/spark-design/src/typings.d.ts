declare module '*.css';
declare module '*.less';
declare module '*.module.less';
declare module '*.svg';

interface Window {
  g_config: any;
  ALIYUN_CONSOLE_CONFIG: any;
  g_efm_common: boolean;
  currentRegionId?: string;
  g_track?: any;
  /** 在阿里云viper>应用配置>基础数据中配置的应用配置项 */
  ALIYUN_CONSOLE_GLOBAL?: any;
}
