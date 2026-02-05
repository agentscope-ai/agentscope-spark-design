const {
  withAndroidManifest,
  AndroidConfig,
} = require("expo/config-plugins");
const { writeFileSync, mkdirSync, existsSync } = require("fs");
const { resolve, dirname } = require("path");

/**
 * Expo Config Plugin: 添加 network_security_config.xml 以支持 WebView 中的 WebSocket 连接
 * 解决 release 构建中 WebView 无法发起 ws:// 调用的问题
 */
function withNetworkSecurityConfig(config) {
  return withAndroidManifest(config, async (config) => {
    const androidManifest = config.modResults;

    // 获取 application 节点
    const application = androidManifest.manifest.application?.[0];
    if (!application) {
      console.warn("withNetworkSecurityConfig: 未找到 application 节点");
      return config;
    }

    // 设置 networkSecurityConfig 属性
    application.$["android:networkSecurityConfig"] =
      "@xml/network_security_config";

    // 确保 usesCleartextTraffic 为 true
    application.$["android:usesCleartextTraffic"] = "true";

    // 创建 network_security_config.xml 文件
    const xmlDir = resolve(
      config.modRequest.platformProjectRoot,
      "app/src/main/res/xml"
    );

    if (!existsSync(xmlDir)) {
      mkdirSync(xmlDir, { recursive: true });
    }

    const networkSecurityConfigContent = `<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <!-- 允许明文流量 (HTTP/WS) 用于开发和特定场景 -->
    <base-config cleartextTrafficPermitted="true">
        <trust-anchors>
            <certificates src="system" />
            <certificates src="user" />
        </trust-anchors>
    </base-config>

    <!-- 如果需要限制特定域名，可以使用 domain-config -->
    <!-- 
    <domain-config cleartextTrafficPermitted="true">
        <domain includeSubdomains="true">example.com</domain>
        <domain includeSubdomains="true">localhost</domain>
        <domain includeSubdomains="true">10.0.2.2</domain>
    </domain-config>
    -->
</network-security-config>
`;

    const configFilePath = resolve(xmlDir, "network_security_config.xml");
    writeFileSync(configFilePath, networkSecurityConfigContent, "utf-8");

    console.log("✅ 已创建 network_security_config.xml");

    return config;
  });
}

module.exports = withNetworkSecurityConfig;
