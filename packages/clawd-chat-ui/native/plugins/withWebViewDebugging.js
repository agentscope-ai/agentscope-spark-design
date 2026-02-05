const { withMainApplication } = require("expo/config-plugins");

/**
 * Expo Config Plugin: 在所有构建中启用 WebView 调试
 */
function withWebViewDebugging(config) {
  return withMainApplication(config, async (config) => {
    const mainApplication = config.modResults;

    // 添加 import 语句
    if (!mainApplication.contents.includes("import android.webkit.WebView")) {
      mainApplication.contents = mainApplication.contents.replace(
        "import android.app.Application",
        "import android.app.Application\nimport android.webkit.WebView"
      );
    }

    // 在 onCreate 中添加 WebView.setWebContentsDebuggingEnabled(true)
    if (
      !mainApplication.contents.includes(
        "WebView.setWebContentsDebuggingEnabled(true)"
      )
    ) {
      mainApplication.contents = mainApplication.contents.replace(
        "super.onCreate()",
        "super.onCreate()\n    WebView.setWebContentsDebuggingEnabled(true)"
      );
    }

    return config;
  });
}

module.exports = withWebViewDebugging;
