
import React, { useMemo } from 'react';
import { AgentScopeRuntimeContentType, IAgentScopeRuntimeRequest } from '../types';
import { Bubble } from '@agentscope-ai/chat';
import Actions from './Actions';
import { useChatAnywhereOptions } from '../../Context/ChatAnywhereOptionsContext';

function sortByOrder<T extends { order?: number }>(arr: T[]): T[] {
  return arr.slice().sort((a, b) => (a.order ?? 100) - (b.order ?? 100));
}

/**
 * Default SDK rendering of the user request bubble, extracted so plugin
 * `request.render` can opt into the original rendering via fallback().
 */
function DefaultRequestRender(props: { data: IAgentScopeRuntimeRequest }) {
  const onFileCardClick = useChatAnywhereOptions(v => v.api?.onFileCardClick);

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
            onClick: onFileCardClick,
          });
        } else {
          fileCard.data.push({ url: c.file_url, name: c.file_name || c.fileName, size: c.file_size });
        }
      }
      return p;
    }, []);
  }, [props.data.input, onFileCardClick]);

  if (!cards?.length) return null;

  return <>
    <Bubble role="user" cards={cards}></Bubble>
    <Actions data={props.data} />
  </>;
}

export default function AgentScopeRuntimeRequestCard(props: {
  data: IAgentScopeRuntimeRequest;
}) {
  const requestOptions = useChatAnywhereOptions(v => v.request);

  const fallback = () => <DefaultRequestRender data={props.data} />;
  const main = requestOptions?.render
    ? requestOptions.render({ data: props.data, fallback })
    : fallback();

  const prependList = sortByOrder(requestOptions?.prepend ?? []);
  const appendList = sortByOrder(requestOptions?.append ?? []);

  if (
    !requestOptions?.render &&
    prependList.length === 0 &&
    appendList.length === 0
  ) {
    // Hot path: zero customization → no Fragment wrapping overhead.
    return fallback();
  }

  return <>
    {prependList.map((e, i) => (
      <React.Fragment key={e.id ?? `pre-${i}`}>
        {e.render({ data: props.data })}
      </React.Fragment>
    ))}
    {main}
    {appendList.map((e, i) => (
      <React.Fragment key={e.id ?? `post-${i}`}>
        {e.render({ data: props.data })}
      </React.Fragment>
    ))}
  </>;
}

