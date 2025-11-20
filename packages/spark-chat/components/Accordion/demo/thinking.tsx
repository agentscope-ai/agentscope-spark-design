import { DeepThinking } from '@agentscope-ai/chat';
import { Flex } from 'antd'


const App = () => {
  return <>
  <Flex gap={32} vertical>
    {/* 示例 1: 正在生成中 */}
    <DeepThinking
      loading={true}
      content='你好，我是AI智能助手，我正在思考...'
    />

    {/* 示例 2: 生成完成，展开状态 */}
    <DeepThinking
      defaultOpen
      loading={false}
      content={`Okay, the user is asking about "citypop." Let me start by recalling what I know about that term. I remember that City Pop is a genre of music, but I need to make sure I'm accurate.

First, when did City Pop originate? I think it was in Japan during the late 1970s and 1980s. That makes sense because Japan's economy was booming then, leading to a vibrant urban culture. The genre probably blends Western styles like funk, jazz, and disco with Japanese pop elements. Artists like Tatsuro Yamashita and Mariya Takeuchi come to mind. Oh, and there's that song "Plastic Love" by Mariya Takeuchi that went viral online recently, which might have sparked renewed interest.

I should also mention the themes of City Pop songs—they often reflect city life, romance, and leisure, fitting the upbeat and cosmopolitan vibe of the time. The visual style associated with it includes retro anime and vibrant cityscapes, which adds to its aesthetic appeal. It's interesting how the internet, especially platforms like YouTube and Spotify, helped revive this genre internationally. Maybe I should note that connection between modern digital culture and the resurgence of City Pop.

Wait, are there any subgenres or key characteristics I should highlight? The use of synthesizers, smooth vocals, and lush production are typical. Also, City Pop was influenced by yacht rock and soft rock from the West. It's important to link it to Japan's economic bubble era, as that context explains the music's optimistic and luxurious feel.

I need to ensure I don't confuse it with other Japanese genres like J-pop or Enka. City Pop is distinct in its fusion with Western sounds. Including notable albums, like Tatsuro Yamashita's "For You" or Anri's "Timely!!", could be helpful. Oh, and the connection to future funk and vaporwave genres that sample City Pop tracks is a good point for its modern influence.`}
    />

    {/* 示例 3: 使用 maxHeight 限制高度 */}
    <DeepThinking
      title="限制最大高度示例"
      defaultOpen
      maxHeight={150}
      content={`这是一个很长的思考内容，用于演示 maxHeight 属性。

当内容超出设定的最大高度时，会出现滚动条。

这样可以避免内容过长导致页面布局问题。

让我们添加更多文字来演示滚动效果...

第一段：City Pop 是日本在 1970 年代末到 1980 年代流行的音乐类型。
第二段：它融合了西方的放克、爵士、迪斯科等元素。
第三段：代表艺术家包括山下达郎、竹内玛莉亚等。
第四段：近年来通过互联网重新流行起来。
第五段：其特点是使用合成器、流畅的人声和华丽的制作。
第六段：与日本经济泡沫时期的乐观氛围密切相关。
第七段：影响了后来的 Future Funk 和 Vaporwave 等音乐流派。`}
    />

    {/* 示例 4: 生成结束后自动关闭 */}
    <DeepThinking
      title="自动关闭示例"
      autoCloseOnFinish
      loading={false}
      content="这个示例演示了 autoCloseOnFinish 功能，生成结束后默认是关闭状态，需要手动点击才能展开查看内容。"
    />
  </Flex>
</>
};

export default App;
