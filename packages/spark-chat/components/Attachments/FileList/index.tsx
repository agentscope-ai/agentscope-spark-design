import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, type UploadProps } from 'antd';
import classnames from 'classnames';
import { CSSMotionList } from 'rc-motion';
import React from 'react';
import type { Attachment } from '..';
import FileListCard from './FileListCard';

export interface FileListProps {
  /**
   * @description 自定义CSS类名前缀，用于样式隔离和主题定制
   * @descriptionEn Custom CSS class name prefix for style isolation and theme customization
   */
  prefixCls: string;
  /**
   * @description 文件附件数据数组，包含所有要显示的文件信息
   * @descriptionEn File attachment data array containing all file information to display
   */
  items: Attachment[];
  /**
   * @description 文件移除时的回调函数，用于处理文件删除操作
   * @descriptionEn Callback function when file is removed for handling file deletion operations
   */
  onRemove: (item: Attachment) => void;
  /**
   * @description 文件列表的溢出处理方式，影响滚动和布局行为
   * @descriptionEn Overflow handling method for file list, affects scrolling and layout behavior
   */
  overflow?: 'scrollX' | 'scrollY' | 'wrap';
  /**
   * @description 上传组件的属性配置，用于控制上传行为
   * @descriptionEn Upload component props configuration for controlling upload behavior
   */
  upload: UploadProps;

  // Semantic
  /**
   * @description 文件列表容器的CSS类名
   * @descriptionEn CSS class name for the file list container
   */
  listClassName?: string;
  /**
   * @description 文件列表容器的内联样式对象
   * @descriptionEn Inline style object for the file list container
   */
  listStyle?: React.CSSProperties;
  /**
   * @description 文件列表项的CSS类名
   * @descriptionEn CSS class name for file list items
   */
  itemClassName?: string;
  /**
   * @description 文件列表项的内联样式对象
   * @descriptionEn Inline style object for file list items
   */
  itemStyle?: React.CSSProperties;
  /**
   * @description 渲染类型，目前仅支持默认渲染模式
   * @descriptionEn Render type, currently only supports default render mode
   */
  renderType?: 'default',
}

const TOLERANCE = 1;

export default function FileList(props: FileListProps) {
  const {
    prefixCls,
    items,
    onRemove,
    overflow,
    listClassName,
    listStyle,
    itemClassName,
    itemStyle,
  } = props;

  const listCls = `${prefixCls}-list`;

  const containerRef = React.useRef<HTMLDivElement>(null);

  const [firstMount, setFirstMount] = React.useState(false);

  React.useEffect(() => {
    setFirstMount(true);
    return () => {
      setFirstMount(false);
    };
  }, []);

  // ================================= Scroll =================================
  const [pingStart, setPingStart] = React.useState(false);
  const [pingEnd, setPingEnd] = React.useState(false);

  const checkPing = () => {
    const containerEle = containerRef.current;

    if (!containerEle) {
      return;
    }

    if (overflow === 'scrollX') {
      setPingStart(Math.abs(containerEle.scrollLeft) >= TOLERANCE);
      setPingEnd(
        containerEle.scrollWidth - containerEle.clientWidth - Math.abs(containerEle.scrollLeft) >=
        TOLERANCE,
      );
    } else if (overflow === 'scrollY') {
      setPingStart(containerEle.scrollTop !== 0);
      setPingEnd(containerEle.scrollHeight - containerEle.clientHeight !== containerEle.scrollTop);
    }
  };

  React.useEffect(() => {
    checkPing();
  }, [overflow]);

  const onScrollOffset = (offset: -1 | 1) => {
    const containerEle = containerRef.current;

    if (containerEle) {
      containerEle.scrollTo({
        left: containerEle.scrollLeft + offset * containerEle.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const onScrollLeft = () => {
    onScrollOffset(-1);
  };

  const onScrollRight = () => {
    onScrollOffset(1);
  };

  return (
    <div
      className={classnames(
        listCls,
        {
          [`${listCls}-overflow-${props.overflow}`]: overflow,
          [`${listCls}-overflow-ping-start`]: pingStart,
          [`${listCls}-overflow-ping-end`]: pingEnd,
        },
        listClassName,
      )}
      ref={containerRef}
      onScroll={checkPing}
      style={listStyle}
    >
      <CSSMotionList
        keys={items.map((item) => ({
          key: item.uid,
          item,
        }))}
        motionName={`${listCls}-card-motion`}
        component={false}
        motionAppear={firstMount}
        motionLeave
        motionEnter
      >
        {({ key, item, className: motionCls, style: motionStyle }) => {
          return (
            <FileListCard
              key={key}
              prefixCls={prefixCls}
              item={item}
              onRemove={onRemove}
              className={classnames(motionCls, itemClassName)}
              style={{
                ...motionStyle,
                ...itemStyle,
              }}
              renderType={props.renderType}
            />
          );
        }}
      </CSSMotionList>

      {overflow === 'scrollX' && (
        <>
          <Button
            size="small"
            shape="circle"
            className={`${listCls}-prev-btn`}
            icon={<LeftOutlined />}
            onClick={onScrollLeft}
          />
          <Button
            size="small"
            shape="circle"
            className={`${listCls}-next-btn`}
            icon={<RightOutlined />}
            onClick={onScrollRight}
          />
        </>
      )}
    </div>
  );
}
