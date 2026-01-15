/**
 * 图标分类配置与分类函数
 * - 参考实现：sparkdesign-website/src/config/iconCategories.js
 */

export const ICON_CATEGORIES: Record<
  string,
  {
    /** 分类关键词列表 */
    keywords: string[];
  }
> = {
  'Universal·通用': {
    keywords: [
      'Arrow',
      'Up',
      'Down',
      'Left',
      'Right',
      'Plus',
      'Minus',
      'True',
      'False',
      'Bottom',
      'Top',
      'Refresh',
      'Search',
      'Privacy',
      'Setting',
      'More',
      'Filter',
      'Menu',
      'Timestamp',
      'Link',
      'Date',
      'Todo',
      'Other',
      'Feedback',
      'Complaint',
      'Favorite',
      'Rights',
      'Attachment',
      'Circle',
      'Location',
      'FontSize',
      'Fee',
      'Upgrade',
      'Data',
      'Plugin',
      'App',
      'Expand',
      'Fold',
      'Tag',
    ],
  },
  'User·用户': {
    keywords: [
      'User',
      'Timbre',
      'SmartTool',
      'Agent',
      'Public',
      'Private',
      'PartiallyVisible',
      'DisclosureAgreement',
      'DigitalWork',
      'UserGroup',
      'SearchUser',
      'DigitalAsset',
      'UserChecked',
      'UserDeleted',
    ],
  },
  'Status·状态': {
    keywords: [
      'CheckCircle',
      'ErrorCircle',
      'WarningCircle',
      'DeleteCircle',
      'AddCircle',
      'Process',
      'Lock',
      'Heart',
      'ThumbsUp',
      'ThumbsDown',
      'Star',
      'Visible',
      'Hide',
      'Problem',
      'Info',
      'Alert',
      'Disable',
      'Loading',
      'Help',
      'Recording',
      'Flashlight',
      'Sun',
      'Moon',
      'Social',
      'Home',
      'Locate',
      'ProcessInput',
      'ProcessOutput',
      'Margin',
      'Limit',
      'Free',
      'Warning',
    ],
  },
  'Controls·控制': {
    keywords: [
      'Volume',
      'Mute',
      'Target',
      'Play',
      'Video',
      'Pause',
      'Sentence',
      'Stop',
      'Addition',
      'Hierarchy',
      'Flow',
      'Cycle',
      'Bold',
      'Drag',
      'Headset',
      'Format',
      'Audio',
      'Float',
      'English',
      'Chinese',
      'Mobile',
      'Process',
      'Testing',
      'Insert',
    ],
  },
  'Operations·操作': {
    keywords: [
      'SelectText',
      'NewChat',
      'Message',
      'Download',
      'Upload',
      'Edit',
      'Share',
      'Permission',
      'Choice',
      'Mic',
      'Escape',
      'Window',
      'Copy',
      'Delete',
      'Enlarge',
      'Shrink',
      'Keyboard',
      'Switch',
      'Find',
      'Fill',
      'Send',
      'Clear',
      'Modify',
      'Move',
      'Save',
      'Mark',
      'Extract',
      'Search',
      'Dial',
      'Translate',
      'Replace',
      'Time',
      'Canvas',
      'Catalog',
      'List',
      'Picture',
      'Update',
      'Appeal',
      'Subtitle',
      'Browse',
      'Translation',
      'Power',
      'Call',
      'Voice',
      'Subscribe',
      'Operate',
      'Expand',
      'Collapse',
      'Undo',
      'Redo',
      'Screen',
      'Read',
      'Increase',
      'Replay',
      'Merge',
      'Unfold',
      'Vibration',
      'Amplify',
      'Reduce',
      'Album',
      'Camera',
      'File',
      'Flash',
      'Flip',
      'Clips',
      'Scan',
      'Continue',
      'Intercept',
      'Close',
      'Sort',
      'Rotate',
      'Improve',
      'Ratio',
      'Search',
      'Understand',
      'Organize',
      'Complete',
      'UpDown',
      'Enter',
      'CMD',
      'Intervention',
      'VS',
      'Reject',
      'Live',
      'Global',
      'Variable',
      'Configuration',
      'Menu',
      'Japan',
      'Eraser',
    ],
  },
  'Object·对象': {
    keywords: [
      'Phone',
      'Computer',
      'Paper',
      'Book',
      'Camera',
      'ProperNoun',
      'Treasure',
      'Internet',
      'Code',
      'Hot',
      'Agreement',
      'Seal',
      'Rocket',
      'Record',
      'Tea',
      'Flag',
      'Document',
      'LuckyBag',
      'Efficiency',
      'Star',
      'Gift',
      'WiFi',
      'Memory',
      'Record',
      'Toolbox',
      'Cite',
      'Sport',
      'Finance',
      'Card',
      'Mode',
      'Box',
      'Image',
      'Icon',
      'Project',
      'Spell',
      'Text',
      'Inspiration',
      'Plugin',
      'API',
      'Dialogue',
      'Palette',
      'Voice',
      'Recording',
      'Template',
      'Widget',
      'Chart',
      'Deployment',
      'Gender',
      'Menu',
      'ID',
      'File',
      'QR',
      'Card',
      'Bug',
      'Trackpad',
      'Mouse',
      'Tool',
      'Variable',
      'Email',
      'Agent',
      'Function',
      'Summary',
      'Flow',
      'Config',
      'Retail',
      'Financial',
      'Education',
      'Cultural',
      'Enterprise',
      'Game',
      'Medical',
      'Car',
      'Commercial',
      'Terminal',
      'Markdown',
      'Law',
      'Science',
      'Product',
      'USD',
      'Government',
      'OpenAI',
      'Gateway',
      'Space',
      'Key',
      'Account',
      'Settings',
      'Regional',
    ],
  },
  'AI·智能': {
    keywords: [
      'AI',
      'Smart',
      'Voice',
      'Tongyi',
      'Command',
      'Speech',
      'Chat',
      'Search',
      'Efficiency',
      'Agent',
      'PPT',
      'Storage',
      'Interpret',
      'STT',
      'Oral',
      'Idiom',
      'Decrypt',
      'QA',
      'AIGC',
      'Widget',
      'Note',
      'Magic',
      'Deep',
      'Batch',
      'Mode',
      'Think',
      'Audio',
      'Image',
      'Visual',
      'Document',
      'Video',
      'Retrieval',
      'Any',
      'Depth',
      'Classification',
      'Detection',
      'Segmentation',
      'Test',
      'Mask',
      '3D',
      'Feature',
      'Keypoint',
      'Token',
      'Table',
      'Question',
      'Speech',
      'Voice',
      'Tabular',
      'Time',
      'Reinforcement',
      'Robotics',
      'Graph',
      'API',
      'Anywhere',
      'MCP',
      'Token',
      'Modal',
      'TextRewriting',
      'Toolbox',
      'SmartTerminal',
      'Memory',
      'ImmersiveMode',
    ],
  },
  'Brand·品牌': {
    keywords: [
      'Wechat',
      'Weibo',
      'Qzone',
      'QQ',
      'Dingtalk',
      'Moments',
      'Apple',
      'Red',
      'Bilibili',
      'Tiktok',
      'Linkedin',
      'Google',
      'Microsoft',
      'Bailian',
      'Wuying',
      'Gaode',
      'Aliyun',
      'Github',
    ],
  },
  'Other·其他': {
    keywords: [],
  },
};

