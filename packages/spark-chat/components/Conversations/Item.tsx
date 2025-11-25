import classnames from 'classnames';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { DirectionType } from 'antd/es/config-provider';
import pickAttrs from 'rc-util/lib/pickAttrs';
import type { Conversation } from './interface';
import { SparkMoreLine } from '@agentscope-ai/icons';
import { Button, IconButton, Popover } from '@agentscope-ai/design';

export interface ConversationsItemProps
  extends Omit<React.HTMLAttributes<HTMLLIElement>, 'onClick'> {
  info: Conversation;
  prefixCls?: string;
  direction?: DirectionType;
  menu?: {
    label?: string;
    key?: string;
    icon?: React.ReactNode;
    danger?: boolean;
    onClick?: (info: Conversation) => void;
    onEdit?: (label: string, session: Conversation) => Promise<void>;
    disabled?: boolean;
  }[];
  active?: boolean;
  onClick?: (info: Conversation) => void;
}

const editableMap = {};
export function useEditable(id) {
  const [editable, setEditable] = useState(editableMap[id]);

  return [editable, (value) => {
    for (const key in editableMap) {
      editableMap[key] = false;
    }

    editableMap[id] = value;
    setEditable(value);
  }]
}


const ConversationsItem: React.FC<ConversationsItemProps> = (props) => {
  const [editable, setEditable] = useEditable(props.info.key);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const { prefixCls, info, className, direction, onClick, active, menu, ...restProps } = props;
  const domProps = pickAttrs(restProps, {
    aria: true,
    data: true,
    attr: true,
  });

  const { disabled } = info;

  const mergedCls = classnames(
    className,
    `${prefixCls}-item`,
    { [`${prefixCls}-item-active`]: active && !disabled },
    { [`${prefixCls}-item-disabled`]: disabled },
    { [`${prefixCls}-item-timeline`]: info.timeline },
  );

  const onInternalClick: React.MouseEventHandler<HTMLLIElement> = () => {
    if (!disabled && onClick) {
      onClick(info);
    }
  };

  return (
    <li {...domProps} className={mergedCls} onClick={onInternalClick}>
      <div className={`${prefixCls}-content`}>
        {info.icon && <div className={`${prefixCls}-icon`}>{info.icon}</div>}
        {
          info.timeline && <div className={`${prefixCls}-timeline`} />
        }
        <Label
          editable={editable}
          setEditable={setEditable}
          prefixCls={prefixCls}
          info={info}
          onEdit={menu?.find(item => item.key === 'edit')?.onEdit}
        />

        {
          menu && !disabled && (
            <Popover
              styles={{ body: { padding: 4 } }}
              trigger={['click']}
              open={popoverVisible}
              onOpenChange={setPopoverVisible}
              content={<div className={`${prefixCls}-menu-popover`}
              >
                {menu.map(item => {
                  const { key, ...rest } = item;
                  const _props = {
                    ...rest,
                    onClick: function (e) {
                      if (key === 'edit') {
                        setEditable(true)
                      } else {
                        rest.onClick?.(info)
                      }
                      setPopoverVisible(false);
                    },
                  }

                  return <MenuItem key={key} {..._props} info={info} />
                })}
              </div>} placement='bottom'>
              <IconButton
                bordered={false}
                icon={<SparkMoreLine />}
                disabled={disabled}
                className={`${prefixCls}-menu-icon`}
                onClick={e => e.stopPropagation()}
              />
            </Popover>
          )
        }
      </div>
      {
        info.desc && <div className={`${prefixCls}-desc`} style={info.timeline ? { marginLeft: 16 } : {}} >{info.desc}</div>
      }
    </li>
  );
};

function Label(props) {
  const { editable, prefixCls, info, setEditable, onEdit } = props;
  const [label, setLabel] = useState(info.label);
  useEffect(() => {
    setLabel(info.label);
  }, [info.label]);

  return editable ? <Input
    prefixCls={prefixCls}
    value={label}
    onBlur={(v) => {
      if (v === label) return setEditable(false);
      onEdit(v, info)?.then(() => {
        setLabel(v);
      }).catch(() => {
        setLabel(label);
      }).finally(() => {
        setEditable(false);
      });
    }}
    setEditable={setEditable}
  /> :
    <div className={`${prefixCls}-label`}>{label}</div>
}


function Input({ prefixCls, value, onBlur, setEditable }) {
  const [v, sv] = useState(value);
  const ref = useRef<HTMLInputElement>();
  useEffect(() => {

    ref.current.focus();
  }, []);

  useEffect(() => {
    sv(value);
  }, [value])

  return <input
    ref={ref}
    className={`${prefixCls}-label-edit`}
    value={v}
    onChange={e => sv(e.target.value)}
    onBlur={() => onBlur(v)}
  />;
}

function MenuItem(props) {
  const { label, icon, danger, info, disabled } = props;

  const onClick = (e) => {
    if (disabled) return;
    e.stopPropagation();
    props.onClick?.(info);
  };

  if (icon && label) return <Button disabled={disabled} icon={icon} danger={danger} type='text' onClick={onClick}>{label}</Button>;
  if (icon) return <IconButton disabled={disabled} icon={icon} danger={danger} bordered={false} onClick={onClick} />;
  if (label) return <Button disabled={disabled} danger={danger} type='text' onClick={onClick}>{label}</Button>;
  return null;
}

export default ConversationsItem;
