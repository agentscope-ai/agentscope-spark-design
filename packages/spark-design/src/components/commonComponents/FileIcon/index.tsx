import { getCommonConfig } from '@agentscope-ai/design/config';
import React from 'react';
import common from './icons/common.svg';
import epub from './icons/epub.svg';
import excel from './icons/excel.svg';
import html from './icons/html.svg';
import image from './icons/image.svg';
import md from './icons/md.svg';
import mobi from './icons/mobi.svg';
import pdf from './icons/pdf.svg';
import ppt from './icons/ppt.svg';
import txt from './icons/txt.svg';
import web from './icons/web.svg';
import word from './icons/word.svg';
import video from './icons/video.svg';
import audio from './icons/audio.svg';
import folder from './icons/folder.svg';
import folderGray from './icons/folder-gray.svg';
import { useStyle } from './index.style';

const maps = {
  common,
  epub,
  excel,
  html,
  image,
  md,
  mobi,
  pdf,
  ppt,
  txt,
  web,
  word,
  video,
  audio,
  folder,
  folderGray,
};

export interface SparkFileIconProps {
  src?: string;
  image?: string;
  type: string;
  size?: number;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
}

export interface SparkFileCardProps {
  iconSize?: number;
  iconWidth?: number;
  iconHeight?: number;
  src?: string;
  type: string;
  name: string;
  desc?: string;
  size?: number;
  width?: React.CSSProperties['width'];
  children?: React.ReactNode;
}

function getSize(size: number) {
  let retSize = size;
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'];
  let unitIndex = 0;

  while (retSize >= 1024 && unitIndex < units.length - 1) {
    retSize /= 1024;
    unitIndex++;
  }

  return `${retSize.toFixed(0)} ${units[unitIndex]}`;
}

export function FileCard(props: SparkFileCardProps) {
  const commonConfig = getCommonConfig();
  const { sparkPrefix } = commonConfig;
  const Style = useStyle();

  const { width = 140, iconSize = 32, iconWidth = iconSize, iconHeight = iconSize } = props;

  return (
    <>
      <Style />
      <div className={`${sparkPrefix}-file-card`} style={{ width }}>
        <FileIcon type={props.type} size={iconSize} src={props.src} width={iconWidth || iconSize} height={iconHeight || iconSize} />
        <div className={`${sparkPrefix}-file-card-info`}>
          <div className={`${sparkPrefix}-file-card-name`}>{props.name}</div>
          {(props.size || props.desc) && (
            <div className={`${sparkPrefix}-file-card-size`}>
              {props.desc || getSize(props.size)}
            </div>
          )}
        </div>
        <div style={{ flex: 1 }} />
        {props.children}
      </div>
    </>
  );
}

export default function FileIcon(props: SparkFileIconProps) {
  const { size = 40, type = 'common', src, style = {}, width = 40, height = 40 } = props;
  return (
    <img
      style={{ display: 'block', width: width || size, height: height || size, ...style }}
      src={src || maps[type] || 'common'}
    ></img>
  );
}
