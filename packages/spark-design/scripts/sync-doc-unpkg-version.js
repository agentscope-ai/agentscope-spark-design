const fs = require('fs');
const path = require('path');

const pkg = require('../package.json');

/**
 * 将 docs 中 unpkg 链接里的 @<version> 同步为 package.json 的 version
 * - 保持文档源码为纯 markdown: [text](url)
 * - 避免手动更新版本号
 */
function syncFileVersion(filePath, version) {
  const raw = fs.readFileSync(filePath, 'utf8');

  const replaced = raw.replace(
    /(https:\/\/unpkg\.com\/@agentscope-ai\/design@)([^/]+)(\/llms\/)/g,
    `$1${version}$3`,
  );

  if (replaced !== raw) {
    fs.writeFileSync(filePath, replaced, 'utf8');
    // eslint-disable-next-line no-console
    console.log(`[docs:sync-version] updated: ${path.relative(process.cwd(), filePath)}`);
  } else {
    // eslint-disable-next-line no-console
    console.log(`[docs:sync-version] no change: ${path.relative(process.cwd(), filePath)}`);
  }
}

function main() {
  const version = pkg.version;
  if (!version) {
    throw new Error('[docs:sync-version] package.json version not found');
  }

  const targets = [
    path.resolve(__dirname, '../docs/guide/vibe-coding.zh-CN.md'),
    path.resolve(__dirname, '../docs/guide/vibe-coding.en-US.md'),
  ];

  targets.forEach((filePath) => syncFileVersion(filePath, version));
}

main();

