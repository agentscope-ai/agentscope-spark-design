import React from 'react';
import Audios from '../../../../DefaultCards/Audios';
import Files from '../../../../DefaultCards/Files';
import Images from '../../../../DefaultCards/Images';
import Videos from '../../../../DefaultCards/Videos';
import Markdown from '../../../../Markdown';
import useTyping from '../../../../Markdown/core/hooks/useTyping';
import { useChatAnywhereOptions } from '../../Context/ChatAnywhereOptionsContext';
import {
  AgentScopeRuntimeContentType,
  AgentScopeRuntimeRunStatus,
  IAgentScopeRuntimeMessage,
} from '../types';

/** Remember live content so a completed event does not skip the queued tail. */
function StreamingText({
  text,
  status,
  messageStatus,
}: {
  text?: string;
  status: AgentScopeRuntimeRunStatus;
  messageStatus: AgentScopeRuntimeRunStatus;
}) {
  const typing = useChatAnywhereOptions((v) => v.response?.typing);
  const streaming = status === AgentScopeRuntimeRunStatus.InProgress;
  const [wasStreaming, setWasStreaming] = React.useState(streaming);
  React.useEffect(() => {
    if (streaming) setWasStreaming(true);
  }, [streaming]);
  const interrupted = [status, messageStatus].some(
    (value) =>
      value === AgentScopeRuntimeRunStatus.Canceled ||
      value === AgentScopeRuntimeRunStatus.Failed ||
      value === AgentScopeRuntimeRunStatus.Rejected,
  );
  const content = useTyping({
    content: text,
    typing: (streaming || wasStreaming) && !interrupted ? typing : false,
  });
  return (
    <Markdown
      content={content}
      cursor={!interrupted && (streaming || content !== text)}
    />
  );
}

const Message = React.memo(function ({
  data,
}: {
  data: IAgentScopeRuntimeMessage;
}) {
  const replaceMediaURL = useChatAnywhereOptions((v) => v.api?.replaceMediaURL);
  const onFileCardClick = useChatAnywhereOptions((v) => v.api?.onFileCardClick);
  const formatMediaURL = React.useCallback(
    (url?: string) => {
      if (!url) return url;
      return replaceMediaURL?.(url) || url;
    },
    [replaceMediaURL],
  );

  if (!data.content?.length) return null;

  return (
    <>
      {data.content.map((item, index) => {
        switch (item.type) {
          case AgentScopeRuntimeContentType.TEXT:
            return (
              <StreamingText
                key={`${data.id}:${index}`}
                text={item.text}
                status={item.status}
                messageStatus={data.status}
              />
            );
          case AgentScopeRuntimeContentType.REFUSAL:
            return <Markdown raw key={index} content={item.refusal}></Markdown>;
          case AgentScopeRuntimeContentType.IMAGE:
            return (
              <Images
                key={index}
                data={[{ url: formatMediaURL(item.image_url) }]}
              ></Images>
            );
          case AgentScopeRuntimeContentType.VIDEO:
            return (
              <Videos
                key={index}
                data={[
                  {
                    src: formatMediaURL(item.video_url),
                    poster: formatMediaURL(item.video_poster),
                  },
                ]}
              ></Videos>
            );
          case AgentScopeRuntimeContentType.FILE:
            return (
              <Files
                key={index}
                data={[
                  {
                    url: formatMediaURL(item.file_url),
                    name: item.file_name || item.fileName || item.file_id,
                    size: item.file_size,
                  },
                ]}
                onClick={onFileCardClick}
              ></Files>
            );
          case AgentScopeRuntimeContentType.AUDIO:
            return (
              <Audios
                key={index}
                data={[{ src: formatMediaURL(item.audio_url || item.data) }]}
              ></Audios>
            );
          default:
            return <div key={index}>{JSON.stringify(item)}</div>;
        }
      })}
    </>
  );
});

export default Message;
