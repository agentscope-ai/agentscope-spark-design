const { execSync } = require('child_process');
try {
  execSync('npm run src:build', { stdio: 'inherit' });
  execSync('npm publish --access public', { stdio: 'inherit' });
  console.log('Publish completed successfully');
  execSync('tnpm sync @agentscope-ai/chat', { stdio: 'inherit' });

} catch (error) {
  console.error('Publish failed:', error);
}
