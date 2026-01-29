#!/usr/bin/env node

const { program } = require('commander');
const { execSync } = require('child_process');

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
    

    execSync(
      `cd ${__dirname}/starter_webui && npm install && npx cross-env BASE_URL=${
        options.url || 'BASE_URL'
      } TOKEN=${options.token || 'TOKEN'} npm run dev`,
      {
        stdio: 'inherit',
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