/**
 * 获取图标名称的匹配分数
 */
function getMatchScore(name: string, keywords: string[]): number {
  let maxScore = 0;

  // 移除 Spark 前缀并转换为小写以便匹配
  const normalizedName = name.replace(/^Spark/, '').toLowerCase();

  // 特殊处理：如果名称中包含 ai/Ai/AI，优先归类到 AI 类别
  if (/ai/i.test(normalizedName)) {
    if (keywords.some((k) => k.toLowerCase() === 'ai')) {
      return 1000; // 给予最高优先级
    }
  }

  // 特殊处理：带有明显操作含义的图标
  const operationPatterns: RegExp[] = [
    /on$/i, // 开启，如 MicOn
    /off$/i, // 关闭，如 MicOff
    /open$/i, // 打开
    /close$/i, // 关闭
    /start$/i, // 开始
    /stop$/i, // 停止
    /enable$/i, // 启用
    /disable$/i, // 禁用
    /add$/i, // 添加
    /remove$/i, // 移除
    /delete$/i, // 删除
    /edit$/i, // 编辑
    /save$/i, // 保存
    /cancel$/i, // 取消
    /upload$/i, // 上传
    /download$/i, // 下载
    /import$/i, // 导入
    /export$/i, // 导出
    /copy$/i, // 复制
    /paste$/i, // 粘贴
    /cut$/i, // 剪切
    /undo$/i, // 撤销
    /redo$/i, // 重做
  ];

  // 检查是否包含操作相关的词（移除 Line/Fill 后缀再检查）
  const hasOperationPattern = operationPatterns.some((pattern) =>
    pattern.test(normalizedName.replace(/line|fill$/i, '')),
  );

  if (hasOperationPattern) {
    if (
      keywords.some(
        (k) => k.toLowerCase() === 'mic' || k.toLowerCase() === 'operation',
      )
    ) {
      return 950; // 给予操作类别较高优先级
    }
  }

  for (const keyword of keywords) {
    const normalizedKeyword = keyword.toLowerCase();
    if (normalizedName.includes(normalizedKeyword)) {
      // 完全匹配得分较高
      if (normalizedName === normalizedKeyword) {
        return 900;
      }

      // 特定品牌名称得分较高
      const brandNames = [
        'bailian',
        'wuying',
        'gaode',
        'aliyun',
        'github',
        'wechat',
        'weibo',
        'qq',
        'dingtalk',
        'apple',
        'google',
        'microsoft',
        'bilibili',
        'tiktok',
        'linkedin',
        'mobi',
        'tongyi',
        'chatgpt',
        'openai',
        'azure',
        'aws',
        'alibaba',
        'tencent',
        'baidu',
        'twitter',
        'facebook',
        'instagram',
        'telegram',
        'line',
        'discord',
      ];

      if (brandNames.includes(normalizedKeyword)) {
        return 900;
      }

      // AI 相关关键词得分较高
      if (normalizedName.startsWith('ai') || normalizedKeyword === 'ai') {
        return 850;
      }

      // 其他情况，关键词越长得分越高
      const score = keyword.length;
      if (score > maxScore) {
        maxScore = score;
      }
    }
  }
  return maxScore;
}

/**
 * 根据图标名称判断其所属类别
 */
export function categorizeIcon(name: string): string {
  let bestCategory = 'Other·其他';
  let bestScore = 0;

  for (const [category, { keywords }] of Object.entries(ICON_CATEGORIES)) {
    // “其他”作为兜底分类：仅当其它分类都未命中时才会返回
    if (category === 'Other·其他') continue;
    const score = getMatchScore(name, keywords);
    if (score > bestScore) {
      bestScore = score;
      bestCategory = category;
    }
  }

  return bestCategory;
}

