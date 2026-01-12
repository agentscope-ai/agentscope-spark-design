/**
 * Layout Components Tests
 *
 * Tests for RowComponent, ColumnComponent, ListComponent, CardComponent,
 * TabsComponent, and ModalComponent.
 */

import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RowComponent } from './RowComponent'
import { ColumnComponent } from './ColumnComponent'
import { ListComponent } from './ListComponent'
import { CardComponent } from './CardComponent'
import { TabsComponent } from './TabsComponent'
import { ModalComponent } from './ModalComponent'
import {
  DataModelProvider,
  useDataModelContext,
} from '../../contexts/DataModelContext'
import { SurfaceProvider } from '../../contexts/SurfaceContext'
import type { ReactNode } from 'react'
import React from 'react'

// Mock ComponentRenderer
vi.mock('../ComponentRenderer', () => ({
  ComponentRenderer: vi.fn(({ surfaceId, componentId }) => (
    <div data-testid={`component-${componentId}`}>
      Component: {componentId} (Surface: {surfaceId})
    </div>
  )),
}))

// Wrapper with providers
const wrapper = ({ children }: { children: ReactNode }) => (
  <SurfaceProvider>
    <DataModelProvider>{children}</DataModelProvider>
  </SurfaceProvider>
)

describe('RowComponent', () => {
  it('should render empty div when no children', () => {
    const { container } = render(
      <RowComponent surfaceId="surface-1" componentId="row-1" />,
      { wrapper }
    )
    const div = container.firstChild as HTMLElement
    expect(div).toBeInTheDocument()
    expect(div.tagName).toBe('DIV')
  })

  it('should render with default distribution and alignment', () => {
    const { container } = render(
      <RowComponent surfaceId="surface-1" componentId="row-1" />,
      { wrapper }
    )
    const div = container.firstChild as HTMLElement
    expect(div).toHaveClass(
      'flex',
      'flex-row',
      'justify-start',
      'items-stretch'
    )
  })

  it('should apply center distribution', () => {
    const { container } = render(
      <RowComponent
        surfaceId="surface-1"
        componentId="row-1"
        distribution="center"
      />,
      { wrapper }
    )
    const div = container.firstChild as HTMLElement
    expect(div).toHaveClass('justify-center')
  })

  it('should apply end distribution', () => {
    const { container } = render(
      <RowComponent
        surfaceId="surface-1"
        componentId="row-1"
        distribution="end"
      />,
      { wrapper }
    )
    const div = container.firstChild as HTMLElement
    expect(div).toHaveClass('justify-end')
  })

  it('should apply spaceBetween distribution', () => {
    const { container } = render(
      <RowComponent
        surfaceId="surface-1"
        componentId="row-1"
        distribution="spaceBetween"
      />,
      { wrapper }
    )
    const div = container.firstChild as HTMLElement
    expect(div).toHaveClass('justify-between')
  })

  it('should apply spaceAround distribution', () => {
    const { container } = render(
      <RowComponent
        surfaceId="surface-1"
        componentId="row-1"
        distribution="spaceAround"
      />,
      { wrapper }
    )
    const div = container.firstChild as HTMLElement
    expect(div).toHaveClass('justify-around')
  })

  it('should apply spaceEvenly distribution', () => {
    const { container } = render(
      <RowComponent
        surfaceId="surface-1"
        componentId="row-1"
        distribution="spaceEvenly"
      />,
      { wrapper }
    )
    const div = container.firstChild as HTMLElement
    expect(div).toHaveClass('justify-evenly')
  })

  it('should apply center alignment', () => {
    const { container } = render(
      <RowComponent
        surfaceId="surface-1"
        componentId="row-1"
        alignment="center"
      />,
      { wrapper }
    )
    const div = container.firstChild as HTMLElement
    expect(div).toHaveClass('items-center')
  })

  it('should apply start alignment', () => {
    const { container } = render(
      <RowComponent
        surfaceId="surface-1"
        componentId="row-1"
        alignment="start"
      />,
      { wrapper }
    )
    const div = container.firstChild as HTMLElement
    expect(div).toHaveClass('items-start')
  })

  it('should apply end alignment', () => {
    const { container } = render(
      <RowComponent
        surfaceId="surface-1"
        componentId="row-1"
        alignment="end"
      />,
      { wrapper }
    )
    const div = container.firstChild as HTMLElement
    expect(div).toHaveClass('items-end')
  })

  it('should render explicit list children', async () => {
    render(
      <RowComponent
        surfaceId="surface-1"
        componentId="row-1"
        children={{ explicitList: ['child-1', 'child-2', 'child-3'] }}
      />,
      { wrapper }
    )

    await waitFor(() => {
      expect(screen.getByTestId('component-child-1')).toBeInTheDocument()
      expect(screen.getByTestId('component-child-2')).toBeInTheDocument()
      expect(screen.getByTestId('component-child-3')).toBeInTheDocument()
    })
  })

  it('should render template children from data model', async () => {
    // Custom wrapper that sets up data model
    const TestWrapper = ({ children }: { children: ReactNode }) => (
      <SurfaceProvider>
        <DataModelProvider>
          <DataModelSetup>{children}</DataModelSetup>
        </DataModelProvider>
      </SurfaceProvider>
    )

    function DataModelSetup({ children }: { children: ReactNode }) {
      const { setDataValue } = useDataModelContext()
      React.useEffect(() => {
        setDataValue('surface-1', '/items', { item1: {}, item2: {} })
      }, [setDataValue])
      return <>{children}</>
    }

    render(
      <RowComponent
        surfaceId="surface-1"
        componentId="row-1"
        children={{
          template: { componentId: 'item-template', dataBinding: '/items' },
        }}
      />,
      { wrapper: TestWrapper }
    )

    await waitFor(() => {
      // Should render template component for each item
      const components = screen.getAllByTestId('component-item-template')
      expect(components.length).toBe(2)
    })
  })

  it('should render empty div when template data is not found', () => {
    const { container } = render(
      <RowComponent
        surfaceId="surface-1"
        componentId="row-1"
        children={{
          template: {
            componentId: 'item-template',
            dataBinding: '/nonexistent',
          },
        }}
      />,
      { wrapper }
    )
    const div = container.firstChild as HTMLElement
    expect(div.children.length).toBe(0)
  })

  it('should have correct displayName', () => {
    expect(RowComponent.displayName).toBe('A2UI.Row')
  })
})

