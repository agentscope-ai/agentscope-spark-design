import React, { useState } from "react";
import { ConfigProvider, Modal, Image as ImageViewer } from 'antd';
import { useProviderContext } from "@agentscope-ai/chat";
import { Locale } from "antd/es/locale";
import { SparkFalseLine, SparkPlayCircleFill } from "@agentscope-ai/icons";

export default function (props) {
  try {
    const src = props.src;
    const url = new URL(src);
    const pathname = url.pathname;

    const isVideo = pathname.endsWith(".mp4");
    const isAudio = pathname.endsWith(".mp3") || pathname.endsWith(".wav");

    if (isAudio) {
      return <audio src={props.src} {...props} controls />
    }

    if (isVideo) {
      return <Video src={props.src} {...props} />
    }


    return <Image src={props.src} {...props} />
  } catch (error) {
    return null;
  }

}

function Image(props) {
  return <ConfigProvider
    locale={{
      Image: { preview: '' }
    } as Locale}
  ><ImageViewer src={props.src} {...props} /></ConfigProvider>
}

function Video(props) {
  const src = props.src;
  const [open, setOpen] = useState(false);
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('markdown-video');


  return <>
    <div className={prefixCls}>
      <div className={`${prefixCls}-poster`} onClick={() => setOpen(true)}>
        <SparkPlayCircleFill className={`${prefixCls}-play`} />
      </div>
    </div>

    <Modal
      closeIcon={<a><SparkFalseLine style={{ fontSize: 20 }} /></a>}
      centered
      transitionName=""
      footer={null} width={500} title="" styles={{
        content: {
          padding: 0
        }
      }} open={open} destroyOnHidden onCancel={() => setOpen(false)}>


      <video controls autoPlay style={{ display: 'block', width: '100%' }}>
        <source src={src} type="video/mp4" />
      </video>
    </Modal>

  </>
}