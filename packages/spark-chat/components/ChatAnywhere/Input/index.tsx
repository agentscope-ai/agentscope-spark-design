import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import { useProviderContext, ChatInput, uuid, Sender, Attachments } from '@agentscope-ai/chat';
import cls from 'classnames';
import { useChatAnywhere } from '../hooks/ChatAnywhereProvider';
import { useInput } from '../hooks/useInput';
import { Button, GetProp, Space, Upload } from 'antd';
import Style from './style';
import { IconButton } from '@agentscope-ai/design';

type AttachedFiles = GetProp<typeof Attachments, 'items'>;

export default forwardRef(function (_, ref) {
  const [content, setContent] = React.useState('');
  const onUpload = useChatAnywhere(v => v.onUpload);
  const resetData = new Array(onUpload?.length || 0).fill([]);
  const [attachedFiles, setAttachedFiles] = React.useState<AttachedFiles[]>(resetData);
  useEffect(() => {
    setAttachedFiles(resetData);
  }, [resetData.length]);

  const inputContext = useInput();
  const uiConfig = useChatAnywhere(v => v.uiConfig);
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('chat-anywhere-sender');
  const onStop = useChatAnywhere(v => v.onStop);
  const onInput = useChatAnywhere(v => {
    const defaultValue = {
      beforeUI: undefined,
      afterUI: undefined,
      morePrefixActions: undefined,
      maxLength: undefined,
      zoomable: true,
      beforeSubmit: () => Promise.resolve(true),
      header: [],
      hide: false,
    };

    return {
      ...defaultValue,
      ...v.onInput,
    }
  });

  React.useImperativeHandle(ref, () => {
    return {
      setInputContent: setContent
    };
  }, []);

  useEffect(() => {
    inputContext.setDisabled(onInput.disabled);
  }, [onInput.disabled])


  if (onInput.hide) return null;

  const handleFileChange = async (index, fileList) => {
    setAttachedFiles(attachedFiles => {
      return attachedFiles.map((item, i) => {
        if (i === index) {
          return fileList;
        }
        return item;
      })
    })
  }

  const prefixNodes = onUpload?.length ?
    onUpload.map((item, index) => {
      return <Upload
        {...item}
        fileList={attachedFiles[index]}
        key={index}
        onChange={(info) => {
          if (item.beforeUpload && info.file.status) {
            handleFileChange(index, info.fileList)
          }

          if (!item.beforeUpload) {
            handleFileChange(index, info.fileList)
          }
        }}
        showUploadList={false}
      >
        <IconButton
          icon={item.icon}
          bordered={false}
        />
      </Upload>
    }) : [];


  const senderHeader = (
    <Sender.Header
      closable={false}
      open={attachedFiles?.some(item => item.length)}
    >
      {
        attachedFiles.map((files, index) => {
          if (!files.length) return null;
          return <Attachments
            key={index}
            items={files}
            onChange={(info) => handleFileChange(index, info.fileList)}
          />
        })
      }
    </Sender.Header>
  );

  const submitFileList = attachedFiles.map(files => files.filter(file => file.status === 'done'));
  const fileLoading = attachedFiles.some(files => files.some(file => file.status === 'uploading'));



  return <>
    <Style />
    <div
      className={cls(`${prefixCls}-wrapper`)}
    >
      {
        uiConfig.quickInput && <div className={cls(`${prefixCls}-wrapper-header`)}>{uiConfig.quickInput}</div>
      }

      {
        onInput.beforeUI
      }
      <ChatInput
        placeholder={onInput.placeholder}
        value={content}
        onChange={setContent}
        maxLength={onInput.maxLength}
        disabled={fileLoading || inputContext.disabled}
        scalable={onInput?.zoomable}
        header={senderHeader}
        prefix={<>
          {prefixNodes}
          {onInput?.morePrefixActions}
        </>}
        onSubmit={async () => {
          const next = await (onInput.beforeSubmit || (() => Promise.resolve(true)))();
          if (!next) return;
          // @ts-ignore
          onInput.onSubmit({ query: content, fileList: submitFileList });
          setContent('');
          setAttachedFiles(resetData);
        }}
        onCancel={() => {
          onStop?.();
          inputContext.setLoading(false);
        }}
        loading={inputContext.loading}
      />
      {
        onInput.afterUI
      }
    </div></>
})