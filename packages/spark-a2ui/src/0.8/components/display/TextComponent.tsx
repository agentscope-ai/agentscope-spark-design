/**
 * TextComponent - Displays text content with optional Markdown support.
 */

import { memo, type JSX } from 'react'
import type { TextComponentProps } from '@/0.8/types'
import { useDataBinding } from '@/0.8/hooks/useDataBinding'
import { cn } from '@/lib/utils'

/**
 * Maps usageHint to Tailwind CSS classes.
 */
const usageHintStyles: Record<string, string> = {
  h1: 'text-3xl font-bold tracking-tight',
  h2: 'text-2xl font-semibold tracking-tight',
  h3: 'text-xl font-semibold',
  h4: 'text-lg font-semibold',
  h5: 'text-base font-semibold',
  caption: 'text-sm text-muted-foreground',
  body: 'text-base',
}

/**
 * Maps usageHint to HTML element type.
 */
const usageHintElements: Record<string, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  caption: 'span',
  body: 'p',
}

/**
 * Text component for displaying text content.
 * Supports basic Markdown formatting and different text styles via usageHint.
 */
export const TextComponent = memo(function TextComponent({
  surfaceId,
  text,
  usageHint = 'body',
}: TextComponentProps) {
  const textValue = useDataBinding<string>(surfaceId, text, '')

  const className = cn(usageHintStyles[usageHint] || usageHintStyles.body)

  const Element = (usageHintElements[usageHint] as 'p') || 'p'

  // For now, render as plain text
  // TODO: Add Markdown support if needed
  return <Element className={className}>{textValue}</Element>
})

TextComponent.displayName = 'A2UI.Text'