describe('ColumnComponent', () => {
  it('should render empty div when no children', () => {
    const { container } = render(
      <ColumnComponent surfaceId="surface-1" componentId="column-1" />,
      { wrapper }
    )
    const div = container.firstChild as HTMLElement
    expect(div).toBeInTheDocument()
    expect(div.tagName).toBe('DIV')
  })

  it('should render with flex-col direction', () => {
    const { container } = render(
      <ColumnComponent surfaceId="surface-1" componentId="column-1" />,
      { wrapper }
    )
    const div = container.firstChild as HTMLElement
    expect(div).toHaveClass('flex', 'flex-col')
  })

  it('should apply distribution styles', () => {
    const { container } = render(
      <ColumnComponent
        surfaceId="surface-1"
        componentId="column-1"
        distribution="center"
      />,
      { wrapper }
    )
    const div = container.firstChild as HTMLElement
    expect(div).toHaveClass('justify-center')
  })

  it('should apply alignment styles', () => {
    const { container } = render(
      <ColumnComponent
        surfaceId="surface-1"
        componentId="column-1"
        alignment="center"
      />,
      { wrapper }
    )
    const div = container.firstChild as HTMLElement
    expect(div).toHaveClass('items-center')
  })

  it('should render explicit list children', async () => {
    render(
      <ColumnComponent
        surfaceId="surface-1"
        componentId="column-1"
        children={{ explicitList: ['child-1', 'child-2'] }}
      />,
      { wrapper }
    )

    await waitFor(() => {
      expect(screen.getByTestId('component-child-1')).toBeInTheDocument()
      expect(screen.getByTestId('component-child-2')).toBeInTheDocument()
    })
  })

  it('should have correct displayName', () => {
    expect(ColumnComponent.displayName).toBe('A2UI.Column')
  })
})

describe('ListComponent', () => {
  it('should render empty div when no children', () => {
    const { container } = render(
      <ListComponent surfaceId="surface-1" componentId="list-1" />,
      { wrapper }
    )
    const div = container.firstChild as HTMLElement
    expect(div).toBeInTheDocument()
  })

  it('should render with vertical direction by default', () => {
    const { container } = render(
      <ListComponent surfaceId="surface-1" componentId="list-1" />,
      { wrapper }
    )
    const div = container.firstChild as HTMLElement
    expect(div).toHaveClass('flex', 'flex-col')
  })

  it('should render with horizontal direction', () => {
    const { container } = render(
      <ListComponent
        surfaceId="surface-1"
        componentId="list-1"
        direction="horizontal"
      />,
      { wrapper }
    )
    const div = container.firstChild as HTMLElement
    expect(div).toHaveClass('flex', 'flex-row')
  })

  it('should apply alignment styles', () => {
    const { container } = render(
      <ListComponent
        surfaceId="surface-1"
        componentId="list-1"
        alignment="center"
      />,
      { wrapper }
    )
    const div = container.firstChild as HTMLElement
    expect(div).toHaveClass('items-center')
  })

  it('should render explicit list children', async () => {
    render(
      <ListComponent
        surfaceId="surface-1"
        componentId="list-1"
        children={{ explicitList: ['item-1', 'item-2'] }}
      />,
      { wrapper }
    )

    await waitFor(() => {
      expect(screen.getByTestId('component-item-1')).toBeInTheDocument()
      expect(screen.getByTestId('component-item-2')).toBeInTheDocument()
    })
  })

  it('should have correct displayName', () => {
    expect(ListComponent.displayName).toBe('A2UI.List')
  })
})

