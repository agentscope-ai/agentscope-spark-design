/**
 * @file React common utilities
 */
import { supportNodeRef } from '@rc-component/util';
import React from 'react';

/**
 * Ensure children can receive a ref.
 * antd v5/v6 Dropdown/Tooltip/Popover/Popconfirm rely on rc-trigger,
 * which injects a ref via cloneElement to obtain the DOM node for popup positioning.
 * If children don't support ref (function component without forwardRef), positioning fails.
 *
 * Strategy:
 * - children supports ref -> return as-is, zero overhead
 * - children doesn't support ref -> wrap with span(inline-block) as fallback,
 *   ensuring rc-trigger can access a real DOM node for getBoundingClientRect positioning,
 *   and emit a dev warning prompting the developer to add forwardRef
 *
 * @param children - The child element to check
 * @param componentName - Caller component name, used in the warning message
 */
export function ensureRefWrapped(
  children: React.ReactNode,
  componentName?: string,
): React.ReactNode {
  if (!React.isValidElement(children)) {
    return children;
  }

  if (supportNodeRef(children)) {
    return children;
  }

  if (process.env.NODE_ENV !== 'production') {
    const childTypeName =
      typeof children.type === 'function'
        ? children.type.displayName || children.type.name || 'Unknown'
        : String(children.type);
    console.warn(
      `[Spark Design${componentName ? `: ${componentName}` : ''}] ` +
        `children "${childTypeName}" does not support ref and has been auto-wrapped with <span> as a fallback. ` +
        `This may cause minor layout differences. Consider adding React.forwardRef to "${childTypeName}" for best results.`,
    );
  }

  return React.createElement(
    'span',
    { style: { display: 'inline-block' } },
    children,
  );
}
