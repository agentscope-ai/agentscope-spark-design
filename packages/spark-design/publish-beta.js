const { execSync } = require('child_process');

const pkg = require('./package.json');

// 发布
try {
  execSync('npm run build', { stdio: 'inherit' });

  const version = `${pkg.version}-beta.${Date.now()}`;
  execSync(`npm version ${version} --no-git-tag-version`, { stdio: 'inherit' });

  execSync('npm publish --registry=https://registry.npmjs.org --access public --tag beta', { stdio: 'inherit' });
  console.log('Publish completed successfully');
} catch (error) {
  console.error('Publish failed:', error);
} finally {
  execSync(`npm version ${pkg.version} --no-git-tag-version`, { stdio: 'inherit' });
}
