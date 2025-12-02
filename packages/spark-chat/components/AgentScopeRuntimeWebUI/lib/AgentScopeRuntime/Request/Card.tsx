
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

      if (c.type === AgentScopeRuntimeContentType.FILE) {
        const fileCard = p.find((item: any) => item.code === 'Files');
        if (!fileCard) {
          p.push({
            code: 'Files',
            data: [{ url: c.file_url, name: c.file_name, size: c.file_size }],
          });
        } else {
          fileCard.data.push({ url: c.file_url, name: c.file_name, size: c.file_size });
        }
      }
      return p;
    }, []);
  }, [props.data.input]);

  return <Bubble role="user" cards={cards}></Bubble>;
}

