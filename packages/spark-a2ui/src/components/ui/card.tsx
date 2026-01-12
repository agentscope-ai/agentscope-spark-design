import * as React from 'react'
import { createGlobalStyle } from 'antd-style';
import { ConfigProvider } from 'antd';

export { Card } from '@agentscope-ai/design';

const CardStyle = createGlobalStyle`
.${(p) => p.theme.prefixCls}-card-header {
  display: grid;
  grid-template-rows: auto auto;
  grid-auto-rows: min-content;
  align-items: start;
  gap: 8px;
  padding: 0 24px;

  &:has([data-slot="card-action"]) {
    grid-template-columns: 1fr auto;
  }

  &.border-b {
    padding-bottom: 24px;
  }
}

.${(p) => p.theme.prefixCls}-card-title {
  line-height: 1;
  font-weight: 600;
}

.${(p) => p.theme.prefixCls}-card-description {
  font-size: 14px;
  color: ${(p) => p.theme.colorTextSecondary};
}

.${(p) => p.theme.prefixCls}-card-action {
  grid-column-start: 2;
  grid-row: 1 / span 2;
  align-self: start;
  justify-self: end;
}

.${(p) => p.theme.prefixCls}-card-content {
  padding: 0 24px;
}

.${(p) => p.theme.prefixCls}-card-footer {
  display: flex;
  align-items: center;
  padding: 0 24px;

  &.border-t {
    padding-top: 24px;
  }
}
`;

function useProviderContext() {
  return React.useContext(ConfigProvider.ConfigContext);
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('card-header');
  
  return (
    <>
      <CardStyle />
      <div
        data-slot="card-header"
        className={`${prefixCls} ${className || ''}`}
        {...props}
      />
    </>
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('card-title');
  
  return (
    <div
      data-slot="card-title"
      className={`${prefixCls} ${className || ''}`}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('card-description');
  
  return (
    <div
      data-slot="card-description"
      className={`${prefixCls} ${className || ''}`}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('card-action');
  
  return (
    <div
      data-slot="card-action"
      className={`${prefixCls} ${className || ''}`}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('card-content');
  
  return (
    <div
      data-slot="card-content"
      className={`${prefixCls} ${className || ''}`}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('card-footer');
  
  return (
    <div
      data-slot="card-footer"
      className={`${prefixCls} ${className || ''}`}
      {...props}
    />
  )
}

export {
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
