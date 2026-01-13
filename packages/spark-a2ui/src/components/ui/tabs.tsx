import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { createGlobalStyle } from 'antd-style'

/**
 * 选中态和交互状态的样式
 */
const TabsGlobalStyle = createGlobalStyle`
  [aria-selected="true"] {
    background-color: #fff !important;
    color: #3d2c29 !important;
  }
`

const tabsStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
}

const tabsListStyle: React.CSSProperties = {
  display: 'inline-flex',
  height: 36,
  width: 'fit-content',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  padding: 3,
  backgroundColor: '#f4f4f5',
  color: '#6b7280',
}

const tabsTriggerStyle: React.CSSProperties = {
  display: 'inline-flex',
  height: 'calc(100% - 1px)',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  gap: 6,
  borderRadius: 6,
  border: '1px solid transparent',
  paddingLeft: 8,
  paddingRight: 8,
  paddingTop: 4,
  paddingBottom: 4,
  fontSize: 14,
  fontWeight: 500,
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  color: 'inherit',
  transition: 'color 0.2s, box-shadow 0.2s, background-color 0.2s',
}

const tabsContentStyle: React.CSSProperties = {
  flex: 1,
  outline: 'none',
}

function Tabs({
  style,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <>
      <TabsGlobalStyle />
      <TabsPrimitive.Root
        data-slot="tabs"
        style={{ ...tabsStyle, ...style }}
        {...props}
      />
    </>
  )
}

function TabsList({
  style,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      style={{ ...tabsListStyle, ...style }}
      {...props}
    />
  )
}

function TabsTrigger({
  style,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      style={{ ...tabsTriggerStyle, ...style }}
      {...props}
    />
  )
}

function TabsContent({
  style,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      style={{ ...tabsContentStyle, ...style }}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
