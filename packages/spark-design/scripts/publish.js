const { execSync } = require('child_process');
try {
  execSync('npm run build', { stdio: 'inherit' });
  execSync('npm publish --registry=https://registry.npmjs.org --access public', { stdio: 'inherit' });
  console.log('Publish completed successfully');
} catch (error) {
  console.error('Publish failed:', error);
}
