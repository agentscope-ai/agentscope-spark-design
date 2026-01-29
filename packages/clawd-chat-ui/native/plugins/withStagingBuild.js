const { withAppBuildGradle } = require("expo/config-plugins");

/**
 * Expo Config Plugin: 添加 staging 构建变体 + 让 Release 也可调试
 */
function withStagingBuild(config) {
  return withAppBuildGradle(config, (config) => {
    let contents = config.modResults.contents;

    // 给 release 添加 debuggable true
    if (!contents.includes("debuggable true") && contents.includes("release {")) {
      contents = contents.replace(
        /(release\s*\{)/,
        `$1
            debuggable true`
      );
    }

    // 添加 staging buildType
    if (!contents.includes("staging {")) {
      contents = contents.replace(
        /(release\s*\{[^}]+\})/,
        `$1
        staging {
            initWith release
            debuggable true
            signingConfig signingConfigs.debug
        }`
      );
    }

    config.modResults.contents = contents;
    return config;
  });
}

module.exports = withStagingBuild;
