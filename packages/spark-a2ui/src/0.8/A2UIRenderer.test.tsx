/**
 * A2UIRenderer Tests
 *
 * Tests for the main A2UIRenderer component.
 */

import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { A2UIRenderer } from './A2UIRenderer'
import { A2UIProvider, type ComponentsMap } from './contexts/A2UIProvider'
import { useSurfaceContext } from './contexts/SurfaceContext'
import type { A2UIMessage, BaseComponentProps, Action } from './types'
import { useDispatchAction } from './hooks/useDispatchAction'
import { useDataBinding, useFormBinding } from './hooks/useDataBinding'
import { ComponentRenderer } from './components/ComponentRenderer'

// Helper to create test messages
function createTestMessages(options: {
  surfaceId?: string
  root?: string
  components?: Array<{
    id: string
    type: string
    props?: Record<string, unknown>
  }>
  dataModel?: Record<string, unknown>
}): A2UIMessage[] {
  const {
    surfaceId = 'test-surface',
    root = 'root-component',
    components = [],
    dataModel,
  } = options

  const messages: A2UIMessage[] = []

  // Begin rendering message
  messages.push({
    beginRendering: {
      surfaceId,
      root,
    },
  })

  // Surface update with components
  if (components.length > 0) {
    messages.push({
      surfaceUpdate: {
        surfaceId,
        components: components.map((c) => ({
          id: c.id,
          component: { [c.type]: c.props ?? {} },
        })),
      },
    })
  }

  // Data model update
  if (dataModel) {
    messages.push({
      dataModelUpdate: {
        surfaceId,
        path: '/',
        contents: Object.entries(dataModel).map(([key, value]) => {
          if (typeof value === 'string') {
            return { key, valueString: value }
          }
          if (typeof value === 'number') {
            return { key, valueNumber: value }
          }
          if (typeof value === 'boolean') {
            return { key, valueBoolean: value }
          }
          return { key, valueString: String(value) }
        }),
      },
    })
  }

  return messages
}

