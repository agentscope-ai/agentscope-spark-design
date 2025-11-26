const { execSync } = require('child_process');
try {
  execSync('npm run build', { stdio: 'inherit' });
  execSync('npm publish --access public', { stdio: 'inherit' });
  console.log('Publish completed successfully');
} catch (error) {
  console.error('Publish failed:', error);
}