describe('CardComponent', () => {
  it('should render empty card when no child', () => {
    const { container } = render(
      <CardComponent surfaceId="surface-1" componentId="card-1" />,
      { wrapper }
    )
    // Card component should be rendered
    expect(container.firstChild).toBeInTheDocument()
  })

  it('should render child component', async () => {
    render(
      <CardComponent
        surfaceId="surface-1"
        componentId="card-1"
        child="card-content"
      />,
      { wrapper }
    )

    await waitFor(() => {
      expect(screen.getByTestId('component-card-content')).toBeInTheDocument()
    })
  })

  it('should have correct displayName', () => {
    expect(CardComponent.displayName).toBe('A2UI.Card')
  })
})

describe('TabsComponent', () => {
  it('should return null when no tabItems', () => {
    const { container } = render(
      <TabsComponent surfaceId="surface-1" componentId="tabs-1" />,
      { wrapper }
    )
    expect(container.firstChild).toBeNull()
  })

  it('should return null when tabItems is empty', () => {
    const { container } = render(
      <TabsComponent
        surfaceId="surface-1"
        componentId="tabs-1"
        tabItems={[]}
      />,
      { wrapper }
    )
    expect(container.firstChild).toBeNull()
  })

  it('should render tabs with items', async () => {
    render(
      <TabsComponent
        surfaceId="surface-1"
        componentId="tabs-1"
        tabItems={[
          { title: { literalString: 'Tab 1' }, child: 'content-1' },
          { title: { literalString: 'Tab 2' }, child: 'content-2' },
        ]}
      />,
      { wrapper }
    )

    await waitFor(() => {
      expect(screen.getByText('Tab 1')).toBeInTheDocument()
      expect(screen.getByText('Tab 2')).toBeInTheDocument()
    })
  })

  it('should render default tab title when not provided', async () => {
    render(
      <TabsComponent
        surfaceId="surface-1"
        componentId="tabs-1"
        tabItems={[{ child: 'content-1' }, { child: 'content-2' }]}
      />,
      { wrapper }
    )

    await waitFor(() => {
      expect(screen.getByText('Tab 1')).toBeInTheDocument()
      expect(screen.getByText('Tab 2')).toBeInTheDocument()
    })
  })

  it('should render first tab content by default', async () => {
    render(
      <TabsComponent
        surfaceId="surface-1"
        componentId="tabs-1"
        tabItems={[
          { title: { literalString: 'Tab 1' }, child: 'content-1' },
          { title: { literalString: 'Tab 2' }, child: 'content-2' },
        ]}
      />,
      { wrapper }
    )

    await waitFor(() => {
      expect(screen.getByTestId('component-content-1')).toBeInTheDocument()
    })
  })

  it('should have correct displayName', () => {
    expect(TabsComponent.displayName).toBe('A2UI.Tabs')
  })
})

describe('ModalComponent', () => {
  it('should return null when entryPointChild is missing', () => {
    const { container } = render(
      <ModalComponent
        surfaceId="surface-1"
        componentId="modal-1"
        contentChild="content"
      />,
      { wrapper }
    )
    expect(container.firstChild).toBeNull()
  })

  it('should return null when contentChild is missing', () => {
    const { container } = render(
      <ModalComponent
        surfaceId="surface-1"
        componentId="modal-1"
        entryPointChild="trigger"
      />,
      { wrapper }
    )
    expect(container.firstChild).toBeNull()
  })

  it('should render trigger component', async () => {
    render(
      <ModalComponent
        surfaceId="surface-1"
        componentId="modal-1"
        entryPointChild="trigger"
        contentChild="content"
      />,
      { wrapper }
    )

    await waitFor(() => {
      expect(screen.getByTestId('component-trigger')).toBeInTheDocument()
    })
  })

  it('should open modal when trigger is clicked', async () => {
    const user = userEvent.setup()

    render(
      <ModalComponent
        surfaceId="surface-1"
        componentId="modal-1"
        entryPointChild="trigger"
        contentChild="modal-content"
      />,
      { wrapper }
    )

    await waitFor(() => {
      expect(screen.getByTestId('component-trigger')).toBeInTheDocument()
    })

    // Click the trigger
    await user.click(screen.getByTestId('component-trigger'))

    // Modal content should be visible
    await waitFor(() => {
      expect(screen.getByTestId('component-modal-content')).toBeInTheDocument()
    })
  })

  it('should have correct displayName', () => {
    expect(ModalComponent.displayName).toBe('A2UI.Modal')
  })
})
