const fs = require('fs');
const { execSync } = require('child_process');

const pkg = require('./package.json');

// 备份当前 package.json 文件
execSync('mv package.json package.json.bak');

// 修改临时 package.json
delete pkg.publishConfig;
pkg.name = '@agentscope-ai/chat';
delete pkg.peerDependencies['@ali/agentscope-ai-design'];

fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2));

// 发布
try {
  execSync('npm run build:publish', { stdio: 'inherit' });
  execSync('npm publish --access public', { stdio: 'inherit' });
  console.log('Publish completed successfully');
} catch (error) {
  console.error('Publish failed:', error);
}

// 删除临时 package.json
execSync('rm package.json');

// 还原
execSync('mv package.json.bak package.json');
