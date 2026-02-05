const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// 添加 .html 到资源扩展名列表
config.resolver.assetExts.push("html");

module.exports = config;
