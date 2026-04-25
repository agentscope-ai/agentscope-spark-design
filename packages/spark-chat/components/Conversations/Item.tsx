import classnames from 'classnames';
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { DirectionType } from 'antd/es/config-provider';
import pickAttrs from 'rc-util/lib/pickAttrs';
import type { Conversation } from './interface';
import { SparkMoreLine } from '@agentscope-ai/icons';
import { Button, Checkbox, IconButton, Popover } from '@agentscope-ai/design';
import { useInViewport } from 'ahooks';

export interface ConversationsItemProps
  extends Omit<React.HTMLAttributes<HTMLLIElement>, 'onClick' | 'onSelect'> {
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
  selectable?: boolean;
  selected?: boolean;
  onSelect?: (key: string, selected: boolean) => void;
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


const ConversationsItem: React.FC<ConversationsItemProps> = React.memo((props) => {
  const [editable, setEditable] = useEditable(props.info.key);
  const [popoverVisible, setPopoverVisible] = useState(false);
  const { prefixCls, info, className, direction, onClick, active, selectable, selected, onSelect, menu, ...restProps } = props;
  const domProps = pickAttrs(restProps, {
    aria: true,
    data: true,
    attr: true,
  });
  const ref = useRef<HTMLLIElement>(null);
  const [inViewport] = useInViewport(ref);

  const { disabled } = info;

  const mergedCls = classnames(
    className,
    `${prefixCls}-item`,
    { [`${prefixCls}-item-active`]: active && !disabled },
    { [`${prefixCls}-item-disabled`]: disabled },
    { [`${prefixCls}-item-timeline`]: info.timeline || selectable },
  );

  const onInternalClick: React.MouseEventHandler<HTMLLIElement> = () => {
    if (selectable) {
      return onSelect?.(info.key, !selected);
    }
    if (!disabled && onClick) {
      return onClick(info);
    }
  };

  return (
    <li ref={ref} {...domProps} className={mergedCls} onClick={onInternalClick} >
      {inViewport && info.icon && <div className={`${prefixCls}-icon`}>{info.icon}</div>}
      {
        inViewport && <div className={`${prefixCls}-content-wrapper`}>
          <div className={`${prefixCls}-content`}>
            {
              (info.timeline || selectable) && <div className={`${prefixCls}-timeline`}>

                {
                  selectable ?
                    <div className={`${prefixCls}-timeline-checkbox`} onClick={e => e.stopPropagation()}><Checkbox checked={selected} onChange={() => onSelect?.(info.key, !selected)} /></div> :
                    <div className={`${prefixCls}-timeline-dot`} />
                }
              </div>
            }
            <Label
              editable={editable}
              setEditable={setEditable}
              prefixCls={prefixCls}
              info={info}
              onEdit={menu?.find(item => item.key === 'edit')?.onEdit}
            />

            {
              menu && !disabled && !selectable && (
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
            info.desc && <div className={`${prefixCls}-desc`} style={info.timeline || selectable ? { marginLeft: 16 } : {}} >{info.desc}</div>

          }
        </div>
      }
    </li>
  );
});

function Label(props) {
  const { editable, prefixCls, info, setEditable, onEdit } = props;
  const [label, setLabel] = useState(info.label);
  const [prevInfoLabel, setPrevInfoLabel] = useState(info.label);

  if (info.label !== prevInfoLabel) {
    setPrevInfoLabel(info.label);
    setLabel(info.label);
  }

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
    onClick={e => e.stopPropagation()}
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
