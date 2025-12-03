import { Markdown } from '@agentscope-ai/chat';


const content = `# 这是一个一级标题
## 这是一个二级标题
### 这是一个三级标题
#### 这是一个四级标题
##### 这是一个五级标题
###### 这是一个六级标题

---

这是第一个段落。

这是第二个段落。

city pop, short for city pop, is a genre of music that originated in japan during the late 1970s and early 1980s. it blends elements of jazz, folk, easy listening, and aor (adult oriented rock) with a distinctly urban feel. the term "city pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of tokyo and other major japanese cities during this period. city pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. common themes include city life, summer vibes, nature, and romantic encounters. the music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban japan in the 1980s. some notable city pop artists include mariya takeuchi, known for her iconic song " plastic love," and joe hisaishi, a composer famous for his work on studio ghibli films, though he is not strictly considered a city pop artist. today, city pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.

---

- 项目1
- 项目2
  - 子项目2.1
  - 子项目2.2
- 项目3

---

1. 第一项
2. 第二项
   1. 第二项的第一子项
   2. 第二项的第二子项
3. 第三项

---

> 这是一个引用。

---

*这是斜体文本*
_这是斜体文本_
**这是粗体文本**
__这是粗体文本__
  
***这是粗斜体文本***
**_这是粗斜体文本_**
_**这是粗斜体文本**_
___这是粗斜体文本___
~~这是删除线文本~~

---

[https://www.aliyun.com](https://www.aliyun.com)

![](https://gw.alicdn.com/imgextra/i4/O1CN01sjZ4Uu1erFDOC6IkA_!!6000000003924-2-tps-396-224.png)

![](https://cloud.video.taobao.com/vod/HGJp6c7KVGDDfyeN8eimSccR_OnaS9E7PTqNzbVoAfE.mp4)

![](https://cloud.video.taobao.com/vod/HGJp6c7KVGDDfyeN8eimSccR_OnaS9E7PTqNzbVoAfE.mp3)

---
\`hello world\`

\`\`\`java
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!"); 
        // Hello World!
    }
}
\`\`\`

\`\`\`mermaid
sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!
\`\`\`

---

| 标题1 | 标题2 | 标题3 |标题2 | 标题3 |标题1 | 标题2 | 标题3 |标题2 | 标题3 |标题1 | 标题2 | 标题3 |标题2 | 标题3 |
|-------|-------|-------|----|-------|------|-------|-------|----|-------|------|-------|-------|----|-------|
| 单元格1 | 单元格2 | 单元格3 |单元格3 |单元格3 |单元格1 | 单元格2 | 单元格3 |单元格3 |单元格3 |单元格1 | 单元格2 | 单元格3 |单元格3 |单元格3 |
| 单元格4 | 单元格5 | 单元格6 |单元格6 |单元格6 |单元格4 | 单元格5 | 单元格6 |单元格6 |单元格6 |单元格4 | 单元格5 | 单元格6 |单元格6 |单元格6 |

---
`;

export default function () {
  return <Markdown content={content} />;
}