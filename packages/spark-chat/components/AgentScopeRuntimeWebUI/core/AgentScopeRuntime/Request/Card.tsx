import React, { useMemo } from 'react';
import Bubble from '../../../../Bubble';
import { useChatAnywhereOptions } from '../../Context/ChatAnywhereOptionsContext';
import {
  AgentScopeRuntimeContentType,
  IAgentScopeRuntimeRequest,
} from '../types';
import Actions from './Actions';

function sortByOrder<T extends { order?: number }>(arr: T[]): T[] {
  return arr.slice().sort((a, b) => (a.order ?? 100) - (b.order ?? 100));
}

/**
 * Default SDK rendering of the user request bubble, extracted so plugin
 * `request.render` can opt into the original rendering via fallback().
 *
 * `contentPrepend` / `contentAppend` are slot props for host integrations
 * that need to inject UI BETWEEN the bubble and the action bar — Actions
 * stay anchored at the end of the card. Separate from the outer
 * `requestOptions.prepend / append` lists, which sit OUTSIDE the card.
 */
function DefaultRequestRender(props: {
  data: IAgentScopeRuntimeRequest;
  contentPrepend?: React.ReactNode;
  contentAppend?: React.ReactNode;
}) {
  const onFileCardClick = useChatAnywhereOptions((v) => v.api?.onFileCardClick);

  const cards = useMemo(() => {
    const contents = (props.data.input || []).flatMap(
      (message) => message.content || [],
    );
    return contents.reduce<any[]>((p, c) => {
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
        const imageCard = p.find((item) => item.code === 'Images');
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
            data: [
              {
                url: c.file_url,
                name: c.file_name || c.fileName,
                size: c.file_size,
              },
            ],
            onClick: onFileCardClick,
          });
        } else {
          fileCard.data.push({
            url: c.file_url,
            name: c.file_name || c.fileName,
            size: c.file_size,
          });
        }
      }
      return p;
    }, []);
  }, [props.data.input, onFileCardClick]);

  if (!cards?.length) return null;

  return (
    <>
      {props.contentPrepend ?? null}
      <Bubble role="user" cards={cards}></Bubble>
      {props.contentAppend ?? null}
      <Actions data={props.data} />
    </>
  );
}

export default function AgentScopeRuntimeRequestCard(props: {
  data: IAgentScopeRuntimeRequest;
  contentPrepend?: React.ReactNode;
  contentAppend?: React.ReactNode;
}) {
  const requestOptions = useChatAnywhereOptions((v) => v.request);

  const fallback = () => (
    <DefaultRequestRender
      data={props.data}
      contentPrepend={props.contentPrepend}
      contentAppend={props.contentAppend}
    />
  );
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

  const main = requestOptions?.render
    ? requestOptions.render({ data: props.data, fallback })
    : fallback();

  return (
    <>
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
    </>
  );
}
