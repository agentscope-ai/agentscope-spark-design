import React, { useMemo } from "react";
import { createGlobalStyle } from 'antd-style';
import { useProviderContext } from '@agentscope-ai/chat'
import { SparkFalseLine } from "@agentscope-ai/icons";
import { Tooltip } from "@agentscope-ai/design";


interface IItem {
  icon: string | React.ReactNode;
  label: string | React.ReactNode;
  selectedLabel?: string | React.ReactNode;
  tooltip?: string | React.ReactNode;
  value: string;
}
interface IProps {
  options: IItem[],
  value: string,
  desc?: React.ReactNode | string;
  onChange: (value: string) => void
  style?: React.CSSProperties,
  closeTip?: React.ReactNode | string;
}

const Style = createGlobalStyle`
.${p => p.theme.prefixCls}-sender-mode-select {
  position: relative;
  height: 40px;

  &-options {
    position: absolute;
    top: 4px;
    left: 0;
    right: 0;
    display: flex;
    gap: 8px;
    transition: all 0.3s;
  }

  &-option {
    height: 28px;
    display: flex;
    align-items: center;
    fonts: 14px;
    padding: 0 8px;
    border-radius: ${p => p.theme.borderRadius}px;
    gap: 4px;
    border: 1px solid ${p => p.theme.colorBorderSecondary};
    cursor: pointer;
    color: ${p => p.theme.colorTextSecondary};
    transition: all 0.3s;

    &:hover {
      border-color: ${p => p.theme.colorPrimary};
      color: ${p => p.theme.colorPrimary};
    }
  }

  &-display {
    position: absolute;
    top: 8px;
    left: 0;
    right: 0;
    height: 40px;
    border: 1px solid ${p => p.theme.colorBorderSecondary};
    border-radius: ${p => p.theme.borderRadiusLG}px ${p => p.theme.borderRadiusLG}px 0 0;
    background: ${p => p.theme.colorFillTertiary};
    transition: all 0.3s;

    &-flex {
      display: flex;
      justify-content: space-between; 
      align-items: center;
      height: 32px;
      padding: 0 12px;
    }

    &-label {
      width: 0;
      flex: 1;
      display: flex;
      align-items: center;
      gap: 4px;
      fontsize: 14px;
      color: ${p => p.theme.colorTextSecondary};
    }

    &-desc {
      display: flex;
      align-items: center;
      margin: 0 12px 0 auto;
    }
  }

  &-hide {
    top: 45px;
  }
}

`

export default function (props: IProps) {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('sender-mode-select');

  const { value, onChange } = props;

  const valueObject = useMemo(() => {
    const item = props.options.find(item => item.value === value) || {};
    return item;
  }, [props.value]) as IItem;


  const close = <SparkFalseLine onClick={() => onChange(undefined)} style={{ cursor: 'pointer', fontSize: 20 }} />

  return <>
    <Style />
    <div className={prefixCls} style={props.style}>
      <div className={(`${prefixCls}-options ${value ? `${prefixCls}-hide` : ''}`)}>
        {
          props.options.map(item => {
            const node = <Display key={item.value} onClick={() => onChange(item.value)} className={(`${prefixCls}-option`)} {...item} />
            return node;
          })
        }
      </div>

      <div className={(`${prefixCls}-display ${value ? '' : `${prefixCls}-hide`}`)}>
        <div className={(`${prefixCls}-display-flex`)}>
          <Display {...valueObject} label={valueObject?.selectedLabel || valueObject?.label} className={(`${prefixCls}-display-label`)} />
          {
            props.desc && <div className={(`${prefixCls}-display-desc`)}>{props.desc}</div>
          }
          {
            props.closeTip ? <Tooltip title={props.closeTip}>
              {close}
            </Tooltip> :
              close
          }
        </div>
      </div>
    </div>
  </>
}

function Display(props: IItem & { className?: string, onClick?: () => void }) {

  const node = <div className={props.className} onClick={props.onClick}>
    {props.icon}
    {props.label}
  </div>


  if (props.tooltip) {
    return <Tooltip title={props.tooltip} placement="topLeft">
      {node}
    </Tooltip>
  } else {
    return node;
  }
}