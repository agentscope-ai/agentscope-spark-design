import { createStyles, createGlobalStyle } from "antd-style";
import { Bubble, ChatAnywhere, ChatAnywhereRef, CustomCardsProvider, DefaultCards, Disclaimer, TMessage, uuid } from '@agentscope-ai/chat';
import { Vaso } from 'vaso'
import MessageList from "./MessageList";
import Input from "./Input";
import { useState } from "react";
import { SparkCopyLine, SparkReplaceLine, SparkThumbsDownLine, SparkThumbsUpLine } from "@agentscope-ai/icons";

export default function () {
  const { styles } = useStyles();
  const [messages, setMessages] = useState<TMessage[]>([
    {
      role: 'user',
      content: 'what is citypop',
      id: '1',
    },
    {
      role: 'assistant',
      cards: [
        {
          code: 'DeepThink',
          data: {
            content: 'City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period. City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s. Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist. Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.'
          }
        },
        {
          code: 'Text',
          data: {
            content: 'City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period. City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s. Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist. Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.'
          },
        },
        {
          code: 'Footer',
          data: {
            left: <DefaultCards.FooterActions data={[
              {
                icon: <SparkCopyLine />, onClick: () => { }
              },
              {
                icon: <SparkReplaceLine />, onClick: () => { }
              },
              {
                icon: <SparkThumbsUpLine />, onClick: () => { }
              },
              {
                icon: <SparkThumbsDownLine />, onClick: () => { }
              },
            ]} />,
          }
        }
      ],
      id: '2',
    },
  ]);
  return <>
    <Style />
    <Vaso className={styles.container} radius={20} depth={0.5} dispersion={0} blur={10}>
      <div className={styles.chat}>
        <MessageList messages={messages} />
        <Input onSubmit={() => {

          setMessages(v => [...v, {
            role: 'user',
            content: 'what is citypop',
            id: uuid(),
          }])

          setTimeout(() => {
            setMessages(v => [...v, {
              role: 'assistant',
              id: uuid(),
              content: 'City Pop, short for City Pop, is a genre of music that originated in Japan during the late 1970s and early 1980s. It blends elements of jazz, folk, easy listening, and AOR (Adult Oriented Rock) with a distinctly urban feel. The term "City Pop" often evokes images of the sophisticated, stylish, and sometimes nostalgic lifestyle of Tokyo and other major Japanese cities during this period. City Pop is characterized by its smooth melodies, mellow rhythms, and often dreamy or introspective lyrics. Common themes include city life, summer vibes, nature, and romantic encounters. The music is frequently associated with a particular aesthetic that reflects the fashion, design, and cultural trends of urban Japan in the 1980s. Some notable City Pop artists include Mariya Takeuchi, known for her iconic song " Plastic Love," and Joe Hisaishi, a composer famous for his work on Studio Ghibli films, though he is not strictly considered a City Pop artist. Today, City Pop has experienced a resurgence in popularity, particularly among younger generations who appreciate its unique sound and the nostalgic value it holds.'
            }])
          }, 1000);

        }} loading={false} />
      </div>
    </Vaso>
  </>
}

const useStyles = createStyles(({ token, css, prefixCls }) => {

  return {
    container: css`
      width: 100%;
      height: 100%;
      border: 1px solid rgba(200, 196, 191, .5);
      border-radius: 20px;
      overflow: hidden;
    `,

    chat: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 800,
      margin: '0 auto',
      padding: '20px 0',
      height: '100%',
    },
  };
});

const Style = createGlobalStyle`
  .ant-bubble-content-filled {
    border: 1px solid rgba(200, 196, 191, .5);
    background-color: rgba(200, 196, 191, .1) !important;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px !important;
  }

  .ant-accordion-deep-thinking {
    border-color:  rgba(200, 196, 191, .5) !important;
  }

  .ant-accordion-group-header-close {
    border: 1px solid rgba(200, 196, 191, .5) !important;
    background-color: rgba(200, 196, 191, .1) !important;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px !important;


  }

  .ant-accordion-group-icon-success {
    color: #fff !important;
  }

  .ant-sender {
    background-color: rgba(54, 53, 52, 0.3) !important;
    border-color: rgba(200, 196, 191, .5) !important;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px !important;
    
  }

  .ant-sender textarea::placeholder,
  .ant-sender textarea {
   color: rgba(231, 231, 237, .88) !important;
  }

  .ant-sender-actions-list .ant-btn {
    background-color: rgba(200, 196, 191, .3) !important;
    border-color: rgba(200, 196, 191, .5) !important;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px !important;


  }

  .ant-bubble-list-scroll-to-bottom .ant-btn {
    background-color: rgba(200, 196, 191, .3) !important;
    border-color: rgba(200, 196, 191, .5) !important;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px !important;



    &:hover {
      color: #fff !important;
      background-color: rgba(200, 196, 191, .5) !important;
      border-color: rgba(200, 196, 191, .5) !important;
    }
  }

  .ant-bubble-footer-left .ant-btn {
    border-color: rgba(200, 196, 191, .5) !important;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px !important;
  }

`;