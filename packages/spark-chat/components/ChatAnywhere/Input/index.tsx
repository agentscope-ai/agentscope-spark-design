import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import { Flex, Popover, UploadFile } from 'antd';
import { useProviderContext, ChatInput, uuid, Sender, Attachments } from '@agentscope-ai/chat';
import cls from 'classnames';
import { useChatAnywhere } from '../hooks/ChatAnywhereProvider';
import { useInput } from '../hooks/useInput';
import { GetProp, Space, Upload } from 'antd';
import Style from './style';
import { IconButton, Button } from '@agentscope-ai/design';
import { AIGC } from '@agentscope-ai/chat';
import UploadPopover from './UploadPopover';

type AttachedFiles = GetProp<typeof Attachments, 'items'>;

export default forwardRef(function (_, ref) {
  const [content, setContent] = React.useState('');
  const inputContext = useInput();
  const onUpload = useChatAnywhere(v => {
    return v.onUpload.map(d => ({
      ...d,
      disabled: d.disabled || inputContext.disabled,
    }))
  });
  const resetData = new Array(onUpload?.length || 0).fill([]);
  const [focus, setFocus] = useState(false);
  const [attachedFiles, setAttachedFiles] = React.useState<AttachedFiles[]>(resetData);
  const attachedFilesRef = useRef<AttachedFiles[]>(resetData);
  useEffect(() => {
    setAttachedFiles(resetData);
  }, [resetData.length]);

  useEffect(() => {
    attachedFilesRef.current = attachedFiles;
  }, [attachedFiles]);

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
      enableFocusExpand: false,
      variant: 'default',
      hide: false,
    };

    return {
      ...defaultValue,
      ...v.onInput,
    }
  });

  React.useImperativeHandle(ref, () => {
    return {
      setInputContent: (content: string, fileList?: UploadFile[][]) => {
        setContent(content);
        setAttachedFiles(fileList || [[]]);
      },
      getAttachedFiles: () => attachedFilesRef.current,

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

  const uploadPrefixNodes = useMemo(() => {
    if (onInput.variant === 'aigc' || !onUpload?.length) {
      return [];
    }
    const nodes = onUpload.map((item, index) => {

      let trigger;

      if (item.trigger) {
        trigger = item.trigger;
      } else if ((item.title || item.description) && onUpload.length > 1) {
        trigger = <Button type='text' icon={item.icon} >
          {item.title && <span>{item.title}</span>}
          {item.description && <span style={{ fontSize: '0.8em', opacity: 0.8 }}>{item.description}</span>}
        </Button>
      } else {
        trigger = <IconButton
          icon={item.icon}
          bordered={false}
        />
      }

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
        {
          trigger
        }
      </Upload>
    });

    if (nodes.length === 1) return nodes;
    return <UploadPopover nodes={nodes} />



  }, [onInput.variant, onUpload, attachedFiles]);




  // aigc 模式下的 header
  const aigcSenderHeader = (
    <AIGC.SenderHeader
      onUpload={onUpload}
      attachedFiles={attachedFiles}
      onFileChange={handleFileChange}
    />
  );

  // 默认模式下的 header
  const defaultSenderHeader = (
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

  // 根据 variant 选择 header
  const senderHeader = onInput.variant === 'aigc' ? aigcSenderHeader : defaultSenderHeader;

  const submitFileList = attachedFiles.map(files => files.filter(file => file.status === 'done'));
  const fileLoading = attachedFiles.some(files => files.some(file => file.status === 'uploading'));

  const handlePasteFile = (file: File) => {
    if (!onUpload?.length) return;

    const fileType = file.type || '';
    const fileName = file.name || '';

    // Match file type with accept pattern
    const matchAcceptType = (accept?: string) => {
      if (!accept) return true;

      return accept.split(',').some(type => {
        const trimmed = type.trim();
        if (!trimmed) return false;

        // Extension: .jpg, .png
        if (trimmed.startsWith('.')) {
          return fileName.toLowerCase().endsWith(trimmed.toLowerCase());
        }

        // Wildcard: image/*, */*
        if (trimmed.includes('*')) {
          if (trimmed === '*/*') return true;
          const [acceptMain] = trimmed.split('/');
          const [fileMain] = fileType.split('/');
          return acceptMain === fileMain;
        }

        // Exact: image/jpeg
        return fileType === trimmed;
      });
    };

    // Find matching upload config
    const uploadIndex = onUpload.findIndex(config => matchAcceptType(config.accept));
    if (uploadIndex === -1) {
      return;
    }

    const uploadConfig = onUpload[uploadIndex];
    const currentFiles = attachedFiles[uploadIndex] || [];

    // Check maxCount limit
    if (uploadConfig.maxCount && currentFiles.length >= uploadConfig.maxCount) {
      return;
    }

    // Check multiple support
    if (!uploadConfig.multiple && currentFiles.length > 0) {
      return;
    }

    // Validate before upload
    if (uploadConfig.beforeUpload) {
      const result = uploadConfig.beforeUpload(file as any, [file as any]);
      if (result === false) {
        return;
      }
      // Handle Promise return from beforeUpload
      if (result instanceof Promise) {
        result.then((processedFile) => {
          if (processedFile === false) {
            return;
          }
          // Continue with processed file or original file
          // processedFile could be File, Blob, or true
          const fileToProcess = (processedFile && typeof processedFile === 'object') ? processedFile as File : file;
          continueUpload(fileToProcess);
        }).catch((error) => {
          console.error('beforeUpload promise rejected:', error);
        });
        return;
      }
    }

    continueUpload(file);

    function continueUpload(fileToUpload: File) {
      // Extract extension from filename or MIME type
      const getExtension = () => {
        const nameMatch = fileName.match(/\.([^.]+)$/);
        if (nameMatch) return nameMatch[1].toLowerCase();

        const typeMatch = fileType.match(/\/([^/+]+)/);
        return typeMatch ? typeMatch[1].toLowerCase() : 'bin';
      };

      // Create upload file object
      const timestamp = Date.now();
      const uploadFile: any = {
        uid: `paste_${timestamp}_${Math.random().toString(36).slice(2, 11)}`,
        name: fileName || `pasted-${timestamp}.${getExtension()}`,
        size: fileToUpload.size,
        type: fileType,
        status: 'uploading',
        percent: 0,
        originFileObj: fileToUpload,
      };

      // Update file in list
      const updateFile = (updates: any) => {
        setAttachedFiles(prev => {
          const updated = [...prev];
          updated[uploadIndex] = (updated[uploadIndex] || []).map(f =>
            f.uid === uploadFile.uid ? { ...f, ...updates } as any : f
          );
          return updated;
        });
      };

      // Add file to list first
      setAttachedFiles(prev => {
        const updated = [...prev];
        const currentList = updated[uploadIndex] || [];

        // If not multiple, replace existing files
        if (!uploadConfig.multiple) {
          updated[uploadIndex] = [uploadFile];
        } else {
          // If multiple, check maxCount
          if (uploadConfig.maxCount && currentList.length >= uploadConfig.maxCount) {
            return prev;
          }
          updated[uploadIndex] = [...currentList, uploadFile];
        }
        return updated;
      });

      // Handle image preview (async, don't block upload)
      if (fileType && fileType.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result;
          if (typeof result === 'string') {
            updateFile({ thumbUrl: result, url: result });
          }
        };
        reader.readAsDataURL(fileToUpload);
      }

      // Trigger upload via customRequest
      uploadConfig.customRequest({
        file: fileToUpload as any,
        onSuccess: (response: any) => {
          updateFile({ status: 'done', response, percent: 100 });
        },
        onError: (error: any) => {
          updateFile({ status: 'error', error });
        },
        onProgress: (event: any) => {
          updateFile({ percent: event.percent });
        },
      } as any, {
        defaultRequest: () => { }
      });
    }
  };

  // 检查是否有必需的上传项没有文件
  const requiredFileMissing = useMemo(() => {
    return onUpload?.some((item, index) => {
      if (item.required) {
        const files = attachedFiles[index] || [];
        return files.length === 0;
      }
      return false;
    }) ?? false;
  }, [onUpload, attachedFiles]);

  const sendDisabled = requiredFileMissing;

  return <>
    <Style />
    <div
      className={cls(`${prefixCls}-wrapper`, {
        [`${prefixCls}-wrapper-focus`]: focus && onInput.enableFocusExpand,
        [`${prefixCls}-wrapper-blur`]: !focus && onInput.enableFocusExpand,
      })}
    >
      {
        uiConfig.quickInput && <div className={cls(`${prefixCls}-wrapper-header`)}>{uiConfig.quickInput}</div>
      }

      {
        onInput.beforeUI
      }
      <ChatInput
        placeholder={onInput.placeholder}
        enableFocusExpand={onInput.enableFocusExpand}
        value={content}
        onChange={setContent}
        maxLength={onInput.maxLength}
        disabled={fileLoading || inputContext.disabled}
        sendDisabled={sendDisabled}
        scalable={onInput?.zoomable}
        header={senderHeader}
        prefix={<>
          {uploadPrefixNodes}
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
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onPasteFile={handlePasteFile}
        loading={inputContext.loading}
      />
      {
        onInput.afterUI
      }
    </div></>
})