
import { AgentScopeRuntimeContentType, IAgentScopeRuntimeRequest } from '../types';
import { useMemo } from 'react';
import { Bubble } from '@agentscope-ai/chat';

export default function AgentScopeRuntimeRequestCard(props: {
  data: IAgentScopeRuntimeRequest;
}) {
  const cards = useMemo(() => {

    return props.data.input[0].content.reduce<any>((p, c) => {
      if (c.type === AgentScopeRuntimeContentType.TEXT) {
        p.push({
          code: 'Text',
          data: {
            content: c.text,
            raw: true,
          },
        });
      }

      if (c.type === AgentScopeRuntimeContentType.IMAGE) {
        const imageCard = p.find((item: any) => item.code === 'Image');
        if (!imageCard) {
          p.push({
            code: 'Images',
            data: [{ url: c.image_url }],
          });

        } else {
          imageCard.data.push({ url: c.image_url });
        }
      }

      if (c.type === AgentScopeRuntimeContentType.VIDEO) {
        const videoCard = p.find((item: any) => item.code === 'Videos');
        if (!videoCard) {
          p.push({
            code: 'Videos',
            data: [{ src: c.video_url, poster: c.video_poster }],
          });
        } else {
          videoCard.data.push({ src: c.video_url, poster: c.video_poster });
        }
      }

      if (c.type === AgentScopeRuntimeContentType.AUDIO) {
        const audioCard = p.find((item: any) => item.code === 'Audios');
        if (!audioCard) {
          p.push({
            code: 'Audios',
            data: [{ src: c.audio_url || c.data }],
          });
        } else {
          audioCard.data.push({ src: c.audio_url || c.data });
        }
      }

      if (c.type === AgentScopeRuntimeContentType.FILE) {
        const fileCard = p.find((item: any) => item.code === 'Files');
        if (!fileCard) {
          p.push({
            code: 'Files',
            data: [{ url: c.file_url, name: c.file_name || c.fileName, size: c.file_size }],
          });
        } else {
          fileCard.data.push({ url: c.file_url, name: c.file_name || c.fileName, size: c.file_size });
        }
      }
      return p;
    }, []);
  }, [props.data.input]);

  if (!cards?.length) return null;

  return <Bubble role="user" cards={cards}></Bubble>;
}

