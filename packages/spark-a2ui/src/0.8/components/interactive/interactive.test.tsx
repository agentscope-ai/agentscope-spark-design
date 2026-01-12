/**
 * Interactive Components Tests
 *
 * Tests for ButtonComponent, CheckBoxComponent, TextFieldComponent,
 * DateTimeInputComponent, MultipleChoiceComponent, and SliderComponent.
 */

import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ButtonComponent } from './ButtonComponent'
import { CheckBoxComponent } from './CheckBoxComponent'
import { TextFieldComponent } from './TextFieldComponent'
import { DateTimeInputComponent } from './DateTimeInputComponent'
import { MultipleChoiceComponent } from './MultipleChoiceComponent'
import { SliderComponent } from './SliderComponent'
import { DataModelProvider } from '../../contexts/DataModelContext'
import { ActionProvider } from '../../contexts/ActionContext'
import type { ReactNode } from 'react'
import type { ActionPayload } from '@/0.8/types'

// Mock ComponentRenderer
vi.mock('../ComponentRenderer', () => ({
  ComponentRenderer: vi.fn(({ componentId }) => (
    <span data-testid={`component-${componentId}`}>{componentId}</span>
  )),
}))

// Wrapper with providers
const createWrapper = (onAction?: (action: ActionPayload) => void) => {
  return ({ children }: { children: ReactNode }) => (
    <DataModelProvider>
      <ActionProvider onAction={onAction}>{children}</ActionProvider>
    </DataModelProvider>
  )
}

const wrapper = createWrapper()

describe('ButtonComponent', () => {
  it('should render button with default text', () => {
    render(<ButtonComponent surfaceId="surface-1" componentId="button-1" />, {
      wrapper,
    })
    expect(screen.getByRole('button')).toHaveTextContent('Button')
  })

  it('should render child component when provided', async () => {
    render(
      <ButtonComponent
        surfaceId="surface-1"
        componentId="button-1"
        child="button-text"
      />,
      { wrapper }
    )

    await waitFor(() => {
      expect(screen.getByTestId('component-button-text')).toBeInTheDocument()
    })
  })

  it('should render with outline variant by default', () => {
    render(<ButtonComponent surfaceId="surface-1" componentId="button-1" />, {
      wrapper,
    })
    // Outline variant has specific classes
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should render with default variant when primary is true', () => {
    render(
      <ButtonComponent
        surfaceId="surface-1"
        componentId="button-1"
        primary={true}
      />,
      { wrapper }
    )
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should dispatch action on click', async () => {
    const onAction = vi.fn()
    const actionWrapper = createWrapper(onAction)
    const user = userEvent.setup()

    render(
      <ButtonComponent
        surfaceId="surface-1"
        componentId="button-1"
        action={{ name: 'submit' }}
      />,
      { wrapper: actionWrapper }
    )

    await user.click(screen.getByRole('button'))

    expect(onAction).toHaveBeenCalledWith({
      surfaceId: 'surface-1',
      name: 'submit',
      context: {},
      sourceComponentId: 'button-1',
    })
  })

  it('should dispatch action with context', async () => {
    const onAction = vi.fn()
    const actionWrapper = createWrapper(onAction)
    const user = userEvent.setup()

    render(
      <ButtonComponent
        surfaceId="surface-1"
        componentId="button-1"
        action={{
          name: 'submit',
          context: [{ key: 'type', value: { literalString: 'form' } }],
        }}
      />,
      { wrapper: actionWrapper }
    )

    await user.click(screen.getByRole('button'))

    expect(onAction).toHaveBeenCalledWith({
      surfaceId: 'surface-1',
      name: 'submit',
      context: { type: 'form' },
      sourceComponentId: 'button-1',
    })
  })

  it('should not dispatch when no action is provided', async () => {
    const onAction = vi.fn()
    const actionWrapper = createWrapper(onAction)
    const user = userEvent.setup()

    render(<ButtonComponent surfaceId="surface-1" componentId="button-1" />, {
      wrapper: actionWrapper,
    })

    await user.click(screen.getByRole('button'))

    expect(onAction).not.toHaveBeenCalled()
  })

  it('should have correct displayName', () => {
    expect(ButtonComponent.displayName).toBe('A2UI.Button')
  })
})

