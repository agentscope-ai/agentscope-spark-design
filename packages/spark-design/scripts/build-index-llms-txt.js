const yargsParser = require('yargs-parser');
const fs = require('fs');
const path = require('path');

const version = require('../package.json').version; // 回退到 package.json 中的版本

/**
 * 生成组件的 CDN URL
 * @param {string} componentName 组件名称
 * @returns {string} CDN URL
 */
function generateComponentUrl(componentName) {
  return `https://unpkg.com/browse/@agentscope-ai/design@${version}/llms/components/commonComponents/${componentName}/index.zh-CN.llms.txt`;
}

/**
 * 扫描组件目录，获取所有组件名称
 * @param {string} componentsDir 组件目录路径
 * @returns {string[]} 组件名称数组
 */
function scanComponents(componentsDir) {
  try {
    const items = fs.readdirSync(componentsDir, { withFileTypes: true });
    return items
      .filter((item) => item.isDirectory())
      .map((item) => item.name)
      .sort(); // 按字母顺序排序
  } catch (error) {
    console.error('扫描组件目录失败:', error);
    return [];
  }
}

/**
 * 生成索引文件内容
 * @param {string[]} componentNames 组件名称数组
 * @returns {string} 索引文件内容
 */
function generateIndexContent(componentNames) {
  const header = '# 索引\n\n';
  const links = componentNames
    .map((componentName) => {
      const url = generateComponentUrl(componentName);
      return `- [${componentName}](${url})`;
    })
    .join('\n');

  return header + links + '\n';
}

/**
 * 主函数：构建索引文件
 */
function buildIndexFile() {
  const projectRoot = path.resolve(process.cwd());
  const componentsDir = path.join(
    projectRoot,
    'llms/components/commonComponents',
  );
  const indexFilePath = path.join(projectRoot, 'llms/index.llms.txt');

  // 扫描组件
  const componentNames = scanComponents(componentsDir);
  console.log(`发现 ${componentNames.length} 个组件:`, componentNames);

  if (componentNames.length === 0) {
    console.warn('未发现任何组件，跳过索引文件生成');
    return;
  }

  // 生成索引内容
  const indexContent = generateIndexContent(componentNames);

  // 写入文件
  try {
    fs.writeFileSync(indexFilePath, indexContent, 'utf8');
    console.log('索引文件生成成功:', indexFilePath);
    console.log('生成的内容预览:');
    console.log(
      indexContent.split('\n').slice(0, 10).join('\n') +
        (componentNames.length > 8 ? '\n...' : ''),
    );
  } catch (error) {
    console.error('写入索引文件失败:', error);
    process.exit(1);
  }
}

// 执行构建
buildIndexFile();
