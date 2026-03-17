import React from 'react';

/**
 * antd v5/v6 的 Overlay 类组件（Dropdown、Tooltip、Popover 等）
 * 要求 children 能接收 ref 以注入弹出触发事件。
 * 当 children 是不支持 ref 的函数组件时，用 span 包裹一层确保 ref 可被正常注入。
 */
export function wrapWithSpan(children: React.ReactNode): React.ReactNode {
  if (!React.isValidElement(children)) {
    return children;
  }

  const childType = children.type;

  if (typeof childType === 'string') {
    return children;
  }

  if (
    typeof childType === 'function' &&
    !childType.prototype?.isReactComponent &&
    !(childType as any).$$typeof
  ) {
    return React.createElement('span', { style: { display: 'contents' } }, children);
  }

  if (typeof childType === 'object' && (childType as any).$$typeof) {
    return children;
  }

  return children;
}
