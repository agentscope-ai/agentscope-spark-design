#!/usr/bin/env node

const { program } = require('commander');
const { execSync } = require('child_process');
const path = require('path');

function execSyncSafe(command) {
  try {
    execSync(command, { stdio: 'ignore' });
  } catch (error) {
  }
}

program
  .name('agentscope-runtime-webui')
  .description('Start the AgentScope Runtime WebUI service')
  .option('-u, --url <url>', 'The backend API address')
  .option('-t, --token <token>', 'The authentication token')
  .parse(process.argv);

const options = program.opts();

async function startServer() {
  console.log('\n🚀 Starting AgentScope Runtime WebUI...\n');

  try {
    execSyncSafe(`npx rimraf ${__dirname}/starter_webui`);
    execSyncSafe(`npx rimraf ${__dirname}/__MACOSX`);
    execSyncSafe(
      `npx decompress-cli ${__dirname}/starter_webui.zip --out-dir ${__dirname}`,
    );

    const targetDir = path.join(__dirname, 'starter_webui');
    execSync(
      `npm install && npm run dev`,
      {
        cwd: targetDir,
        stdio: 'inherit',
        env: {
          ...process.env,
          BASE_URL: options.url || 'BASE_URL',
          TOKEN: options.token || 'TOKEN'
        }
      },
    );

    process.on('SIGINT', () => {
      server.close();
      process.exit(0);
    });

    process.on('SIGTERM', () => {
      server.close();
      process.exit(0);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

startServer();
