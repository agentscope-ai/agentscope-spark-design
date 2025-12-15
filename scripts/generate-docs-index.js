/**
 * 生成 dist/index.html
 * - 用于 GitHub Pages / 静态站点根路径访问时，自动跳转到 spark-design 文档
 */
const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const targetFile = path.join(distDir, 'index.html');

const redirectTo = './spark-design/';

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="refresh" content="0; url=${redirectTo}" />
    <meta name="robots" content="noindex" />
    <title>Redirecting...</title>
    <script>
      (function () {
        try {
          window.location.replace('${redirectTo}');
        } catch (e) {}
      })();
    </script>
  </head>
  <body>
    Redirecting to <a href="${redirectTo}">${redirectTo}</a>
  </body>
</html>
`;

fs.writeFileSync(targetFile, html, 'utf8');
console.log(`[docs] generated: ${path.relative(process.cwd(), targetFile)}`);

// 生成 spark-chat 的目录入口页，避免 /spark-chat/ 访问 404（因为 dumi 输出可能没有根 index.html）
const sparkChatDir = path.join(distDir, 'spark-chat');
const sparkChatIndex = path.join(sparkChatDir, 'index.html');
const sparkChatRedirectTo = './documents/overview/';

if (fs.existsSync(sparkChatDir)) {
  const chatHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="refresh" content="0; url=${sparkChatRedirectTo}" />
    <meta name="robots" content="noindex" />
    <title>Redirecting...</title>
    <script>
      (function () {
        try {
          window.location.replace('${sparkChatRedirectTo}');
        } catch (e) {}
      })();
    </script>
  </head>
  <body>
    Redirecting to <a href="${sparkChatRedirectTo}">${sparkChatRedirectTo}</a>
  </body>
</html>
`;
  fs.writeFileSync(sparkChatIndex, chatHtml, 'utf8');
  console.log(`[docs] generated: ${path.relative(process.cwd(), sparkChatIndex)}`);
}


