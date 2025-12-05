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
  .description('启动 AgentScope Runtime WebUI 服务')
  .option('-u, --url <url>', '指定后端 API 地址')
  .option('-t, --token <token>', '指定认证 token')
  .parse(process.argv);

const options = program.opts();

async function startServer() {
  console.log('\n🚀 Starting AgentScope Runtime WebUI...\n');

  try {
    execSyncSafe(`rm ${__dirname}/starter_webui`);
    execSyncSafe(`rm ${__dirname}/__MACOSX`);
    execSyncSafe(`unzip ${__dirname}/starter_webui.zip -d ${__dirname}`);

    execSync(
      `cd ${__dirname}/starter_webui && npm install && BASE_URL=${
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