describe('A2UIRenderer', () => {
  describe('Phase 3: User Story 1 - Basic Message Rendering', () => {
    it('T014: renders nothing for empty messages array', () => {
      const { container } = render(
        <A2UIProvider messages={[]}>
          <A2UIRenderer />
        </A2UIProvider>
      )
      expect(container.firstChild).toBeNull()
    })

    it('T014b: renders nothing for null/undefined messages', () => {
      // @ts-expect-error - testing null handling
      const { container: c1 } = render(
        <A2UIProvider messages={null}>
          <A2UIRenderer />
        </A2UIProvider>
      )
      expect(c1.firstChild).toBeNull()

      // @ts-expect-error - testing undefined handling
      const { container: c2 } = render(
        <A2UIProvider messages={undefined}>
          <A2UIRenderer />
        </A2UIProvider>
      )
      expect(c2.firstChild).toBeNull()
    })

    it('T015: renders components from valid A2UIMessage objects', () => {
      const messages = createTestMessages({
        surfaceId: 'surface-1',
        root: 'text-1',
        components: [
          {
            id: 'text-1',
            type: 'Text',
            props: { text: { literalString: 'Hello World' } },
          },
        ],
      })

      render(
        <A2UIProvider messages={messages}>
          <A2UIRenderer />
        </A2UIProvider>
      )

      expect(screen.getByText('Hello World')).toBeInTheDocument()
    })

    it('T016: renders nested components correctly', () => {
      const messages = createTestMessages({
        surfaceId: 'surface-1',
        root: 'column-1',
        components: [
          {
            id: 'column-1',
            type: 'Column',
            props: { children: { explicitList: ['text-1', 'text-2'] } },
          },
          {
            id: 'text-1',
            type: 'Text',
            props: { text: { literalString: 'First' } },
          },
          {
            id: 'text-2',
            type: 'Text',
            props: { text: { literalString: 'Second' } },
          },
        ],
      })

      render(
        <A2UIProvider messages={messages}>
          <A2UIRenderer />
        </A2UIProvider>
      )

      expect(screen.getByText('First')).toBeInTheDocument()
      expect(screen.getByText('Second')).toBeInTheDocument()
    })

    it('renders multiple surfaces', () => {
      const messages: A2UIMessage[] = [
        // Surface 1
        { beginRendering: { surfaceId: 'surface-1', root: 'text-1' } },
        {
          surfaceUpdate: {
            surfaceId: 'surface-1',
            components: [
              {
                id: 'text-1',
                component: { Text: { text: { literalString: 'Surface 1' } } },
              },
            ],
          },
        },
        // Surface 2
        { beginRendering: { surfaceId: 'surface-2', root: 'text-2' } },
        {
          surfaceUpdate: {
            surfaceId: 'surface-2',
            components: [
              {
                id: 'text-2',
                component: { Text: { text: { literalString: 'Surface 2' } } },
              },
            ],
          },
        },
      ]

      render(
        <A2UIProvider messages={messages}>
          <A2UIRenderer />
        </A2UIProvider>
      )

      expect(screen.getByText('Surface 1')).toBeInTheDocument()
      expect(screen.getByText('Surface 2')).toBeInTheDocument()
    })
  })

  describe('Phase 4: User Story 2 - Action Handling', () => {
    it('T022: onAction callback invoked when button clicked', async () => {
      const user = userEvent.setup()
      const onAction = vi.fn()

      const messages = createTestMessages({
        surfaceId: 'surface-1',
        root: 'button-1',
        components: [
          {
            id: 'button-1',
            type: 'Button',
            props: {
              child: 'text-1',
              action: { name: 'submit' },
            },
          },
          {
            id: 'text-1',
            type: 'Text',
            props: { text: { literalString: 'Click Me' } },
          },
        ],
      })

      render(
        <A2UIProvider messages={messages}>
          <A2UIRenderer onAction={onAction} />
        </A2UIProvider>
      )

      const button = screen.getByRole('button')
      await user.click(button)

      expect(onAction).toHaveBeenCalled()
    })

    it('T023: action payload contains surfaceId, componentId, and context', async () => {
      const user = userEvent.setup()
      const onAction = vi.fn()

      const messages = createTestMessages({
        surfaceId: 'my-surface',
        root: 'button-1',
        components: [
          {
            id: 'button-1',
            type: 'Button',
            props: {
              child: 'text-1',
              action: {
                name: 'submit',
                context: [
                  { key: 'value', value: { literalString: 'test-value' } },
                ],
              },
            },
          },
          {
            id: 'text-1',
            type: 'Text',
            props: { text: { literalString: 'Submit' } },
          },
        ],
      })

      render(
        <A2UIProvider messages={messages}>
          <A2UIRenderer onAction={onAction} />
        </A2UIProvider>
      )

      const button = screen.getByRole('button')
      await user.click(button)

      expect(onAction).toHaveBeenCalledWith(
        expect.objectContaining({
          surfaceId: 'my-surface',
          sourceComponentId: 'button-1',
          name: 'submit',
          context: { value: 'test-value' },
        })
      )
    })

    it('T024: multiple components dispatch unique actions', async () => {
      const user = userEvent.setup()
      const onAction = vi.fn()

      const messages = createTestMessages({
        surfaceId: 'surface-1',
        root: 'row-1',
        components: [
          {
            id: 'row-1',
            type: 'Row',
            props: { children: { explicitList: ['button-1', 'button-2'] } },
          },
          {
            id: 'button-1',
            type: 'Button',
            props: {
              child: 'text-1',
              action: { name: 'action-1' },
            },
          },
          {
            id: 'button-2',
            type: 'Button',
            props: {
              child: 'text-2',
              action: { name: 'action-2' },
            },
          },
          {
            id: 'text-1',
            type: 'Text',
            props: { text: { literalString: 'Button 1' } },
          },
          {
            id: 'text-2',
            type: 'Text',
            props: { text: { literalString: 'Button 2' } },
          },
        ],
      })

      render(
        <A2UIProvider messages={messages}>
          <A2UIRenderer onAction={onAction} />
        </A2UIProvider>
      )

      const buttons = screen.getAllByRole('button')
      await user.click(buttons[0])
      await user.click(buttons[1])

      expect(onAction).toHaveBeenCalledTimes(2)
      expect(onAction).toHaveBeenNthCalledWith(
        1,
        expect.objectContaining({
          name: 'action-1',
          sourceComponentId: 'button-1',
        })
      )
      expect(onAction).toHaveBeenNthCalledWith(
        2,
        expect.objectContaining({
          name: 'action-2',
          sourceComponentId: 'button-2',
        })
      )
    })

    it('T027: no error when action dispatched without onAction callback', async () => {
      const user = userEvent.setup()
      const consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {})

      const messages = createTestMessages({
        surfaceId: 'surface-1',
        root: 'button-1',
        components: [
          {
            id: 'button-1',
            type: 'Button',
            props: {
              child: 'text-1',
              action: { name: 'submit' },
            },
          },
          {
            id: 'text-1',
            type: 'Text',
            props: { text: { literalString: 'Click Me' } },
          },
        ],
      })

      // No onAction prop
      render(
        <A2UIProvider messages={messages}>
          <A2UIRenderer />
        </A2UIProvider>
      )

      const button = screen.getByRole('button')

      // Should not throw
      await expect(user.click(button)).resolves.not.toThrow()

      consoleWarn.mockRestore()
    })
  })

  describe('Phase 5: User Story 3 - Custom Component Override', () => {
    it('T028: custom Button component renders instead of default', () => {
      function CustomButton({
        surfaceId,
        child,
      }: BaseComponentProps & { child?: string }) {
        return (
          <button data-testid="custom-button" data-surface={surfaceId}>
            Custom:{' '}
            {child && (
              <ComponentRenderer surfaceId={surfaceId} componentId={child} />
            )}
          </button>
        )
      }

      const customComponents: ComponentsMap = new Map([
        ['Button', CustomButton],
      ])

      const messages = createTestMessages({
        surfaceId: 'surface-1',
        root: 'button-1',
        components: [
          {
            id: 'button-1',
            type: 'Button',
            props: { child: 'text-1' },
          },
          {
            id: 'text-1',
            type: 'Text',
            props: { text: { literalString: 'Hello' } },
          },
        ],
      })

      render(
        <A2UIProvider messages={messages} components={customComponents}>
          <A2UIRenderer />
        </A2UIProvider>
      )

      expect(screen.getByTestId('custom-button')).toBeInTheDocument()
      expect(screen.getByText('Hello')).toBeInTheDocument()
    })

    it('T029: multiple custom components render correctly', () => {
      function CustomButton() {
        return <button data-testid="custom-button">Custom Button</button>
      }

      function CustomText({
        text,
      }: BaseComponentProps & { text?: { literalString?: string } }) {
        return (
          <span data-testid="custom-text">Custom: {text?.literalString}</span>
        )
      }

      const customComponents: ComponentsMap = new Map([
        ['Button', CustomButton],
        ['Text', CustomText],
      ])

      const messages = createTestMessages({
        surfaceId: 'surface-1',
        root: 'row-1',
        components: [
          {
            id: 'row-1',
            type: 'Row',
            props: { children: { explicitList: ['button-1', 'text-1'] } },
          },
          { id: 'button-1', type: 'Button', props: {} },
          {
            id: 'text-1',
            type: 'Text',
            props: { text: { literalString: 'Hello' } },
          },
        ],
      })

      render(
        <A2UIProvider messages={messages} components={customComponents}>
          <A2UIRenderer />
        </A2UIProvider>
      )

      expect(screen.getByTestId('custom-button')).toBeInTheDocument()
      expect(screen.getByTestId('custom-text')).toBeInTheDocument()
      expect(screen.getByText('Custom: Hello')).toBeInTheDocument()
    })

    it('T030: non-overridden components use defaults', () => {
      function CustomButton() {
        return <button data-testid="custom-button">Custom Button</button>
      }

      const customComponents: ComponentsMap = new Map([
        ['Button', CustomButton],
      ])

      const messages = createTestMessages({
        surfaceId: 'surface-1',
        root: 'row-1',
        components: [
          {
            id: 'row-1',
            type: 'Row',
            props: { children: { explicitList: ['button-1', 'text-1'] } },
          },
          { id: 'button-1', type: 'Button', props: {} },
          {
            id: 'text-1',
            type: 'Text',
            props: { text: { literalString: 'Default Text' } },
          },
        ],
      })

      render(
        <A2UIProvider messages={messages} components={customComponents}>
          <A2UIRenderer />
        </A2UIProvider>
      )

      // Custom button
      expect(screen.getByTestId('custom-button')).toBeInTheDocument()
      // Default text component
      expect(screen.getByText('Default Text')).toBeInTheDocument()
    })
  })

  describe('Phase 6: User Story 4 - Custom Component Creation', () => {
    it('T034: new component type "Switch" renders from ComponentsMap', () => {
      function CustomSwitch({
        label,
      }: BaseComponentProps & { label?: string }) {
        return (
          <label data-testid="custom-switch">
            <input type="checkbox" />
            {label}
          </label>
        )
      }

      const customComponents: ComponentsMap = new Map([
        ['Switch', CustomSwitch],
      ])

      const messages = createTestMessages({
        surfaceId: 'surface-1',
        root: 'switch-1',
        components: [
          {
            id: 'switch-1',
            type: 'Switch',
            props: { label: 'Enable feature' },
          },
        ],
      })

      render(
        <A2UIProvider messages={messages} components={customComponents}>
          <A2UIRenderer />
        </A2UIProvider>
      )

      expect(screen.getByTestId('custom-switch')).toBeInTheDocument()
      expect(screen.getByText('Enable feature')).toBeInTheDocument()
    })

    it('T035: custom component can use useDispatchAction hook', async () => {
      const user = userEvent.setup()
      const onAction = vi.fn()

      function CustomSwitch({
        surfaceId,
        componentId,
        action,
      }: BaseComponentProps & { action?: Action }) {
        const dispatchAction = useDispatchAction()

        const handleChange = () => {
          if (action) {
            dispatchAction(surfaceId, componentId, action)
          }
        }

        return (
          <label data-testid="custom-switch">
            <input type="checkbox" onChange={handleChange} />
            Toggle
          </label>
        )
      }

      const customComponents: ComponentsMap = new Map([
        ['Switch', CustomSwitch],
      ])

      const messages = createTestMessages({
        surfaceId: 'surface-1',
        root: 'switch-1',
        components: [
          {
            id: 'switch-1',
            type: 'Switch',
            props: { action: { name: 'toggle' } },
          },
        ],
      })

      render(
        <A2UIProvider messages={messages} components={customComponents}>
          <A2UIRenderer onAction={onAction} />
        </A2UIProvider>
      )

      const checkbox = screen.getByRole('checkbox')
      await user.click(checkbox)

      expect(onAction).toHaveBeenCalledWith(
        expect.objectContaining({
          surfaceId: 'surface-1',
          sourceComponentId: 'switch-1',
          name: 'toggle',
        })
      )
    })
  })

  describe('Phase 7: User Story 5 - Data Binding in Custom Components', () => {
    it('T038: custom component with useDataBinding displays bound value', () => {
      function CustomDisplay({
        surfaceId,
        text,
      }: BaseComponentProps & { text?: { path: string } }) {
        const textValue = useDataBinding<string>(surfaceId, text, 'default')
        return <span data-testid="custom-display">{textValue}</span>
      }

      const customComponents: ComponentsMap = new Map([
        ['CustomDisplay', CustomDisplay],
      ])

      const messages: A2UIMessage[] = [
        { beginRendering: { surfaceId: 'surface-1', root: 'display-1' } },
        {
          surfaceUpdate: {
            surfaceId: 'surface-1',
            components: [
              {
                id: 'display-1',
                component: { CustomDisplay: { text: { path: '/message' } } },
              },
            ],
          },
        },
        {
          dataModelUpdate: {
            surfaceId: 'surface-1',
            path: '/',
            contents: [
              { key: 'message', valueString: 'Hello from data model' },
            ],
          },
        },
      ]

      render(
        <A2UIProvider messages={messages} components={customComponents}>
          <A2UIRenderer />
        </A2UIProvider>
      )

      expect(screen.getByTestId('custom-display')).toHaveTextContent(
        'Hello from data model'
      )
    })

    it('T039: useDataBinding returns default when path not found', () => {
      function CustomDisplay({
        surfaceId,
        text,
      }: BaseComponentProps & { text?: { path: string } }) {
        const textValue = useDataBinding<string>(
          surfaceId,
          text,
          'fallback value'
        )
        return <span data-testid="custom-display">{textValue}</span>
      }

      const customComponents: ComponentsMap = new Map([
        ['CustomDisplay', CustomDisplay],
      ])

      const messages: A2UIMessage[] = [
        { beginRendering: { surfaceId: 'surface-1', root: 'display-1' } },
        {
          surfaceUpdate: {
            surfaceId: 'surface-1',
            components: [
              {
                id: 'display-1',
                component: {
                  CustomDisplay: { text: { path: '/nonexistent' } },
                },
              },
            ],
          },
        },
      ]

      render(
        <A2UIProvider messages={messages} components={customComponents}>
          <A2UIRenderer />
        </A2UIProvider>
      )

      expect(screen.getByTestId('custom-display')).toHaveTextContent(
        'fallback value'
      )
    })
  })

  describe('Phase 8: User Story 6 - Form Binding in Custom Components', () => {
    it('T042: custom component with useFormBinding displays current value', () => {
      function CustomInput({
        surfaceId,
        value,
      }: BaseComponentProps & { value?: { path: string } }) {
        const [inputValue] = useFormBinding<string>(surfaceId, value, '')
        return <input data-testid="custom-input" value={inputValue} readOnly />
      }

      const customComponents: ComponentsMap = new Map([
        ['CustomInput', CustomInput],
      ])

      const messages: A2UIMessage[] = [
        { beginRendering: { surfaceId: 'surface-1', root: 'input-1' } },
        {
          surfaceUpdate: {
            surfaceId: 'surface-1',
            components: [
              {
                id: 'input-1',
                component: { CustomInput: { value: { path: '/username' } } },
              },
            ],
          },
        },
        {
          dataModelUpdate: {
            surfaceId: 'surface-1',
            path: '/',
            contents: [{ key: 'username', valueString: 'john_doe' }],
          },
        },
      ]

      render(
        <A2UIProvider messages={messages} components={customComponents}>
          <A2UIRenderer />
        </A2UIProvider>
      )

      expect(screen.getByTestId('custom-input')).toHaveValue('john_doe')
    })

    it('T043: useFormBinding setValue updates the bound value', async () => {
      const user = userEvent.setup()

      function CustomInput({
        surfaceId,
        value,
      }: BaseComponentProps & { value?: { path: string } }) {
        const [inputValue, setInputValue] = useFormBinding<string>(
          surfaceId,
          value,
          ''
        )
        return (
          <input
            data-testid="custom-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        )
      }

      const customComponents: ComponentsMap = new Map([
        ['CustomInput', CustomInput],
      ])

      const messages: A2UIMessage[] = [
        { beginRendering: { surfaceId: 'surface-1', root: 'input-1' } },
        {
          surfaceUpdate: {
            surfaceId: 'surface-1',
            components: [
              {
                id: 'input-1',
                component: { CustomInput: { value: { path: '/username' } } },
              },
            ],
          },
        },
      ]

      render(
        <A2UIProvider messages={messages} components={customComponents}>
          <A2UIRenderer />
        </A2UIProvider>
      )

      const input = screen.getByTestId('custom-input')
      await user.type(input, 'new_value')

      expect(input).toHaveValue('new_value')
    })

    it('T044: useFormBinding returns default when path not found', () => {
      function CustomInput({
        surfaceId,
        value,
      }: BaseComponentProps & { value?: { path: string } }) {
        const [inputValue] = useFormBinding<string>(
          surfaceId,
          value,
          'default_value'
        )
        return <input data-testid="custom-input" value={inputValue} readOnly />
      }

      const customComponents: ComponentsMap = new Map([
        ['CustomInput', CustomInput],
      ])

      const messages: A2UIMessage[] = [
        { beginRendering: { surfaceId: 'surface-1', root: 'input-1' } },
        {
          surfaceUpdate: {
            surfaceId: 'surface-1',
            components: [
              {
                id: 'input-1',
                component: { CustomInput: { value: { path: '/nonexistent' } } },
              },
            ],
          },
        },
      ]

      render(
        <A2UIProvider messages={messages} components={customComponents}>
          <A2UIRenderer />
        </A2UIProvider>
      )

      expect(screen.getByTestId('custom-input')).toHaveValue('default_value')
    })
  })

  describe('Middleware pattern', () => {
    it('allows custom middleware component between Provider and Renderer', () => {
      function CustomMiddleware({ children }: { children: React.ReactNode }) {
        // Custom middleware can use hooks here
        return <div data-testid="middleware">{children}</div>
      }

      const messages = createTestMessages({
        surfaceId: 'surface-1',
        root: 'text-1',
        components: [
          {
            id: 'text-1',
            type: 'Text',
            props: { text: { literalString: 'Hello World' } },
          },
        ],
      })

      render(
        <A2UIProvider messages={messages}>
          <CustomMiddleware>
            <A2UIRenderer />
          </CustomMiddleware>
        </A2UIProvider>
      )

      expect(screen.getByTestId('middleware')).toBeInTheDocument()
      expect(screen.getByText('Hello World')).toBeInTheDocument()
    })

    it('middleware can access A2UI hooks', () => {
      function CustomMiddleware({ children }: { children: React.ReactNode }) {
        // Middleware can access SurfaceContext and DataModelContext hooks
        // but not ActionContext (which is now inside A2UIRenderer)
        const { surfaces } = useSurfaceContext()
        return (
          <div data-testid="middleware" data-has-surfaces={surfaces.size > 0}>
            {children}
          </div>
        )
      }

      const messages = createTestMessages({
        surfaceId: 'surface-1',
        root: 'text-1',
        components: [
          {
            id: 'text-1',
            type: 'Text',
            props: { text: { literalString: 'Hello World' } },
          },
        ],
      })

      render(
        <A2UIProvider messages={messages}>
          <CustomMiddleware>
            <A2UIRenderer />
          </CustomMiddleware>
        </A2UIProvider>
      )

      expect(screen.getByTestId('middleware')).toHaveAttribute(
        'data-has-surfaces',
        'true'
      )
    })
  })
})
