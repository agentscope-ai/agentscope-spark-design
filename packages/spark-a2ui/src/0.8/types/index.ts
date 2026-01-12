/**
 * A2UI React Renderer - Type Definitions
 *
 * Core type definitions for the A2UI React renderer.
 * Based on the A2UI specification documents.
 */

// ============ Value Types ============

/**
 * Represents a value source - either a literal value or a reference to a data model path.
 */
export type ValueSource =
  | { literalString: string }
  | { literalNumber: number }
  | { literalBoolean: boolean }
  | { literalArray: string[] }
  | { path: string }

// ============ Data Model ============

/**
 * Primitive values that can be stored in the data model.
 */
export type DataModelValue =
  | string
  | number
  | boolean
  | null
  | DataModel
  | unknown[]

/**
 * The data model is a hierarchical key-value store.
 * Components reference data using paths like "/user/name".
 */
export interface DataModel {
  [key: string]: DataModelValue
}

/**
 * Data entry from server messages (dataModelUpdate).
 */
export interface DataEntry {
  key: string
  valueString?: string
  valueNumber?: number
  valueBoolean?: boolean
  valueMap?: DataEntry[]
}

// ============ Surface ============

/**
 * Surface styles configuration.
 */
export interface SurfaceStyles {
  font?: string
  primaryColor?: string
}

/**
 * A Surface is the top-level container for A2UI rendering.
 */
export interface Surface {
  surfaceId: string
  root: string
  components: Map<string, ComponentDefinition>
  styles?: SurfaceStyles
}

// ============ Component Definition ============

/**
 * Base component properties that all components share.
 */
export interface ComponentDefinition {
  id: string
  weight?: number
  component: {
    [componentType: string]: ComponentProps
  }
}

/**
 * Generic component properties type.
 */
export type ComponentProps = Record<string, unknown>

// ============ Children Definition ============

/**
 * Template binding for dynamic child generation.
 */
export interface TemplateBinding {
  componentId: string
  dataBinding: string
}

/**
 * Children definition for container components.
 */
export interface ChildrenDefinition {
  explicitList?: string[]
  template?: TemplateBinding
}

// ============ Action ============

/**
 * A single item in the action context.
 */
export interface ActionContextItem {
  key: string
  value: ValueSource
}

/**
 * Action definition (attached to Button components).
 */
export interface Action {
  name: string
  context?: ActionContextItem[]
}

/**
 * Resolved action payload sent to the action handler.
 */
export interface ActionPayload {
  surfaceId: string
  name: string
  context: Record<string, unknown>
  sourceComponentId: string
}

/**
 * Action handler callback type.
 */
export type ActionHandler = (action: ActionPayload) => void

// ============ Message Types ============

/**
 * BeginRendering message payload - initializes a new Surface.
 */
export interface BeginRenderingPayload {
  surfaceId: string
  root: string
  catalogId?: string
  styles?: SurfaceStyles
}

/**
 * SurfaceUpdate message payload - updates the component tree.
 */
export interface SurfaceUpdatePayload {
  surfaceId: string
  components: ComponentDefinition[]
}

/**
 * DataModelUpdate message payload - updates the data model.
 */
export interface DataModelUpdatePayload {
  surfaceId: string
  path?: string
  contents: DataEntry[]
}

/**
 * DeleteSurface message payload - removes a Surface.
 */
export interface DeleteSurfacePayload {
  surfaceId: string
}

/**
 * A2UI message from server to client.
 * Only one of the fields should be set per message.
 */
export interface A2UIMessage {
  beginRendering?: BeginRenderingPayload
  surfaceUpdate?: SurfaceUpdatePayload
  dataModelUpdate?: DataModelUpdatePayload
  deleteSurface?: DeleteSurfacePayload
}

// ============ Base Component Props ============

/**
 * Base props shared by all A2UI components.
 */
export interface BaseComponentProps {
  surfaceId: string
  componentId: string
  weight?: number
}

// ============ Display Component Props ============

/**
 * Text component properties.
 */
export interface TextComponentProps extends BaseComponentProps {
  text?: ValueSource
  usageHint?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'caption' | 'body'
}

/**
 * Image component properties.
 */
export interface ImageComponentProps extends BaseComponentProps {
  url?: ValueSource
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  usageHint?:
    | 'icon'
    | 'avatar'
    | 'smallFeature'
    | 'mediumFeature'
    | 'largeFeature'
    | 'header'
}

