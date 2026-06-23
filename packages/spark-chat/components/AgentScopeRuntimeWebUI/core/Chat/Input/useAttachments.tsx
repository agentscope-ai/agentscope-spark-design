import { IAgentScopeRuntimeWebUISenderAttachmentsOptions } from "@agentscope-ai/chat";
import { Upload } from 'antd';
import type { UploadFile } from 'antd';
import { IconButton } from "@agentscope-ai/design";
import { SparkAttachmentLine } from "@agentscope-ai/icons";
import { Sender, Attachments } from '@agentscope-ai/chat';
import React, { useCallback, useRef, useState } from "react";

function isAcceptedFile(file: File, accept?: string) {
  if (!accept) return true;

  const fileType = file.type || '';
  const fileName = file.name || '';

  return accept.split(',').some(pattern => {
    const trimmed = pattern.trim();
    if (!trimmed) return false;
    if (trimmed.startsWith('.')) return fileName.toLowerCase().endsWith(trimmed.toLowerCase());
    if (trimmed === '*/*') return true;
    if (trimmed.includes('*')) {
      const [acceptMain] = trimmed.split('/');
      const [fileMain] = fileType.split('/');
      return acceptMain === fileMain;
    }
    return fileType === trimmed;
  });
}

function getFileExtension(fileName: string, fileType: string) {
  const nameMatch = fileName.match(/\.([^.]+)$/);
  if (nameMatch) return nameMatch[1].toLowerCase();

  const typeMatch = fileType.match(/\/([^/+]+)/);
  return typeMatch ? typeMatch[1].toLowerCase() : 'bin';
}

export default function useAttachments(
  attachments: IAgentScopeRuntimeWebUISenderAttachmentsOptions,
  options?: {
    disabled?: boolean;
  }
) {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const fileListRef = useRef<UploadFile[]>([]);
  fileListRef.current = fileList;

  const setMergedFileList = useCallback((nextFileList: React.SetStateAction<UploadFile[]>) => {
    const resolvedFileList = typeof nextFileList === 'function'
      ? (nextFileList as (prev: UploadFile[]) => UploadFile[])(fileListRef.current)
      : nextFileList;

    fileListRef.current = resolvedFileList;
    setFileList(resolvedFileList);
  }, []);

  const getFileList = useCallback(() => fileListRef.current, []);

  const { trigger, ...rest } = attachments || {};
  const {
    accept,
    beforeUpload,
    customRequest,
    maxCount,
    onChange,
  } = rest;
  const disabled = !!options?.disabled;
  const uidCounter = useRef(0);

  const handleManualFile = useCallback((file: File) => {
    if (disabled || !customRequest || !isAcceptedFile(file, accept)) return;
    if (maxCount && fileListRef.current.length >= maxCount) return;

    const fileType = file.type || '';
    const fileName = file.name || '';

    const startUpload = (fileToUpload: File | Blob) => {
      if (maxCount && fileListRef.current.length >= maxCount) return;

      const uploadType = fileToUpload.type || fileType;
      const timestamp = Date.now();
      const uid = `manual-${timestamp}-${uidCounter.current++}`;
      const uploadFile: UploadFile = {
        uid,
        name: fileName || `file-${timestamp}.${getFileExtension(fileName, uploadType)}`,
        size: fileToUpload.size,
        type: uploadType,
        status: 'uploading',
        percent: 0,
        originFileObj: fileToUpload as any,
      };

      setMergedFileList(prev => [...prev, uploadFile]);

      if (uploadType.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const dataUrl = e.target?.result;
          if (typeof dataUrl === 'string') {
            setMergedFileList(prev => prev.map(f =>
              f.uid === uid ? { ...f, thumbUrl: dataUrl } : f
            ));
          }
        };
        reader.readAsDataURL(fileToUpload);
      }

      customRequest(
        {
          file: fileToUpload as any,
          filename: 'file',
          action: '',
          method: 'POST',
          onSuccess: (response: any) => {
            setMergedFileList(prev => prev.map(f =>
              f.uid === uid ? { ...f, status: 'done' as const, response, percent: 100 } : f
            ));
          },
          onError: (error: any) => {
            setMergedFileList(prev => prev.map(f =>
              f.uid === uid ? { ...f, status: 'error' as const, error } : f
            ));
          },
          onProgress: (event: any) => {
            setMergedFileList(prev => prev.map(f =>
              f.uid === uid ? { ...f, percent: event?.percent } : f
            ));
          },
        },
        { defaultRequest: () => undefined },
      );
    };

    try {
      const beforeUploadResult = beforeUpload?.(file as any, [file as any]);

      if (beforeUploadResult === false || beforeUploadResult === Upload.LIST_IGNORE) {
        return;
      }

      if (beforeUploadResult && typeof (beforeUploadResult as Promise<unknown>).then === 'function') {
        (beforeUploadResult as Promise<File | Blob | boolean | string>).then((processedFile) => {
          if (processedFile === false || processedFile === Upload.LIST_IGNORE) {
            return;
          }

          if (processedFile && typeof processedFile === 'object') {
            startUpload(processedFile as File | Blob);
            return;
          }

          startUpload(file);
        }).catch((error) => {
          console.error('beforeUpload promise rejected:', error);
        });
        return;
      }

      if (beforeUploadResult && typeof beforeUploadResult === 'object') {
        startUpload(beforeUploadResult as unknown as File | Blob);
        return;
      }

      startUpload(file);
    } catch (error) {
      console.error('beforeUpload rejected:', error);
    }
  }, [accept, beforeUpload, customRequest, disabled, maxCount, setMergedFileList]);

  if (customRequest) {
    const uploadIconButton = <Upload
      fileList={fileList}
      showUploadList={false}
      {...rest}
      onChange={(info) => {
        setMergedFileList(info.fileList);
        onChange?.(info);
      }}
      disabled={disabled}
    >
      {
        trigger ? React.createElement(trigger, { disabled }) : <IconButton
          disabled={disabled}
          icon={<SparkAttachmentLine />}
          bordered={false}
        />
      }
    </Upload>


    const uploadFileListHeader = <Sender.Header
      closable={false}
      open={fileList?.length > 0}
    >
      <Attachments
        items={fileList}
        onChange={(info) => setMergedFileList(info.fileList)}
      />
    </Sender.Header>


    return {
      fileList,
      getFileList,
      setFileList: setMergedFileList,
      handlePasteFile: handleManualFile,
      handleDropFile: handleManualFile,
      uploadIconButton,
      uploadFileListHeader
    }

  } else {
    return {
      enabled: false,
      fileList,
      getFileList,
      setFileList: setMergedFileList,
      handlePasteFile: undefined,
      handleDropFile: undefined,
    };
  }
}
