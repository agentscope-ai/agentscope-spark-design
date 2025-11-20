import { Space } from 'antd';
import React from 'react';
import { Attachments } from '@agentscope-ai/chat';
import { createGlobalStyle } from 'antd-style';
import { useProviderContext } from '@agentscope-ai/chat';
import { SparkDownloadLine } from '@agentscope-ai/icons';

const Style = createGlobalStyle`
.${p => p.theme.prefixCls}-bubble-files-file {
  position: relative;
}

.${p => p.theme.prefixCls}-bubble-files-download {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.5);
  z-index: 1;
  opacity: 0;
  font-size: 16px;
  border-radius: ${p => p.theme.borderRadius}px;
  cursor: pointer;
  color: ${p => p.theme.colorWhite};
  transition: opacity ${p => p.theme.motionDurationSlow}

}

.${p => p.theme.prefixCls}-bubble-files-file:hover .${p => p.theme.prefixCls}-bubble-files-download {
  opacity: 1;
}
`
export default function Files(props) {

  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('bubble-files');


  return <>

    <Style />
    <Space className={prefixCls}>
      {props.data.map((file, index) => {
        const fileInfo = {
          name: file.name || file.filename,
          size: file.size || file.bytes,
          url: file.url,
        }

        return <div key={index} className={`${prefixCls}-file`}>
          <Attachments.FileCard
            // @ts-ignore
            item={fileInfo}
          />

          {
            fileInfo.url && <div className={`${prefixCls}-download`} onClick={() => {
              window.open(fileInfo.url, '_blank');
            }}>
              <SparkDownloadLine />
            </div>
          }
        </div>
      })}
    </Space>
  </>
}

