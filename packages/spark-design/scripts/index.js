#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// 获取命令行参数
const args = process.argv.slice(2);
const command = args[0];

// 定义可用的脚本
const scripts = {
  'init-migrate-config': 'init-migrate-config.js',
  'migrate-from-bl': 'migrate-from-bl.js',
  'mcp-docs-server': 'mcp-docs-server.js'
};

/**
 * 显示帮助信息
 */
function showHelp() {
  console.log(`
用法: @ali/agentscope-ai-design <command> [options]

可用命令:
  init-migrate-config    初始化迁移配置
  migrate-from-bl        从BL迁移
  mcp-docs-server        启动MCP文档服务器

示例:
  npx @ali/agentscope-ai-design init-migrate-config
  npx @ali/agentscope-ai-design migrate-from-bl
  npx @ali/agentscope-ai-design mcp-docs-server

选项:
  -h, --help             显示帮助信息
  -v, --version          显示版本信息
`);
}

/**
 * 显示版本信息
 */
function showVersion() {
  const packageJson = require('../package.json');
  console.log(packageJson.version);
}

/**
 * 执行指定的脚本
 * @param {string} scriptName - 脚本文件名
 * @param {string[]} scriptArgs - 传递给脚本的参数
 */
function executeScript(scriptName, scriptArgs) {
  const scriptPath = path.join(__dirname, scriptName);
  
  // 检查脚本文件是否存在
  const fs = require('fs');
  if (!fs.existsSync(scriptPath)) {
    console.error(`错误: 脚本文件 ${scriptName} 不存在`);
    process.exit(1);
  }

  // 启动子进程执行脚本
  const child = spawn('node', [scriptPath, ...scriptArgs], {
    stdio: 'inherit',
    cwd: process.cwd()
  });

  // 处理子进程退出
  child.on('exit', (code) => {
    process.exit(code || 0);
  });

  // 处理子进程错误
  child.on('error', (error) => {
    console.error(`启动脚本失败: ${error.message}`);
    process.exit(1);
  });
}

// 主逻辑
function main() {
  // 如果没有命令或只有帮助/版本参数且没有具体命令，显示主帮助
  if (!command || (args.length === 1 && (args.includes('-h') || args.includes('--help')))) {
    showHelp();
    return;
  }

  // 如果只有版本参数且没有具体命令
  if (args.length === 1 && (args.includes('-v') || args.includes('--version'))) {
    showVersion();
    return;
  }

  // 检查命令是否有效
  if (!scripts[command]) {
    console.error(`错误: 未知命令 "${command}"`);
    console.error('运行 --help 查看可用命令');
    process.exit(1);
  }

  // 获取传递给脚本的参数（除了第一个命令参数）
  const scriptArgs = args.slice(1);

  // 执行对应的脚本
  executeScript(scripts[command], scriptArgs);
}

// 启动主程序
main();