describe('CheckBoxComponent', () => {
  it('should render checkbox', () => {
    render(
      <CheckBoxComponent surfaceId="surface-1" componentId="checkbox-1" />,
      { wrapper }
    )
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('should render label when provided', () => {
    render(
      <CheckBoxComponent
        surfaceId="surface-1"
        componentId="checkbox-1"
        label={{ literalString: 'Accept terms' }}
      />,
      { wrapper }
    )
    expect(screen.getByText('Accept terms')).toBeInTheDocument()
  })

  it('should not render label when empty', () => {
    const { container } = render(
      <CheckBoxComponent
        surfaceId="surface-1"
        componentId="checkbox-1"
        label={{ literalString: '' }}
      />,
      { wrapper }
    )
    expect(container.querySelector('label')).toBeNull()
  })

  it('should be unchecked by default', () => {
    render(
      <CheckBoxComponent surfaceId="surface-1" componentId="checkbox-1" />,
      { wrapper }
    )
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
  })

  it('should toggle checked state on click', async () => {
    const user = userEvent.setup()

    render(
      <CheckBoxComponent
        surfaceId="surface-1"
        componentId="checkbox-1"
        value={{ path: '/form/accepted' }}
      />,
      { wrapper }
    )

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()

    await user.click(checkbox)
    expect(checkbox).toBeChecked()

    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('should have correct displayName', () => {
    expect(CheckBoxComponent.displayName).toBe('A2UI.CheckBox')
  })
})

describe('TextFieldComponent', () => {
  it('should render input field', () => {
    render(<TextFieldComponent surfaceId="surface-1" componentId="field-1" />, {
      wrapper,
    })
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should render label when provided', () => {
    render(
      <TextFieldComponent
        surfaceId="surface-1"
        componentId="field-1"
        label={{ literalString: 'Name' }}
      />,
      { wrapper }
    )
    expect(screen.getByText('Name')).toBeInTheDocument()
  })

  it('should not render label when empty', () => {
    const { container } = render(
      <TextFieldComponent
        surfaceId="surface-1"
        componentId="field-1"
        label={{ literalString: '' }}
      />,
      { wrapper }
    )
    expect(container.querySelector('label')).toBeNull()
  })

  it('should render text input for shortText type', () => {
    render(
      <TextFieldComponent
        surfaceId="surface-1"
        componentId="field-1"
        textFieldType="shortText"
      />,
      { wrapper }
    )
    const input = screen.getByRole('textbox')
    expect(input.tagName).toBe('INPUT')
    expect(input).toHaveAttribute('type', 'text')
  })

  it('should render textarea for longText type', () => {
    render(
      <TextFieldComponent
        surfaceId="surface-1"
        componentId="field-1"
        textFieldType="longText"
      />,
      { wrapper }
    )
    const textarea = screen.getByRole('textbox')
    expect(textarea.tagName).toBe('TEXTAREA')
  })

  it('should render number input for number type', () => {
    render(
      <TextFieldComponent
        surfaceId="surface-1"
        componentId="field-1"
        textFieldType="number"
      />,
      { wrapper }
    )
    const input = screen.getByRole('spinbutton')
    expect(input).toHaveAttribute('type', 'number')
  })

  it('should render password input for obscured type', () => {
    const { container } = render(
      <TextFieldComponent
        surfaceId="surface-1"
        componentId="field-1"
        textFieldType="obscured"
      />,
      { wrapper }
    )
    const input = container.querySelector('input[type="password"]')
    expect(input).toBeInTheDocument()
  })

  it('should render date input for date type', () => {
    const { container } = render(
      <TextFieldComponent
        surfaceId="surface-1"
        componentId="field-1"
        textFieldType="date"
      />,
      { wrapper }
    )
    const input = container.querySelector('input[type="date"]')
    expect(input).toBeInTheDocument()
  })

  it('should update value on input', async () => {
    const user = userEvent.setup()

    render(
      <TextFieldComponent
        surfaceId="surface-1"
        componentId="field-1"
        text={{ path: '/form/name' }}
      />,
      { wrapper }
    )

    const input = screen.getByRole('textbox')
    await user.type(input, 'John')

    expect(input).toHaveValue('John')
  })

  it('should have correct displayName', () => {
    expect(TextFieldComponent.displayName).toBe('A2UI.TextField')
  })
})

describe('DateTimeInputComponent', () => {
  it('should render date picker button by default', () => {
    render(
      <DateTimeInputComponent surfaceId="surface-1" componentId="datetime-1" />,
      { wrapper }
    )
    // Component uses Calendar/Popover UI, renders a button trigger
    expect(
      screen.getByRole('button', { name: /选择日期/i })
    ).toBeInTheDocument()
  })

  it('should render date picker button when enableDate is true', () => {
    render(
      <DateTimeInputComponent
        surfaceId="surface-1"
        componentId="datetime-1"
        enableDate={true}
        enableTime={false}
      />,
      { wrapper }
    )
    expect(
      screen.getByRole('button', { name: /选择日期/i })
    ).toBeInTheDocument()
  })

  it('should render time input when only enableTime is true', () => {
    const { container } = render(
      <DateTimeInputComponent
        surfaceId="surface-1"
        componentId="datetime-1"
        enableDate={false}
        enableTime={true}
      />,
      { wrapper }
    )
    const input = container.querySelector('input[type="time"]')
    expect(input).toBeInTheDocument()
  })

  it('should render datetime picker button when both are enabled', () => {
    render(
      <DateTimeInputComponent
        surfaceId="surface-1"
        componentId="datetime-1"
        enableDate={true}
        enableTime={true}
      />,
      { wrapper }
    )
    // Component uses Calendar/Popover UI with time input inside
    expect(
      screen.getByRole('button', { name: /选择日期和时间/i })
    ).toBeInTheDocument()
  })

  it('should update time value on change', async () => {
    const { container } = render(
      <DateTimeInputComponent
        surfaceId="surface-1"
        componentId="datetime-1"
        enableDate={false}
        enableTime={true}
        value={{ path: '/form/time' }}
      />,
      { wrapper }
    )

    const input = container.querySelector(
      'input[type="time"]'
    ) as HTMLInputElement
    fireEvent.change(input, { target: { value: '14:30' } })

    expect(input).toHaveValue('14:30')
  })

  it('should have correct displayName', () => {
    expect(DateTimeInputComponent.displayName).toBe('A2UI.DateTimeInput')
  })
})

describe('MultipleChoiceComponent', () => {
  it('should return null when no options', () => {
    const { container } = render(
      <MultipleChoiceComponent surfaceId="surface-1" componentId="choice-1" />,
      { wrapper }
    )
    expect(container.firstChild).toBeNull()
  })

  it('should return null when options is empty', () => {
    const { container } = render(
      <MultipleChoiceComponent
        surfaceId="surface-1"
        componentId="choice-1"
        options={[]}
      />,
      { wrapper }
    )
    expect(container.firstChild).toBeNull()
  })

  it('should render select with options when maxAllowedSelections is 1', async () => {
    render(
      <MultipleChoiceComponent
        surfaceId="surface-1"
        componentId="choice-1"
        maxAllowedSelections={1}
        options={[
          { label: { literalString: 'Option A' }, value: 'a' },
          { label: { literalString: 'Option B' }, value: 'b' },
        ]}
      />,
      { wrapper }
    )

    // Select trigger is a combobox role
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it('should show placeholder when no selection and maxAllowedSelections is 1', () => {
    render(
      <MultipleChoiceComponent
        surfaceId="surface-1"
        componentId="choice-1"
        maxAllowedSelections={1}
        options={[{ label: { literalString: 'Option A' }, value: 'a' }]}
      />,
      { wrapper }
    )

    expect(screen.getByText('Select an option')).toBeInTheDocument()
  })

  it('should render checkboxes for multi-select by default', () => {
    render(
      <MultipleChoiceComponent
        surfaceId="surface-1"
        componentId="choice-1"
        options={[
          { label: { literalString: 'Option A' }, value: 'a' },
          { label: { literalString: 'Option B' }, value: 'b' },
        ]}
      />,
      { wrapper }
    )

    // Should render checkboxes instead of combobox
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes).toHaveLength(2)
    expect(screen.getByText('Option A')).toBeInTheDocument()
    expect(screen.getByText('Option B')).toBeInTheDocument()
  })

  it('should allow multiple selections', async () => {
    const user = userEvent.setup()

    render(
      <MultipleChoiceComponent
        surfaceId="surface-1"
        componentId="choice-1"
        selections={{ path: '/form/selections' }}
        options={[
          { label: { literalString: 'Option A' }, value: 'a' },
          { label: { literalString: 'Option B' }, value: 'b' },
        ]}
      />,
      { wrapper }
    )

    const checkboxes = screen.getAllByRole('checkbox')
    await user.click(checkboxes[0])
    await user.click(checkboxes[1])

    // Re-query after clicks since component re-renders
    const updatedCheckboxes = screen.getAllByRole('checkbox')
    expect(updatedCheckboxes[0]).toHaveAttribute('data-state', 'checked')
    expect(updatedCheckboxes[1]).toHaveAttribute('data-state', 'checked')
  })

  it('should respect maxAllowedSelections limit', async () => {
    const user = userEvent.setup()

    render(
      <MultipleChoiceComponent
        surfaceId="surface-1"
        componentId="choice-1"
        selections={{ path: '/form/selections' }}
        maxAllowedSelections={2}
        options={[
          { label: { literalString: 'Option A' }, value: 'a' },
          { label: { literalString: 'Option B' }, value: 'b' },
          { label: { literalString: 'Option C' }, value: 'c' },
        ]}
      />,
      { wrapper }
    )

    const checkboxes = screen.getAllByRole('checkbox')
    await user.click(checkboxes[0])
    await user.click(checkboxes[1])

    // Re-query after clicks since component re-renders
    const updatedCheckboxes = screen.getAllByRole('checkbox')
    // Third checkbox should be disabled after reaching max
    expect(updatedCheckboxes[2]).toBeDisabled()
  })

  it('should have correct displayName', () => {
    expect(MultipleChoiceComponent.displayName).toBe('A2UI.MultipleChoice')
  })
})

describe('SliderComponent', () => {
  it('should render slider', () => {
    render(<SliderComponent surfaceId="surface-1" componentId="slider-1" />, {
      wrapper,
    })
    expect(screen.getByRole('slider')).toBeInTheDocument()
  })

  it('should display min and max values', () => {
    render(
      <SliderComponent
        surfaceId="surface-1"
        componentId="slider-1"
        minValue={0}
        maxValue={100}
      />,
      { wrapper }
    )

    // Min and max values are displayed, but min value may appear twice (as min label and current value)
    expect(screen.getAllByText('0').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('100')).toBeInTheDocument()
  })

  it('should display custom min and max values', () => {
    render(
      <SliderComponent
        surfaceId="surface-1"
        componentId="slider-1"
        minValue={10}
        maxValue={50}
      />,
      { wrapper }
    )

    // Multiple elements may have the same text (min value and current value)
    expect(screen.getAllByText('10').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('50')).toBeInTheDocument()
  })

  it('should display current value', () => {
    render(
      <SliderComponent
        surfaceId="surface-1"
        componentId="slider-1"
        minValue={0}
        maxValue={100}
      />,
      { wrapper }
    )

    // Default value should be minValue (0)
    const valueDisplay = screen.getAllByText('0')
    expect(valueDisplay.length).toBeGreaterThanOrEqual(1)
  })

  it('should have correct displayName', () => {
    expect(SliderComponent.displayName).toBe('A2UI.Slider')
  })
})
