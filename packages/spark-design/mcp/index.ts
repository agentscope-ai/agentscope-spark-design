import config from '../package.json';
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import fs from 'fs';
import path from 'path';

// 在 CommonJS 环境中，使用 __dirname
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(process.argv[1]);

/**
 * 从指定路径读取组件文档
 * @param {string} name - 组件名称
 * @returns {string} 文档内容
 */
function readDocs(name: string) {
  try {
    const docsPath = path.join(dirname, '../llms/components/commonComponents', name, 'index.zh-CN.llms.txt');
    const docs = fs.readFileSync(docsPath, 'utf-8');
    return docs;
  } catch (error) {
    return `组件 "${name}" 的文档不存在`;
  }
}

/**
 * 读取组件目录下所有文件夹名称
 * @returns {string} 文件夹名称列表，用换行符分隔
 */
function readComponents() {
  try {
    const componentsPath = path.join(dirname, '../llms/components/commonComponents');
    const items = fs.readdirSync(componentsPath);
    
    // 过滤出文件夹
    const folders = items.filter(item => {
      const itemPath = path.join(componentsPath, item);
      return fs.statSync(itemPath).isDirectory();
    });
    
    return folders.join('\n');
  } catch (error) {
    return `组件目录不存在或读取失败`;
  }
}

function startMcpServer() {
  const server = new McpServer({
    name: "@agentscope-ai/design/mcp-docs-server",
    version: config.version,
  });

  server.registerTool("get component docs", 
    {
      title: '获取组件文档',
      description: `输入 ${config.name} 组件名称，获取组件API文档`,
      inputSchema: {
        name: z.string().default('').describe(`${config.name}组件名称`),
      }
    },
    async function({ name }) {
      const docs = readDocs(name);
      return {
        content: [
          {
            type: "text",
            text: docs
          }
        ]
      };
    }
  );

  server.registerTool("get component list", 
    {
      title: '获取组件列表',
      description: `获取${config.name}组件列表`,
      inputSchema: {}
    },
    async function() {
      return {
        content: [
          {
            type: "text",
            text: readComponents(),
          }
        ]
      };
    }
  )

  const transport = new StdioServerTransport();
  return server.connect(transport);
}

// 如果直接运行此文件，启动服务器 (CommonJS 兼容检查)
if (require.main === module) {
  startMcpServer()
  .then(() => {
    console.log('MCP server started');
  })
  .catch(console.error);
}

export default startMcpServer;