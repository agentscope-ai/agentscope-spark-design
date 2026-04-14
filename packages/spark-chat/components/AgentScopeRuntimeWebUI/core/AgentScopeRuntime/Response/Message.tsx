import React from "react";
import { Markdown } from '@agentscope-ai/chat';
import { AgentScopeRuntimeContentType, AgentScopeRuntimeRunStatus, IAgentScopeRuntimeMessage } from "../types";
import Images from '../../../../DefaultCards/Images';
import Videos from '../../../../DefaultCards/Videos';
import Files from '../../../../DefaultCards/Files';
import Audios from '../../../../DefaultCards/Audios';
import { useChatAnywhereOptions } from "../../Context/ChatAnywhereOptionsContext";

const Message = React.memo(function ({ data }: { data: IAgentScopeRuntimeMessage }) {
  const replaceMediaURL = useChatAnywhereOptions(v => v.api?.replaceMediaURL);
  const formatMediaURL = React.useCallback((url?: string) => {
    if (!url) return url;
    return replaceMediaURL?.(url) || url;
  }, [replaceMediaURL]);

  if (!data.content?.length) return null;

  return <>
    {
      data.content.map((item, index) => {
        switch (item.type) {
          case AgentScopeRuntimeContentType.TEXT:
            return <Markdown key={index} content={item.text} cursor={item.status === AgentScopeRuntimeRunStatus.InProgress ? true : false}></Markdown>
          case AgentScopeRuntimeContentType.REFUSAL:
            return <Markdown raw key={index} content={item.refusal}></Markdown>
          case AgentScopeRuntimeContentType.IMAGE:
            return <Images key={index} data={[{ url: formatMediaURL(item.image_url) }]}></Images>
          case AgentScopeRuntimeContentType.VIDEO:
            return <Videos key={index} data={[{
              src: formatMediaURL(item.video_url),
              poster: formatMediaURL(item.video_poster),
            }]}></Videos>
          case AgentScopeRuntimeContentType.FILE:
            return <Files key={index} data={[{
              url: formatMediaURL(item.file_url),
              name: item.file_name || item.fileName || item.file_id,
              size: item.file_size,
            }]}></Files>
          case AgentScopeRuntimeContentType.AUDIO:
            return <Audios key={index} data={[{ src: formatMediaURL(item.audio_url || item.data) }]}></Audios>
          default:
            return <div key={index}>{JSON.stringify(item)}</div>
        }
      })
    }
  </>
})

export default Message;

