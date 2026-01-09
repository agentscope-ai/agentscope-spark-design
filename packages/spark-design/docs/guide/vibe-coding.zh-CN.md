---
order: 4
title: Vibe 编程
group:
  title: 高级用法
  order: 5
---

# Vibe 编程

## LLMs.txt

为了让 Cursor 和 Claude Code 等工具理解 Spark Design，我们支持 LLMs.txt 文件，使 Spark Design 的文档可供大型语言模型使用。
- [index.llms.txt](https://unpkg.com/@agentscope-ai/design@1.0.26/llms/index.llms.txt)：主要的 LLMs.txt 索引文件
- [all.llms.txt](https://unpkg.com/@agentscope-ai/design@1.0.26/llms/all.llms.txt)：Spark Design 的完整文档

在 Cursor 中使用 @Docs 功能将 LLMs.txt 文件包含在您的项目中。[了解更多](https://docs.cursor.com/en/context/@-symbols/@-docs)

## D2C

在前端使用 Alibaba Cloud Spark Design、设计稿使用 Spark Design 套件的前提下，通过 masterGo 视觉稿生成代码可以做到以下几点：

- 准确识别 icon
- 使用标准 css token
- 无需测量间距、圆角等数据，AI 直接还原布局（90%以上概率准确生成）
- 使用标准组件还原页面，大部分标准组件可一次性正确生成，无需二次调整

<div>
<video style="width: 100%" controls src="https://cloud.video.taobao.com/vod/PrrYzvYJkoDlbJwoL8Ei1Bo_60LrKAROCojWxB_EAYs.mp4" />
</div>

我们会在不久的将来开放 masterGo 的设计套件和 rules，帮助您高效率还原视觉稿