/**
 * Icon component properties.
 */
export interface IconComponentProps extends BaseComponentProps {
  name?: ValueSource
}

/**
 * Video component properties.
 */
export interface VideoComponentProps extends BaseComponentProps {
  url?: ValueSource
}

/**
 * AudioPlayer component properties.
 */
export interface AudioPlayerComponentProps extends BaseComponentProps {
  url?: ValueSource
  description?: ValueSource
}

/**
 * Divider component properties.
 */
export interface DividerComponentProps extends BaseComponentProps {
  axis?: 'horizontal' | 'vertical'
}

// ============ Layout Component Props ============

/**
 * Distribution values for flex layouts.
 */
export type Distribution =
  | 'start'
  | 'center'
  | 'end'
  | 'spaceBetween'
  | 'spaceAround'
  | 'spaceEvenly'

/**
 * Alignment values for flex layouts.
 */
export type Alignment = 'start' | 'center' | 'end' | 'stretch'

/**
 * Row component properties.
 */
export interface RowComponentProps extends BaseComponentProps {
  children?: ChildrenDefinition
  distribution?: Distribution
  alignment?: Alignment
}

/**
 * Column component properties.
 */
export interface ColumnComponentProps extends BaseComponentProps {
  children?: ChildrenDefinition
  distribution?: Distribution
  alignment?: Alignment
}

/**
 * List component properties.
 */
export interface ListComponentProps extends BaseComponentProps {
  children?: ChildrenDefinition
  direction?: 'vertical' | 'horizontal'
  alignment?: Alignment
}

/**
 * Card component properties.
 */
export interface CardComponentProps extends BaseComponentProps {
  child?: string
}

/**
 * Tab item definition.
 */
export interface TabItem {
  title?: ValueSource
  child: string
}

/**
 * Tabs component properties.
 */
export interface TabsComponentProps extends BaseComponentProps {
  tabItems?: TabItem[]
}

/**
 * Modal component properties.
 */
export interface ModalComponentProps extends BaseComponentProps {
  entryPointChild?: string
  contentChild?: string
}

// ============ Interactive Component Props ============

/**
 * Button component properties.
 */
export interface ButtonComponentProps extends BaseComponentProps {
  child?: string
  primary?: boolean
  action?: Action
}

/**
 * CheckBox component properties.
 */
export interface CheckBoxComponentProps extends BaseComponentProps {
  label?: ValueSource
  value?: ValueSource
}

/**
 * TextField component properties.
 */
export interface TextFieldComponentProps extends BaseComponentProps {
  label?: ValueSource
  text?: ValueSource
  textFieldType?: 'date' | 'longText' | 'number' | 'shortText' | 'obscured'
  validationRegexp?: string
}

/**
 * DateTimeInput component properties.
 */
export interface DateTimeInputComponentProps extends BaseComponentProps {
  value?: ValueSource
  enableDate?: boolean
  enableTime?: boolean
}

/**
 * MultipleChoice option definition.
 */
export interface MultipleChoiceOption {
  label?: ValueSource
  value: string
}

/**
 * MultipleChoice component properties.
 */
export interface MultipleChoiceComponentProps extends BaseComponentProps {
  selections?: ValueSource
  options?: MultipleChoiceOption[]
  maxAllowedSelections?: number
}

/**
 * Slider component properties.
 */
export interface SliderComponentProps extends BaseComponentProps {
  value?: ValueSource
  minValue?: number
  maxValue?: number
}

// ============ Renderer Props ============

/**
 * Decision button for the fixed bottom area.
 */
export interface DecisionButton {
  name: string
  label: string
  action: string
  variant?: 'primary' | 'secondary' | 'destructive'
  icon?: string
}

/**
 * Confirmed info item for display.
 */
export interface ConfirmedInfoItem {
  label: string
  value: string
  highlight?: boolean
  isFullWidth?: boolean
}

/**
 * Confirmed info section configuration.
 */
export interface ConfirmedInfo {
  title?: string
  items: ConfirmedInfoItem[]
}

/**
 * Form section warning configuration.
 */
export interface FormSectionWarning {
  title: string
  message: string
}

/**
 * Completed action information.
 */
export interface CompletedAction {
  action: string
  label: string
  completedAt?: string
  completedBy?: string
  formData?: Record<string, unknown>
}

/**
 * Progress information.
 */
export interface Progress {
  current: number
  total: number
}
