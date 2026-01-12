/**
 * ComponentRenderer Tests
 *
 * Tests for the ComponentRenderer component that routes rendering based on type.
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ComponentRenderer, registerComponent } from './ComponentRenderer'
import { SurfaceProvider, useSurfaceContext } from '../contexts/SurfaceContext'
import { DataModelProvider } from '../contexts/DataModelContext'
import { ActionProvider } from '../contexts/ActionContext'
import type { ReactNode } from 'react'
import type { BaseComponentProps, ComponentDefinition } from '../types'
import React from 'react'

// Wrapper with all providers
const wrapper = ({ children }: { children: ReactNode }) => (
  <SurfaceProvider>
    <DataModelProvider>
      <ActionProvider>{children}</ActionProvider>
    </DataModelProvider>
  </SurfaceProvider>
)

// Helper component to set up surface with components
function SurfaceSetup({
  children,
  components,
}: {
  children: ReactNode
  components: ComponentDefinition[]
}) {
  const { initSurface, updateSurface } = useSurfaceContext()
  React.useEffect(() => {
    initSurface('test-surface', 'root')
    updateSurface('test-surface', components)
  }, [initSurface, updateSurface, components])
  return <>{children}</>
}

// Custom wrapper that sets up surface
const createSurfaceWrapper = (components: ComponentDefinition[]) => {
  return ({ children }: { children: ReactNode }) => (
    <SurfaceProvider>
      <DataModelProvider>
        <ActionProvider>
          <SurfaceSetup components={components}>{children}</SurfaceSetup>
        </ActionProvider>
      </DataModelProvider>
    </SurfaceProvider>
  )
}

describe('ComponentRenderer', () => {
  let consoleWarn: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {})
  })

  afterEach(() => {
    consoleWarn.mockRestore()
  })

  describe('component not found', () => {
    it('should return null and warn when component not found', () => {
      render(
        <ComponentRenderer
          surfaceId="test-surface"
          componentId="nonexistent"
        />,
        { wrapper }
      )

      expect(consoleWarn).toHaveBeenCalledWith(
        'A2UI: Component not found: nonexistent on surface test-surface'
      )
    })
  })

  describe('component with no type definition', () => {
    it('should return null and warn when component has no type', () => {
      const components: ComponentDefinition[] = [
        { id: 'empty-comp', component: {} },
      ]
      const surfaceWrapper = createSurfaceWrapper(components)

      render(
        <ComponentRenderer surfaceId="test-surface" componentId="empty-comp" />,
        { wrapper: surfaceWrapper }
      )

      expect(consoleWarn).toHaveBeenCalledWith(
        'A2UI: Component empty-comp has no type definition'
      )
    })
  })

  describe('unknown component type', () => {
    it('should return null and warn for unknown component type', () => {
      const components: ComponentDefinition[] = [
        { id: 'unknown-comp', component: { UnknownType: {} } },
      ]
      const surfaceWrapper = createSurfaceWrapper(components)

      render(
        <ComponentRenderer
          surfaceId="test-surface"
          componentId="unknown-comp"
        />,
        { wrapper: surfaceWrapper }
      )

      expect(consoleWarn).toHaveBeenCalledWith(
        'A2UI: Unknown component type: UnknownType'
      )
    })
  })

  describe('rendering display components', () => {
    it('should render Text component', () => {
      const components: ComponentDefinition[] = [
        {
          id: 'text-1',
          component: { Text: { text: { literalString: 'Hello World' } } },
        },
      ]
      const surfaceWrapper = createSurfaceWrapper(components)

      render(
        <ComponentRenderer surfaceId="test-surface" componentId="text-1" />,
        { wrapper: surfaceWrapper }
      )

      expect(screen.getByText('Hello World')).toBeInTheDocument()
    })

    it('should render Image component', () => {
      const components: ComponentDefinition[] = [
        {
          id: 'image-1',
          component: {
            Image: { url: { literalString: 'https://example.com/image.jpg' } },
          },
        },
      ]
      const surfaceWrapper = createSurfaceWrapper(components)

      render(
        <ComponentRenderer surfaceId="test-surface" componentId="image-1" />,
        { wrapper: surfaceWrapper }
      )

      const img = screen.getByRole('presentation')
      expect(img).toHaveAttribute('src', 'https://example.com/image.jpg')
    })

    it('should render Divider component', () => {
      const components: ComponentDefinition[] = [
        { id: 'divider-1', component: { Divider: { axis: 'horizontal' } } },
      ]
      const surfaceWrapper = createSurfaceWrapper(components)

      const { container } = render(
        <ComponentRenderer surfaceId="test-surface" componentId="divider-1" />,
        { wrapper: surfaceWrapper }
      )

      expect(
        container.querySelector('[data-orientation="horizontal"]')
      ).toBeInTheDocument()
    })
  })

  describe('rendering layout components', () => {
    it('should render Row component', () => {
      const components: ComponentDefinition[] = [
        { id: 'row-1', component: { Row: { distribution: 'center' } } },
      ]
      const surfaceWrapper = createSurfaceWrapper(components)

      const { container } = render(
        <ComponentRenderer surfaceId="test-surface" componentId="row-1" />,
        { wrapper: surfaceWrapper }
      )

      expect(container.querySelector('.flex-row')).toBeInTheDocument()
    })

    it('should render Column component', () => {
      const components: ComponentDefinition[] = [
        { id: 'column-1', component: { Column: { alignment: 'center' } } },
      ]
      const surfaceWrapper = createSurfaceWrapper(components)

      const { container } = render(
        <ComponentRenderer surfaceId="test-surface" componentId="column-1" />,
        { wrapper: surfaceWrapper }
      )

      expect(container.querySelector('.flex-col')).toBeInTheDocument()
    })

    it('should render Card component', () => {
      const components: ComponentDefinition[] = [
        { id: 'card-1', component: { Card: {} } },
      ]
      const surfaceWrapper = createSurfaceWrapper(components)

      const { container } = render(
        <ComponentRenderer surfaceId="test-surface" componentId="card-1" />,
        { wrapper: surfaceWrapper }
      )

      expect(container.firstChild).toBeInTheDocument()
    })
  })

  describe('rendering interactive components', () => {
    it('should render Button component', () => {
      const components: ComponentDefinition[] = [
        { id: 'button-1', component: { Button: { primary: true } } },
      ]
      const surfaceWrapper = createSurfaceWrapper(components)

      render(
        <ComponentRenderer surfaceId="test-surface" componentId="button-1" />,
        { wrapper: surfaceWrapper }
      )

      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('should render CheckBox component', () => {
      const components: ComponentDefinition[] = [
        {
          id: 'checkbox-1',
          component: { CheckBox: { label: { literalString: 'Accept' } } },
        },
      ]
      const surfaceWrapper = createSurfaceWrapper(components)

      render(
        <ComponentRenderer surfaceId="test-surface" componentId="checkbox-1" />,
        { wrapper: surfaceWrapper }
      )

      expect(screen.getByRole('checkbox')).toBeInTheDocument()
      expect(screen.getByText('Accept')).toBeInTheDocument()
    })

    it('should render TextField component', () => {
      const components: ComponentDefinition[] = [
        {
          id: 'field-1',
          component: { TextField: { label: { literalString: 'Name' } } },
        },
      ]
      const surfaceWrapper = createSurfaceWrapper(components)

      render(
        <ComponentRenderer surfaceId="test-surface" componentId="field-1" />,
        { wrapper: surfaceWrapper }
      )

      expect(screen.getByRole('textbox')).toBeInTheDocument()
      expect(screen.getByText('Name')).toBeInTheDocument()
    })

    it('should render Slider component', () => {
      const components: ComponentDefinition[] = [
        {
          id: 'slider-1',
          component: { Slider: { minValue: 0, maxValue: 100 } },
        },
      ]
      const surfaceWrapper = createSurfaceWrapper(components)

      render(
        <ComponentRenderer surfaceId="test-surface" componentId="slider-1" />,
        { wrapper: surfaceWrapper }
      )

      expect(screen.getByRole('slider')).toBeInTheDocument()
    })
  })

  describe('passing props', () => {
    it('should pass weight prop to component', () => {
      const components: ComponentDefinition[] = [
        {
          id: 'text-1',
          weight: 2,
          component: { Text: { text: { literalString: 'Weighted' } } },
        },
      ]
      const surfaceWrapper = createSurfaceWrapper(components)

      render(
        <ComponentRenderer surfaceId="test-surface" componentId="text-1" />,
        { wrapper: surfaceWrapper }
      )

      // Component should render (weight is passed but may not affect visual)
      expect(screen.getByText('Weighted')).toBeInTheDocument()
    })

    it('should pass all component props', () => {
      const components: ComponentDefinition[] = [
        {
          id: 'text-1',
          component: {
            Text: {
              text: { literalString: 'Heading' },
              usageHint: 'h1',
            },
          },
        },
      ]
      const surfaceWrapper = createSurfaceWrapper(components)

      const { container } = render(
        <ComponentRenderer surfaceId="test-surface" componentId="text-1" />,
        { wrapper: surfaceWrapper }
      )

      expect(container.querySelector('h1')).toBeInTheDocument()
      expect(container.querySelector('h1')).toHaveTextContent('Heading')
    })
  })

  describe('registerComponent', () => {
    it('should register and render custom component', () => {
      // Register a custom component
      const CustomComponent = ({
        surfaceId,
        componentId,
        customProp,
      }: BaseComponentProps & { customProp?: string }) => (
        <div data-testid="custom-component">
          Custom: {customProp} ({surfaceId}/{componentId})
        </div>
      )

      registerComponent('CustomWidget', CustomComponent)

      const components: ComponentDefinition[] = [
        {
          id: 'custom-1',
          component: { CustomWidget: { customProp: 'test-value' } },
        },
      ]
      const surfaceWrapper = createSurfaceWrapper(components)

      render(
        <ComponentRenderer surfaceId="test-surface" componentId="custom-1" />,
        { wrapper: surfaceWrapper }
      )

      expect(screen.getByTestId('custom-component')).toBeInTheDocument()
      expect(screen.getByTestId('custom-component')).toHaveTextContent(
        'Custom: test-value'
      )
    })
  })

  describe('displayName', () => {
    it('should have correct displayName', () => {
      expect(ComponentRenderer.displayName).toBe('A2UI.ComponentRenderer')
    })
  })
})
