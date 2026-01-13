/**
 * TextComponent - Displays text content with optional Markdown support.
 */

import React, { memo, type JSX, type CSSProperties } from 'react'
import type { TextComponentProps } from '@/0.8/types'
import { useDataBinding } from '@/0.8/hooks/useDataBinding'

/**
 * Maps usageHint to inline styles.
 */
const usageHintStyles: Record<string, CSSProperties> = {
  h1: { fontSize: 30, fontWeight: 700, letterSpacing: -0.4 },
  h2: { fontSize: 24, fontWeight: 600, letterSpacing: -0.4 },
  h3: { fontSize: 20, fontWeight: 600 },
  h4: { fontSize: 18, fontWeight: 600 },
  h5: { fontSize: 16, fontWeight: 600 },
  caption: { fontSize: 14, color: 'rgba(0, 0, 0, 0.45)' },
  body: { fontSize: 16 },
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

  const style = usageHintStyles[usageHint] || usageHintStyles.body

  const Element = (usageHintElements[usageHint] as 'p') || 'p'

  // For now, render as plain text
  // TODO: Add Markdown support if needed
  return <Element style={style}>{textValue}</Element>
})

TextComponent.displayName = 'A2UI.Text'
