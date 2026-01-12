/**
 * Display Components Tests
 *
 * Tests for TextComponent, ImageComponent, IconComponent, VideoComponent,
 * AudioPlayerComponent, and DividerComponent.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TextComponent } from './TextComponent'
import { ImageComponent } from './ImageComponent'
import { IconComponent } from './IconComponent'
import { VideoComponent } from './VideoComponent'
import { AudioPlayerComponent } from './AudioPlayerComponent'
import { DividerComponent } from './DividerComponent'
import { DataModelProvider } from '../../contexts/DataModelContext'
import type { ReactNode } from 'react'

// Wrapper with DataModelProvider
const wrapper = ({ children }: { children: ReactNode }) => (
  <DataModelProvider>{children}</DataModelProvider>
)

describe('TextComponent', () => {
  it('should render text from literalString', () => {
    render(
      <TextComponent
        surfaceId="surface-1"
        componentId="text-1"
        text={{ literalString: 'Hello World' }}
      />,
      { wrapper }
    )
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('should render empty string when text is undefined', () => {
    const { container } = render(
      <TextComponent surfaceId="surface-1" componentId="text-1" />,
      { wrapper }
    )
    expect(container.querySelector('p')).toBeInTheDocument()
    expect(container.querySelector('p')?.textContent).toBe('')
  })

  it('should render h1 element for h1 usageHint', () => {
    const { container } = render(
      <TextComponent
        surfaceId="surface-1"
        componentId="text-1"
        text={{ literalString: 'Heading' }}
        usageHint="h1"
      />,
      { wrapper }
    )
    expect(container.querySelector('h1')).toBeInTheDocument()
    expect(container.querySelector('h1')?.textContent).toBe('Heading')
  })

  it('should render h2 element for h2 usageHint', () => {
    const { container } = render(
      <TextComponent
        surfaceId="surface-1"
        componentId="text-1"
        text={{ literalString: 'Heading 2' }}
        usageHint="h2"
      />,
      { wrapper }
    )
    expect(container.querySelector('h2')).toBeInTheDocument()
  })

  it('should render h3 element for h3 usageHint', () => {
    const { container } = render(
      <TextComponent
        surfaceId="surface-1"
        componentId="text-1"
        text={{ literalString: 'Heading 3' }}
        usageHint="h3"
      />,
      { wrapper }
    )
    expect(container.querySelector('h3')).toBeInTheDocument()
  })

  it('should render h4 element for h4 usageHint', () => {
    const { container } = render(
      <TextComponent
        surfaceId="surface-1"
        componentId="text-1"
        text={{ literalString: 'Heading 4' }}
        usageHint="h4"
      />,
      { wrapper }
    )
    expect(container.querySelector('h4')).toBeInTheDocument()
  })

  it('should render h5 element for h5 usageHint', () => {
    const { container } = render(
      <TextComponent
        surfaceId="surface-1"
        componentId="text-1"
        text={{ literalString: 'Heading 5' }}
        usageHint="h5"
      />,
      { wrapper }
    )
    expect(container.querySelector('h5')).toBeInTheDocument()
  })

  it('should render span element for caption usageHint', () => {
    const { container } = render(
      <TextComponent
        surfaceId="surface-1"
        componentId="text-1"
        text={{ literalString: 'Caption text' }}
        usageHint="caption"
      />,
      { wrapper }
    )
    expect(container.querySelector('span')).toBeInTheDocument()
  })

  it('should render p element for body usageHint', () => {
    const { container } = render(
      <TextComponent
        surfaceId="surface-1"
        componentId="text-1"
        text={{ literalString: 'Body text' }}
        usageHint="body"
      />,
      { wrapper }
    )
    expect(container.querySelector('p')).toBeInTheDocument()
  })

  it('should apply correct CSS classes for h1', () => {
    const { container } = render(
      <TextComponent
        surfaceId="surface-1"
        componentId="text-1"
        text={{ literalString: 'Heading' }}
        usageHint="h1"
      />,
      { wrapper }
    )
    const h1 = container.querySelector('h1')
    expect(h1).toHaveClass('text-3xl', 'font-bold')
  })

  it('should apply correct CSS classes for caption', () => {
    const { container } = render(
      <TextComponent
        surfaceId="surface-1"
        componentId="text-1"
        text={{ literalString: 'Caption' }}
        usageHint="caption"
      />,
      { wrapper }
    )
    const span = container.querySelector('span')
    expect(span).toHaveClass('text-sm', 'text-muted-foreground')
  })

  it('should have correct displayName', () => {
    expect(TextComponent.displayName).toBe('A2UI.Text')
  })
})

describe('ImageComponent', () => {
  it('should render image with url', () => {
    render(
      <ImageComponent
        surfaceId="surface-1"
        componentId="image-1"
        url={{ literalString: 'https://example.com/image.jpg' }}
      />,
      { wrapper }
    )
    const img = screen.getByRole('presentation')
    expect(img).toHaveAttribute('src', 'https://example.com/image.jpg')
  })

  it('should return null when url is empty', () => {
    const { container } = render(
      <ImageComponent
        surfaceId="surface-1"
        componentId="image-1"
        url={{ literalString: '' }}
      />,
      { wrapper }
    )
    expect(container.firstChild).toBeNull()
  })

  it('should return null when url is undefined', () => {
    const { container } = render(
      <ImageComponent surfaceId="surface-1" componentId="image-1" />,
      { wrapper }
    )
    expect(container.firstChild).toBeNull()
  })

  it('should apply cover fit by default', () => {
    render(
      <ImageComponent
        surfaceId="surface-1"
        componentId="image-1"
        url={{ literalString: 'https://example.com/image.jpg' }}
      />,
      { wrapper }
    )
    const img = screen.getByRole('presentation')
    expect(img).toHaveClass('object-cover')
  })

  it('should apply contain fit', () => {
    render(
      <ImageComponent
        surfaceId="surface-1"
        componentId="image-1"
        url={{ literalString: 'https://example.com/image.jpg' }}
        fit="contain"
      />,
      { wrapper }
    )
    const img = screen.getByRole('presentation')
    expect(img).toHaveClass('object-contain')
  })

  it('should apply fill fit', () => {
    render(
      <ImageComponent
        surfaceId="surface-1"
        componentId="image-1"
        url={{ literalString: 'https://example.com/image.jpg' }}
        fit="fill"
      />,
      { wrapper }
    )
    const img = screen.getByRole('presentation')
    expect(img).toHaveClass('object-fill')
  })

  it('should apply none fit', () => {
    render(
      <ImageComponent
        surfaceId="surface-1"
        componentId="image-1"
        url={{ literalString: 'https://example.com/image.jpg' }}
        fit="none"
      />,
      { wrapper }
    )
    const img = screen.getByRole('presentation')
    expect(img).toHaveClass('object-none')
  })

  it('should apply scale-down fit', () => {
    render(
      <ImageComponent
        surfaceId="surface-1"
        componentId="image-1"
        url={{ literalString: 'https://example.com/image.jpg' }}
        fit="scale-down"
      />,
      { wrapper }
    )
    const img = screen.getByRole('presentation')
    expect(img).toHaveClass('object-scale-down')
  })

  it('should apply icon usageHint styles', () => {
    render(
      <ImageComponent
        surfaceId="surface-1"
        componentId="image-1"
        url={{ literalString: 'https://example.com/image.jpg' }}
        usageHint="icon"
      />,
      { wrapper }
    )
    const img = screen.getByRole('presentation')
    expect(img).toHaveClass('w-6', 'h-6')
  })

  it('should apply avatar usageHint styles', () => {
    render(
      <ImageComponent
        surfaceId="surface-1"
        componentId="image-1"
        url={{ literalString: 'https://example.com/image.jpg' }}
        usageHint="avatar"
      />,
      { wrapper }
    )
    const img = screen.getByRole('presentation')
    expect(img).toHaveClass('w-10', 'h-10', 'rounded-full')
  })

  it('should apply smallFeature usageHint styles', () => {
    render(
      <ImageComponent
        surfaceId="surface-1"
        componentId="image-1"
        url={{ literalString: 'https://example.com/image.jpg' }}
        usageHint="smallFeature"
      />,
      { wrapper }
    )
    const img = screen.getByRole('presentation')
    expect(img).toHaveClass('w-16', 'h-16')
  })

  it('should apply mediumFeature usageHint styles', () => {
    render(
      <ImageComponent
        surfaceId="surface-1"
        componentId="image-1"
        url={{ literalString: 'https://example.com/image.jpg' }}
        usageHint="mediumFeature"
      />,
      { wrapper }
    )
    const img = screen.getByRole('presentation')
    expect(img).toHaveClass('w-32', 'h-32')
  })

  it('should apply largeFeature usageHint styles', () => {
    render(
      <ImageComponent
        surfaceId="surface-1"
        componentId="image-1"
        url={{ literalString: 'https://example.com/image.jpg' }}
        usageHint="largeFeature"
      />,
      { wrapper }
    )
    const img = screen.getByRole('presentation')
    expect(img).toHaveClass('w-48', 'h-48')
  })

  it('should apply header usageHint styles', () => {
    render(
      <ImageComponent
        surfaceId="surface-1"
        componentId="image-1"
        url={{ literalString: 'https://example.com/image.jpg' }}
        usageHint="header"
      />,
      { wrapper }
    )
    const img = screen.getByRole('presentation')
    expect(img).toHaveClass('w-full', 'h-48')
  })

  it('should have lazy loading', () => {
    render(
      <ImageComponent
        surfaceId="surface-1"
        componentId="image-1"
        url={{ literalString: 'https://example.com/image.jpg' }}
      />,
      { wrapper }
    )
    const img = screen.getByRole('presentation')
    expect(img).toHaveAttribute('loading', 'lazy')
  })

  it('should have correct displayName', () => {
    expect(ImageComponent.displayName).toBe('A2UI.Image')
  })
})

describe('IconComponent', () => {
  beforeEach(() => {
    vi.spyOn(console, 'warn').mockImplementation(() => {})
  })

  it('should render known icon', () => {
    const { container } = render(
      <IconComponent
        surfaceId="surface-1"
        componentId="icon-1"
        name={{ literalString: 'check' }}
      />,
      { wrapper }
    )
    // Lucide icons render as SVG
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('should return null for empty icon name', () => {
    const { container } = render(
      <IconComponent
        surfaceId="surface-1"
        componentId="icon-1"
        name={{ literalString: '' }}
      />,
      { wrapper }
    )
    expect(container.firstChild).toBeNull()
  })

  it('should return null for undefined icon name', () => {
    const { container } = render(
      <IconComponent surfaceId="surface-1" componentId="icon-1" />,
      { wrapper }
    )
    expect(container.firstChild).toBeNull()
  })

  it('should return null and warn for unknown icon', () => {
    const consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const { container } = render(
      <IconComponent
        surfaceId="surface-1"
        componentId="icon-1"
        name={{ literalString: 'unknownIcon' }}
      />,
      { wrapper }
    )
    expect(container.firstChild).toBeNull()
    expect(consoleWarn).toHaveBeenCalledWith(
      'A2UI: Unknown icon name: unknownIcon'
    )
    consoleWarn.mockRestore()
  })

  it('should render various icons', () => {
    const icons = [
      'add',
      'close',
      'edit',
      'delete',
      'search',
      'home',
      'settings',
    ]
    icons.forEach((iconName) => {
      const { container, unmount } = render(
        <IconComponent
          surfaceId="surface-1"
          componentId="icon-1"
          name={{ literalString: iconName }}
        />,
        { wrapper }
      )
      expect(container.querySelector('svg')).toBeInTheDocument()
      unmount()
    })
  })

  it('should apply correct size classes', () => {
    const { container } = render(
      <IconComponent
        surfaceId="surface-1"
        componentId="icon-1"
        name={{ literalString: 'check' }}
      />,
      { wrapper }
    )
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('w-5', 'h-5')
  })

  it('should have correct displayName', () => {
    expect(IconComponent.displayName).toBe('A2UI.Icon')
  })
})

describe('VideoComponent', () => {
  it('should render video with url', () => {
    const { container } = render(
      <VideoComponent
        surfaceId="surface-1"
        componentId="video-1"
        url={{ literalString: 'https://example.com/video.mp4' }}
      />,
      { wrapper }
    )
    const video = container.querySelector('video')
    expect(video).toBeInTheDocument()
    expect(video).toHaveAttribute('src', 'https://example.com/video.mp4')
  })

  it('should return null when url is empty', () => {
    const { container } = render(
      <VideoComponent
        surfaceId="surface-1"
        componentId="video-1"
        url={{ literalString: '' }}
      />,
      { wrapper }
    )
    expect(container.firstChild).toBeNull()
  })

  it('should return null when url is undefined', () => {
    const { container } = render(
      <VideoComponent surfaceId="surface-1" componentId="video-1" />,
      { wrapper }
    )
    expect(container.firstChild).toBeNull()
  })

  it('should have controls attribute', () => {
    const { container } = render(
      <VideoComponent
        surfaceId="surface-1"
        componentId="video-1"
        url={{ literalString: 'https://example.com/video.mp4' }}
      />,
      { wrapper }
    )
    const video = container.querySelector('video')
    expect(video).toHaveAttribute('controls')
  })

  it('should have correct CSS classes', () => {
    const { container } = render(
      <VideoComponent
        surfaceId="surface-1"
        componentId="video-1"
        url={{ literalString: 'https://example.com/video.mp4' }}
      />,
      { wrapper }
    )
    const video = container.querySelector('video')
    expect(video).toHaveClass('w-full', 'rounded-lg')
  })

  it('should have correct displayName', () => {
    expect(VideoComponent.displayName).toBe('A2UI.Video')
  })
})

describe('AudioPlayerComponent', () => {
  it('should render audio player with url', () => {
    const { container } = render(
      <AudioPlayerComponent
        surfaceId="surface-1"
        componentId="audio-1"
        url={{ literalString: 'https://example.com/audio.mp3' }}
      />,
      { wrapper }
    )
    const audio = container.querySelector('audio')
    expect(audio).toBeInTheDocument()
    expect(audio).toHaveAttribute('src', 'https://example.com/audio.mp3')
  })

  it('should return null when url is empty', () => {
    const { container } = render(
      <AudioPlayerComponent
        surfaceId="surface-1"
        componentId="audio-1"
        url={{ literalString: '' }}
      />,
      { wrapper }
    )
    expect(container.firstChild).toBeNull()
  })

  it('should return null when url is undefined', () => {
    const { container } = render(
      <AudioPlayerComponent surfaceId="surface-1" componentId="audio-1" />,
      { wrapper }
    )
    expect(container.firstChild).toBeNull()
  })

  it('should render description when provided', () => {
    render(
      <AudioPlayerComponent
        surfaceId="surface-1"
        componentId="audio-1"
        url={{ literalString: 'https://example.com/audio.mp3' }}
        description={{ literalString: 'Audio description' }}
      />,
      { wrapper }
    )
    expect(screen.getByText('Audio description')).toBeInTheDocument()
  })

  it('should not render description when empty', () => {
    const { container } = render(
      <AudioPlayerComponent
        surfaceId="surface-1"
        componentId="audio-1"
        url={{ literalString: 'https://example.com/audio.mp3' }}
        description={{ literalString: '' }}
      />,
      { wrapper }
    )
    expect(container.querySelector('p')).toBeNull()
  })

  it('should have controls attribute', () => {
    const { container } = render(
      <AudioPlayerComponent
        surfaceId="surface-1"
        componentId="audio-1"
        url={{ literalString: 'https://example.com/audio.mp3' }}
      />,
      { wrapper }
    )
    const audio = container.querySelector('audio')
    expect(audio).toHaveAttribute('controls')
  })

  it('should have correct displayName', () => {
    expect(AudioPlayerComponent.displayName).toBe('A2UI.AudioPlayer')
  })
})

describe('DividerComponent', () => {
  it('should render horizontal divider by default', () => {
    const { container } = render(
      <DividerComponent surfaceId="surface-1" componentId="divider-1" />,
      { wrapper }
    )
    // Separator component renders a div with data-orientation
    const separator = container.querySelector('[data-orientation="horizontal"]')
    expect(separator).toBeInTheDocument()
  })

  it('should render horizontal divider when axis is horizontal', () => {
    const { container } = render(
      <DividerComponent
        surfaceId="surface-1"
        componentId="divider-1"
        axis="horizontal"
      />,
      { wrapper }
    )
    const separator = container.querySelector('[data-orientation="horizontal"]')
    expect(separator).toBeInTheDocument()
    expect(separator).toHaveClass('w-full')
  })

  it('should render vertical divider when axis is vertical', () => {
    const { container } = render(
      <DividerComponent
        surfaceId="surface-1"
        componentId="divider-1"
        axis="vertical"
      />,
      { wrapper }
    )
    const separator = container.querySelector('[data-orientation="vertical"]')
    expect(separator).toBeInTheDocument()
    expect(separator).toHaveClass('self-stretch')
  })

  it('should have correct displayName', () => {
    expect(DividerComponent.displayName).toBe('A2UI.Divider')
  })
})
