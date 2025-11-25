type TOriginTime = string;

export interface IUrl {
  /**
   * @description 网站的图标URL
   * @descriptionEn Icon URL of the website
   */
  icon?: string;
  /**
   * @description 网站的URL地址
   * @descriptionEn URL address of the website
   */
  url: string;
  /**
   * @description 网站的标题
   * @descriptionEn Title of the website
   */
  title: string;
  /**
   * @description 网站的描述信息
   * @descriptionEn Description of the website
   */
  description: string;
}

export type TStatus = 'RUNNING' | 'FINISHED' | 'ERROR';

export interface IStepItem {
  /**
   * @description 步骤的Markdown内容
   * @descriptionEn Markdown content of the step
   */
  content: string;
  /**
   * @description 搜索到的网址列表
   * @descriptionEn List of searched URLs
   */
  siteList?: IUrl[];
}

export interface IStep {
  /**
   * @description 步骤的标题
   * @descriptionEn Title of the step
   */
  title: string;
  /**
   * @description 步骤的执行状态
   * @descriptionEn Execution status of the step
   */
  status: TStatus;
  /**
   * @description 步骤开始时间戳
   * @descriptionEn Start timestamp of the step
   */
  startTime: number;
  /**
   * @description 步骤结束时间戳
   * @descriptionEn End timestamp of the step
   */
  endTime: number;
  /**
   * @description 步骤的详细内容列表
   * @descriptionEn Detailed content list of the step
   */
  list?: IStepItem[];
}

interface IOriginStep extends Omit<IStep, 'startTime' | 'endTime'> {
  startTime: TOriginTime;
  endTime: TOriginTime;
}

export interface IResult {
  /**
   * @description 结果文件的唯一标识
   * @descriptionEn Unique identifier for the result file
   */
  fileKey: string;
  /**
   * @description 结果生成开始时间戳
   * @descriptionEn Start timestamp of result generation
   */
  startTime: number;
  /**
   * @description 结果生成结束时间戳
   * @descriptionEn End timestamp of result generation
   */
  endTime: number;
  /**
   * @description 结果生成状态
   * @descriptionEn Status of result generation
   */
  status: TStatus;
  /**
   * @description 结果的内容
   * @descriptionEn Content of the result
   */
  content: string;
}

interface IOriginResult extends Omit<IResult, 'startTime' | 'endTime'> {
  startTime: TOriginTime;
  endTime: TOriginTime;
}

export interface IParseData {
  /**
   * @description 研究名称，目前是固定的
   * @descriptionEn Research name, currently fixed
   */
  title?: string;
  /**
   * @description 研究步骤列表
   * @descriptionEn List of research steps
   */
  steps?: IStep[];
  /**
   * @description 网站信息
   * @descriptionEn Website information
   */
  site?: {
    /**
     * @description 网站列表
     * @descriptionEn List of websites
     */
    list: IUrl[];
  };
  /**
   * @description 研究结果
   * @descriptionEn Research result
   */
  result?: IResult;
}

export interface IData {
  /**
   * @description 消息状态
   * @descriptionEn Message status
   */
  msgStatus: string;
  /**
   * @description 数据内容
   * @descriptionEn Data content
   */
  data: {
    /**
     * @description 研究名称，目前是固定的
     * @descriptionEn Research name, currently fixed
     */
    title?: string;
    /**
     * @description 研究步骤列表（原始格式）
     * @descriptionEn List of research steps (original format)
     */
    steps?: IOriginStep[];
    /**
     * @description 网站信息
     * @descriptionEn Website information
     */
    site?: {
      /**
       * @description 网站列表
       * @descriptionEn List of websites
       */
      list: IUrl[];
    };
    /**
     * @description 研究结果（原始格式）
     * @descriptionEn Research result (original format)
     */
    result?: IOriginResult;
  };
}
