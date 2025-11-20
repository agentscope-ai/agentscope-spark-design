import { Markdown } from '@agentscope-ai/chat';
import { Flex } from 'antd';

const fullContentZh = `# 出师表
臣亮言：先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。

然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。

诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。

亲贤臣，远小人，此先汉所以兴隆也；亲小人，远贤臣，此后汉所以倾颓也。

先帝在时，每与臣论此事，未尝不叹息痛恨于桓、灵也。

臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。

先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，咨臣以当世之事，由是感激，遂许先帝以驱驰。

先帝知臣谨慎，故临崩寄臣以大事也。

受命以来，夙夜忧叹，恐托付不效，以伤先帝之明，故五月渡泸，深入不毛。

今南方已定，兵甲已足，当奖率三军，北定中原，庶竭驽钝，攘除奸凶，兴复汉室，还于旧都。

此臣所以报先帝而忠陛下之职分也。

愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。

陛下亦宜自谋，以咨诹善道，察纳雅言。深追先帝遗诏，臣不胜受恩感激。今当远离，临表涕零，不知所言。`;

const fullContentEn = `# 出师表

Permit me to observe: the late emperor was taken from us before he could finish his life's work, the restoration of the Han. Today, the empire is still divided in three, and our very survival is threatened.

Yet still the officials at court and the soldiers throughout the realm remain loyal to you, your majesty. Because they remember the late emperor, all of them, and they wish to repay his kindness in service to you.

This is the moment to extend your divine influence, to honor the memory of the late Emperor and strengthen the morale of your officers. It is not the time to listen to bad advice, or close your ears to the suggestions of loyal men.

The emperors of the Western Han chose their courtiers wisely, and their dynasty flourished. The emperors of the Eastern Han chose poorly, and they doomed the empire to ruin.

Whenever the late Emperor discussed this problem with me, he lamented the failings of Emperors Huan and Ling.

I began as a common man, farming in my fields in Nanyang, doing what I could to survive in an age of chaos. I never had any interest in making a name for myself as a noble.

The late Emperor was not ashamed to visit my cottage and seek my advice. Grateful for his regard, I responded to his appeal and threw myself into his service.

The late Emperor always appreciated my caution and, in his final days, entrusted me with his cause.

Since that moment, I have been tormented day and night by the fear that I might let him down. That is why I crossed the Lu river at the height of summer, and entered the wastelands beyond.

Now the south has been subdued, and our forces are fully armed. I should lead our soldiers to conquer the northern heartland and attempt to remove the hateful traitors, restore the house of Han, and return it to the former capital.

This is the way I mean to honor my debt to the late Emperor and fulfill my duty to you.

My only desire is to be permitted to drive out the traitors and restore the Han. If I should let you down, punish my offense and report it to the spirit of the late Emperor.

Your Majesty, consider your course of action carefully. Seek out good advice, and never forget the late words of the late Emperor. I depart now on a long expedition, and I will be forever grateful if you heed my advice. Blinded by my own tears, I know not what I write.`;


export default function () {
  return <Flex gap={32}>
    <div style={{ flex: 1 }}>

      <Markdown
        typing={50}
        enableAnimation={true}
        enableWordCaching={true}
        content={fullContentZh}
      />
    </div>

    <div style={{ flex: 1 }}>

      <Markdown
        cursor="underline"
        typing={12.5}
        enableWordCaching={true}
        content={fullContentEn}
      />
    </div>
  </Flex>
}