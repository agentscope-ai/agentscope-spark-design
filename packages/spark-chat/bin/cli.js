#!/usr/bin/env node

const { program } = require('commander');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

function execSyncSafe(command) {
  try {
    execSync(command, { stdio: 'ignore' });
  } catch (error) {
  }
}

function getFileHash(filePath) {
  try {
    const data = fs.readFileSync(filePath);
    return crypto.createHash('md5').update(data).digest('hex');
  } catch (error) {
    return null;
  }
}

function getCacheFile() {
  return path.join(__dirname, '.webui-cache.json');
}

function loadCache() {
  try {
    const cacheFile = getCacheFile();
    if (fs.existsSync(cacheFile)) {
      return JSON.parse(fs.readFileSync(cacheFile, 'utf-8'));
    }
  } catch (error) {
  }
  return null;
}

function saveCache(cache) {
  try {
    fs.writeFileSync(getCacheFile(), JSON.stringify(cache, null, 2));
  } catch (error) {
  }
}

program
  .name('agentscope-runtime-webui')
  .description('Start the AgentScope Runtime WebUI service')
  .option('-u, --url <url>', 'The backend API address')
  .option('-t, --token <token>', 'The authentication token')
  .option('-f, --force', 'Force re-extract WebUI even if it exists')
  .parse(process.argv);

const options = program.opts();

async function startServer() {
  console.log('\n🚀 Starting AgentScope Runtime WebUI...\n');

  try {
    const targetDir = path.join(__dirname, 'starter_webui');
    const nodeModulesDir = path.join(targetDir, 'node_modules');
    const zipFile = path.join(__dirname, 'starter_webui.zip');
    const cache = loadCache();
    const currentZipHash = getFileHash(zipFile);

    let shouldDecompress = false;

    // Force decompress if --force flag is set
    if (options.force) {
      console.log('⚠️  Force mode: removing existing WebUI...');
      execSyncSafe(`npx rimraf ${targetDir}`);
      execSyncSafe(`npx rimraf ${__dirname}/__MACOSX`);
      shouldDecompress = true;
    } else if (!fs.existsSync(targetDir)) {
      // Decompress if target directory doesn't exist
      console.log('📦 Decompressing WebUI for the first time...');
      shouldDecompress = true;
    } else if (cache && cache.zipHash && currentZipHash && cache.zipHash !== currentZipHash) {
      // Decompress if zip file has changed
      console.log('🔄 WebUI zip file has changed, re-extracting...');
      execSyncSafe(`npx rimraf ${targetDir}`);
      execSyncSafe(`npx rimraf ${__dirname}/__MACOSX`);
      shouldDecompress = true;
    } else {
      console.log('✅ WebUI is up to date, skipping decompression.');
    }

    if (shouldDecompress) {
      execSyncSafe(
        `npx decompress-cli ${zipFile} --out-dir ${__dirname}`,
      );
      // Save cache after successful decompression
      saveCache({ zipHash: currentZipHash, timestamp: Date.now() });
    }

    // Only run npm install if node_modules doesn't exist
    if (!fs.existsSync(nodeModulesDir)) {
      console.log('📦 Installing dependencies...');
      execSync(`npm install`, {
        cwd: targetDir,
        stdio: 'inherit',
      });
    } else {
      console.log('✅ Dependencies already installed, skipping npm install.');
    }

    execSync(
      `npm run dev`,
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
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

startServer();
