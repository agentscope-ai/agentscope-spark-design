import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { WebView } from "react-native-webview";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Asset } from "expo-asset";
import { File } from "expo-file-system/next";

export default function Index() {
  const insets = useSafeAreaInsets();
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    async function loadHtml() {
      // 加载本地 HTML 资源
      const asset = Asset.fromModule(require("../assets/web/index.html"));
      await asset.downloadAsync();

      if (asset.localUri) {
        const file = new File(asset.localUri);
        const content = await file.text();
        setHtml(content);
      }
    }
    loadHtml();
  }, []);

  if (!html) {
    return (
      <View style={[styles.container, styles.loading]}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View
      style={[styles.container, { paddingTop: insets.top }]}
      // behavior={Platform.OS === "ios" ? "padding" : "height"}
      // keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
    >
      <WebView
        webviewDebuggingEnabled={true}
        source={{ html, baseUrl: "http://localhost" }}
        style={styles.webview}
        originWhitelist={["*"]}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        mixedContentMode="always"
        // 启用键盘自动调整
        automaticallyAdjustContentInsets={true}
        keyboardDisplayRequiresUserAction={false}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn("WebView error:", nativeEvent);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080808',
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#080808',

  },
  webview: {
    flex: 1,
    backgroundColor: '#080808',

  },
});
