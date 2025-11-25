import { SparkHomeLine, SparkCheckCircleLine, SparkLoadingLine, SparkUndoLine, SparkTargetLine, SparkSortLine, SparkEditLine, SparkKeyboardLine, SparkOtherLine, SparkPlaying02Line, SparkCommandLine, SparkDragDotLine, SparkPlaying01Line, SparkTrackpadLine, SparkUserCheckedLine } from "@agentscope-ai/icons";

const actionMap = {
  Click: {
    name: '点击',
    icon: <SparkTargetLine />,
  },
  Swipe: {
    name: '滑动',
    icon: <SparkSortLine />,
  },
  Type: {
    name: '输入',
    icon: <SparkEditLine />,
  },
  Back: {
    name: '返回',
    icon: <SparkUndoLine />,
  },
  Home: {
    name: '主页',
    icon: <SparkHomeLine />,
  },
  Done: {
    name: '完成',
    icon: <SparkCheckCircleLine />,
  },
  Wait: {
    name: '等待',
    icon: <SparkLoadingLine spin />,
  },
  click: {
    name: '点击',
    icon: <SparkTargetLine />,
  },
  'right click': {
    name: '右键点击',
    icon: <SparkTargetLine />,
  },
  'open app': {
    name: '打开应用',
    icon: <SparkOtherLine />,
  },
  computer_double_click: {
    name: '双击',
    icon: <SparkPlaying02Line />,
  },
  hotkey: {
    name: '快捷键',
    icon: <SparkCommandLine />,
  },
  presskey: {
    name: '按键',
    icon: <SparkKeyboardLine />,
  },  
  
  scroll: {
    name: '滚动',
    icon: <SparkSortLine />,
  },
  drag: {
    name: '拖拽',
    icon: <SparkDragDotLine />,
  },
  type_with_clear_enter_pos: {
    name: '输入并清除',
    icon: <SparkEditLine />,
  },
  triple_click: {
    name: '三击',
    icon: <SparkPlaying01Line />,
  },
  drag_end: {
    name: '拖拽结束',
    icon: <SparkDragDotLine />,
  },
  type: {
    name: '输入',
    icon: <SparkEditLine />,
  },
  hscroll: {
    name: '水平滚动',
    icon: <SparkTrackpadLine />,
  },
  done: {
    name: '完成',
    icon: <SparkCheckCircleLine />,
  },
  wait: {
    name: '等待',
    icon: <SparkLoadingLine spin />,
  },
  call_user: {
    name: '呼叫用户',
    icon: <SparkUserCheckedLine />,
  },
}


export default actionMap; 