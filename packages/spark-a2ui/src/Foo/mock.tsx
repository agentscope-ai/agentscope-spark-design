import type { A2UIMessage } from '@agentscope-ai/spark-a2ui'

export interface Example {
  id: string
  title: string
  description: string
  group?: string
  messages: A2UIMessage[]
}

export const examples: Example[] = [
  {
    id: 'hello-world',
    title: 'Hello World',
    description: 'Basic Text component demonstration',
    messages: [
      {
        surfaceUpdate: {
          surfaceId: 'main',
          components: [
            {
              id: 'root',
              component: {
                Column: {
                  children: { explicitList: ['heading', 'text', 'button'] },
                  alignment: 'start',
                },
              },
            },
            {
              id: 'heading',
              component: {
                Text: {
                  text: { literalString: 'Hello, A2UI!' },
                  usageHint: 'h1',
                },
              },
            },
            {
              id: 'text',
              component: {
                Text: {
                  text: {
                    literalString:
                      'Welcome to the A2UI React Renderer Playground. Edit the JSON on the left to see changes in real-time.',
                  },
                  usageHint: 'body',
                },
              },
            },
            {
              id: 'button',
              component: {
                Button: {
                  child: 'button-text',
                  primary: true,
                  action: {
                    name: 'hello-click',
                  },
                },
              },
            },
            {
              id: 'button-text',
              component: {
                Text: {
                  text: { literalString: 'Get Started' },
                },
              },
            },
          ],
        },
      },
      {
        beginRendering: {
          surfaceId: 'main',
          root: 'root',
        },
      },
    ],
  },
  {
    id: 'button-actions',
    title: 'Button Actions',
    description: 'Interactive Button with action handling',
    messages: [
      {
        surfaceUpdate: {
          surfaceId: 'main',
          components: [
            {
              id: 'root',
              component: {
                Column: {
                  children: {
                    explicitList: ['heading', 'description', 'buttons'],
                  },
                },
              },
            },
            {
              id: 'heading',
              component: {
                Text: {
                  text: { literalString: 'Button Actions' },
                  usageHint: 'h2',
                },
              },
            },
            {
              id: 'description',
              component: {
                Text: {
                  text: {
                    literalString:
                      'Click the buttons below and check the browser console to see the dispatched actions.',
                  },
                  usageHint: 'body',
                },
              },
            },
            {
              id: 'buttons',
              component: {
                Row: {
                  children: { explicitList: ['btn-primary', 'btn-secondary'] },
                },
              },
            },
            {
              id: 'btn-primary',
              component: {
                Button: {
                  child: 'btn-primary-text',
                  primary: true,
                  action: {
                    name: 'button-click',
                    context: [
                      { key: 'button', value: { literalString: 'primary' } },
                    ],
                  },
                },
              },
            },
            {
              id: 'btn-primary-text',
              component: {
                Text: {
                  text: { literalString: 'Primary' },
                },
              },
            },
            {
              id: 'btn-secondary',
              component: {
                Button: {
                  child: 'btn-secondary-text',
                  primary: false,
                  action: {
                    name: 'button-click',
                    context: [
                      { key: 'button', value: { literalString: 'secondary' } },
                    ],
                  },
                },
              },
            },
            {
              id: 'btn-secondary-text',
              component: {
                Text: {
                  text: { literalString: 'Secondary' },
                },
              },
            },
          ],
        },
      },
      {
        beginRendering: {
          surfaceId: 'main',
          root: 'root',
        },
      },
    ],
  },
  {
    id: 'form-inputs',
    title: 'Form Inputs',
    description: 'TextField and Checkbox components',
    messages: [
      {
        surfaceUpdate: {
          surfaceId: 'main',
          components: [
            {
              id: 'root',
              component: {
                Column: {
                  children: { explicitList: ['heading', 'form'] },
                },
              },
            },
            {
              id: 'heading',
              component: {
                Text: {
                  text: { literalString: 'Form Inputs' },
                  usageHint: 'h2',
                },
              },
            },
            {
              id: 'form',
              component: {
                Column: {
                  children: {
                    explicitList: ['name-field', 'email-field', 'checkbox'],
                  },
                },
              },
            },
            {
              id: 'name-field',
              component: {
                TextField: {
                  label: { literalString: 'Name' },
                  text: { path: 'form.name' },
                },
              },
            },
            {
              id: 'email-field',
              component: {
                TextField: {
                  label: { literalString: 'Email' },
                  text: { path: 'form.email' },
                },
              },
            },
            {
              id: 'checkbox',
              component: {
                CheckBox: {
                  label: { literalString: 'Subscribe to newsletter' },
                  value: { path: 'form.subscribe' },
                },
              },
            },
          ],
        },
      },
      {
        dataModelUpdate: {
          surfaceId: 'main',
          path: 'form',
          contents: [
            { key: 'name', valueString: '' },
            { key: 'email', valueString: '' },
            { key: 'subscribe', valueBoolean: false },
          ],
        },
      },
      {
        beginRendering: {
          surfaceId: 'main',
          root: 'root',
        },
      },
    ],
  },
  {
    id: 'data-binding',
    title: 'Data Binding',
    description: 'Components with ValueSource path bindings',
    messages: [
      {
        surfaceUpdate: {
          surfaceId: 'main',
          components: [
            {
              id: 'root',
              component: {
                Column: {
                  children: {
                    explicitList: ['heading', 'description', 'input', 'output'],
                  },
                },
              },
            },
            {
              id: 'heading',
              component: {
                Text: {
                  text: { literalString: 'Data Binding Demo' },
                  usageHint: 'h2',
                },
              },
            },
            {
              id: 'description',
              component: {
                Text: {
                  text: {
                    literalString:
                      'Type in the input below and see the text update in real-time.',
                  },
                  usageHint: 'body',
                },
              },
            },
            {
              id: 'input',
              component: {
                TextField: {
                  label: { literalString: 'Your message' },
                  text: { path: 'message' },
                },
              },
            },
            {
              id: 'output',
              component: {
                Card: {
                  child: 'output-content',
                },
              },
            },
            {
              id: 'output-content',
              component: {
                Column: {
                  children: { explicitList: ['output-label', 'output-text'] },
                },
              },
            },
            {
              id: 'output-label',
              component: {
                Text: {
                  text: { literalString: 'You typed:' },
                  usageHint: 'caption',
                },
              },
            },
            {
              id: 'output-text',
              component: {
                Text: {
                  text: { path: 'message' },
                  usageHint: 'body',
                },
              },
            },
          ],
        },
      },
      {
        dataModelUpdate: {
          surfaceId: 'main',
          contents: [
            { key: 'message', valueString: 'Hello from data binding!' },
          ],
        },
      },
      {
        beginRendering: {
          surfaceId: 'main',
          root: 'root',
        },
      },
    ],
  },
  {
    id: 'image',
    title: 'Image',
    description: 'Image component with different fit modes and usage hints',
    group: 'Components',
    messages: [
      {
        surfaceUpdate: {
          surfaceId: 'main',
          components: [
            {
              id: 'root',
              component: {
                Column: {
                  children: {
                    explicitList: ['heading', 'description', 'images-row'],
                  },
                },
              },
            },
            {
              id: 'heading',
              component: {
                Text: {
                  text: { literalString: 'Image Component' },
                  usageHint: 'h2',
                },
              },
            },
            {
              id: 'description',
              component: {
                Text: {
                  text: {
                    literalString:
                      'Display images with various fit modes and usage hints.',
                  },
                  usageHint: 'body',
                },
              },
            },
            {
              id: 'images-row',
              component: {
                Row: {
                  children: {
                    explicitList: ['image-contain', 'image-cover'],
                  },
                  distribution: 'spaceEvenly',
                },
              },
            },
            {
              id: 'image-contain',
              component: {
                Image: {
                  url: {
                    literalString: 'https://img.alicdn.com/imgextra/i4/O1CN013vSVjM1RpmzyMesgz_!!6000000002161-0-tps-2640-1100.jpg',
                  },
                  fit: 'contain',
                  usageHint: 'largeFeature',
                },
              },
            },
            {
              id: 'image-cover',
              component: {
                Image: {
                  url: {
                    literalString: 'https://img.alicdn.com/imgextra/i4/O1CN013vSVjM1RpmzyMesgz_!!6000000002161-0-tps-2640-1100.jpg',
                  },
                  fit: 'cover',
                  usageHint: 'largeFeature',
                },
              },
            },
          ],
        },
      },
      {
        beginRendering: {
          surfaceId: 'main',
          root: 'root',
        },
      },
    ],
  },
  {
    id: 'icon',
    title: 'Icon',
    description: 'Icon component displaying various icons',
    group: 'Components',
    messages: [
      {
        surfaceUpdate: {
          surfaceId: 'main',
          components: [
            {
              id: 'root',
              component: {
                Column: {
                  children: {
                    explicitList: ['heading', 'description', 'icons-row'],
                  },
                },
              },
            },
            {
              id: 'heading',
              component: {
                Text: {
                  text: { literalString: 'Icon Component' },
                  usageHint: 'h2',
                },
              },
            },
            {
              id: 'description',
              component: {
                Text: {
                  text: {
                    literalString:
                      'Display icons by name from the icon library.',
                  },
                  usageHint: 'body',
                },
              },
            },
            {
              id: 'icons-row',
              component: {
                Row: {
                  children: {
                    explicitList: [
                      'icon-home',
                      'icon-settings',
                      'icon-user',
                      'icon-search',
                    ],
                  },
                  distribution: 'spaceEvenly',
                },
              },
            },
            {
              id: 'icon-home',
              component: {
                Icon: {
                  name: { literalString: 'home' },
                },
              },
            },
            {
              id: 'icon-settings',
              component: {
                Icon: {
                  name: { literalString: 'settings' },
                },
              },
            },
            {
              id: 'icon-user',
              component: {
                Icon: {
                  name: { literalString: 'user' },
                },
              },
            },
            {
              id: 'icon-search',
              component: {
                Icon: {
                  name: { literalString: 'search' },
                },
              },
            },
          ],
        },
      },
      {
        beginRendering: {
          surfaceId: 'main',
          root: 'root',
        },
      },
    ],
  },
  {
    id: 'video',
    title: 'Video',
    description: 'Video component for embedding video content',
    group: 'Components',
    messages: [
      {
        surfaceUpdate: {
          surfaceId: 'main',
          components: [
            {
              id: 'root',
              component: {
                Column: {
                  children: {
                    explicitList: ['heading', 'description', 'video-player'],
                  },
                },
              },
            },
            {
              id: 'heading',
              component: {
                Text: {
                  text: { literalString: 'Video Component' },
                  usageHint: 'h2',
                },
              },
            },
            {
              id: 'description',
              component: {
                Text: {
                  text: {
                    literalString:
                      'Embed video content with the Video component.',
                  },
                  usageHint: 'body',
                },
              },
            },
            {
              id: 'video-player',
              component: {
                Video: {
                  url: {
                    literalString: 'https://cloud.video.taobao.com/vod/KQsliPiww_VlqnYlBJB8qyh2hycUCa3RA3pAw1-Zv_0.mp4',
                  },
                },
              },
            },
          ],
        },
      },
      {
        beginRendering: {
          surfaceId: 'main',
          root: 'root',
        },
      },
    ],
  },
  {
    id: 'audio-player',
    title: 'Audio Player',
    description: 'AudioPlayer component for playing audio content',
    group: 'Components',
    messages: [
      {
        surfaceUpdate: {
          surfaceId: 'main',
          components: [
            {
              id: 'root',
              component: {
                Column: {
                  children: {
                    explicitList: ['heading', 'description', 'audio'],
                  },
                },
              },
            },
            {
              id: 'heading',
              component: {
                Text: {
                  text: { literalString: 'Audio Player Component' },
                  usageHint: 'h2',
                },
              },
            },
            {
              id: 'description',
              component: {
                Text: {
                  text: {
                    literalString: 'Play audio content with description.',
                  },
                  usageHint: 'body',
                },
              },
            },
            {
              id: 'audio',
              component: {
                AudioPlayer: {
                  url: {
                    literalString: 'https://www.w3schools.com/html/horse.ogg',
                  },
                  description: { literalString: 'Sample audio clip' },
                },
              },
            },
          ],
        },
      },
      {
        beginRendering: {
          surfaceId: 'main',
          root: 'root',
        },
      },
    ],
  },
  {
    id: 'divider',
    title: 'Divider',
    description: 'Divider component for visual separation',
    group: 'Components',
    messages: [
      {
        surfaceUpdate: {
          surfaceId: 'main',
          components: [
            {
              id: 'root',
              component: {
                Column: {
                  children: {
                    explicitList: [
                      'heading',
                      'section1',
                      'divider-h',
                      'section2',
                      'vertical-demo',
                    ],
                  },
                },
              },
            },
            {
              id: 'heading',
              component: {
                Text: {
                  text: { literalString: 'Divider Component' },
                  usageHint: 'h2',
                },
              },
            },
            {
              id: 'section1',
              component: {
                Text: {
                  text: { literalString: 'Content above horizontal divider' },
                  usageHint: 'body',
                },
              },
            },
            {
              id: 'divider-h',
              component: {
                Divider: {
                  axis: 'horizontal',
                },
              },
            },
            {
              id: 'section2',
              component: {
                Text: {
                  text: { literalString: 'Content below horizontal divider' },
                  usageHint: 'body',
                },
              },
            },
            {
              id: 'vertical-demo',
              component: {
                Row: {
                  children: {
                    explicitList: ['left-text', 'divider-v', 'right-text'],
                  },
                  alignment: 'stretch',
                },
              },
            },
            {
              id: 'left-text',
              component: {
                Text: {
                  text: { literalString: 'Left' },
                  usageHint: 'body',
                },
              },
            },
            {
              id: 'divider-v',
              component: {
                Divider: {
                  axis: 'vertical',
                },
              },
            },
            {
              id: 'right-text',
              component: {
                Text: {
                  text: { literalString: 'Right' },
                  usageHint: 'body',
                },
              },
            },
          ],
        },
      },
      {
        beginRendering: {
          surfaceId: 'main',
          root: 'root',
        },
      },
    ],
  },
  {
    id: 'list',
    title: 'List',
    description: 'List component with vertical and horizontal directions',
    group: 'Components',
    messages: [
      {
        surfaceUpdate: {
          surfaceId: 'main',
          components: [
            {
              id: 'root',
              component: {
                Column: {
                  children: {
                    explicitList: [
                      'heading',
                      'vertical-label',
                      'vertical-list',
                      'horizontal-label',
                      'horizontal-list',
                    ],
                  },
                },
              },
            },
            {
              id: 'heading',
              component: {
                Text: {
                  text: { literalString: 'List Component' },
                  usageHint: 'h2',
                },
              },
            },
            {
              id: 'vertical-label',
              component: {
                Text: {
                  text: { literalString: 'Vertical List:' },
                  usageHint: 'caption',
                },
              },
            },
            {
              id: 'vertical-list',
              component: {
                List: {
                  children: {
                    explicitList: ['v-item1', 'v-item2', 'v-item3'],
                  },
                  direction: 'vertical',
                  alignment: 'start',
                },
              },
            },
            {
              id: 'v-item1',
              component: {
                Text: {
                  text: { literalString: '• First item' },
                  usageHint: 'body',
                },
              },
            },
            {
              id: 'v-item2',
              component: {
                Text: {
                  text: { literalString: '• Second item' },
                  usageHint: 'body',
                },
              },
            },
            {
              id: 'v-item3',
              component: {
                Text: {
                  text: { literalString: '• Third item' },
                  usageHint: 'body',
                },
              },
            },
            {
              id: 'horizontal-label',
              component: {
                Text: {
                  text: { literalString: 'Horizontal List:' },
                  usageHint: 'caption',
                },
              },
            },
            {
              id: 'horizontal-list',
              component: {
                List: {
                  children: {
                    explicitList: ['h-item1', 'h-item2', 'h-item3'],
                  },
                  direction: 'horizontal',
                  alignment: 'center',
                },
              },
            },
            {
              id: 'h-item1',
              component: {
                Card: {
                  child: 'h-item1-text',
                },
              },
            },
            {
              id: 'h-item1-text',
              component: {
                Text: {
                  text: { literalString: 'Card 1' },
                  usageHint: 'body',
                },
              },
            },
            {
              id: 'h-item2',
              component: {
                Card: {
                  child: 'h-item2-text',
                },
              },
            },
            {
              id: 'h-item2-text',
              component: {
                Text: {
                  text: { literalString: 'Card 2' },
                  usageHint: 'body',
                },
              },
            },
            {
              id: 'h-item3',
              component: {
                Card: {
                  child: 'h-item3-text',
                },
              },
            },
            {
              id: 'h-item3-text',
              component: {
                Text: {
                  text: { literalString: 'Card 3' },
                  usageHint: 'body',
                },
              },
            },
          ],
        },
      },
      {
        beginRendering: {
          surfaceId: 'main',
          root: 'root',
        },
      },
    ],
  },
  {
    id: 'tabs',
    title: 'Tabs',
    description: 'Tabs component for tabbed navigation',
    group: 'Components',
    messages: [
      {
        surfaceUpdate: {
          surfaceId: 'main',
          components: [
            {
              id: 'root',
              component: {
                Column: {
                  children: {
                    explicitList: ['heading', 'description', 'tabs'],
                  },
                },
              },
            },
            {
              id: 'heading',
              component: {
                Text: {
                  text: { literalString: 'Tabs Component' },
                  usageHint: 'h2',
                },
              },
            },
            {
              id: 'description',
              component: {
                Text: {
                  text: {
                    literalString:
                      'Navigate between different content sections.',
                  },
                  usageHint: 'body',
                },
              },
            },
            {
              id: 'tabs',
              component: {
                Tabs: {
                  tabItems: [
                    {
                      title: { literalString: 'Overview' },
                      child: 'tab1-content',
                    },
                    {
                      title: { literalString: 'Details' },
                      child: 'tab2-content',
                    },
                    {
                      title: { literalString: 'Settings' },
                      child: 'tab3-content',
                    },
                  ],
                },
              },
            },
            {
              id: 'tab1-content',
              component: {
                Card: {
                  child: 'tab1-text',
                },
              },
            },
            {
              id: 'tab1-text',
              component: {
                Text: {
                  text: {
                    literalString:
                      'This is the Overview tab content. It provides a high-level summary.',
                  },
                  usageHint: 'body',
                },
              },
            },
            {
              id: 'tab2-content',
              component: {
                Card: {
                  child: 'tab2-text',
                },
              },
            },
            {
              id: 'tab2-text',
              component: {
                Text: {
                  text: {
                    literalString:
                      'This is the Details tab content. It shows more detailed information.',
                  },
                  usageHint: 'body',
                },
              },
            },
            {
              id: 'tab3-content',
              component: {
                Card: {
                  child: 'tab3-text',
                },
              },
            },
            {
              id: 'tab3-text',
              component: {
                Text: {
                  text: {
                    literalString:
                      'This is the Settings tab content. Configure your preferences here.',
                  },
                  usageHint: 'body',
                },
              },
            },
          ],
        },
      },
      {
        beginRendering: {
          surfaceId: 'main',
          root: 'root',
        },
      },
    ],
  },
  {
    id: 'modal',
    title: 'Modal',
    description: 'Modal component for dialog overlays',
    group: 'Components',
    messages: [
      {
        surfaceUpdate: {
          surfaceId: 'main',
          components: [
            {
              id: 'root',
              component: {
                Column: {
                  children: {
                    explicitList: ['heading', 'description', 'modal'],
                  },
                },
              },
            },
            {
              id: 'heading',
              component: {
                Text: {
                  text: { literalString: 'Modal Component' },
                  usageHint: 'h2',
                },
              },
            },
            {
              id: 'description',
              component: {
                Text: {
                  text: {
                    literalString:
                      'Click the button below to open a modal dialog.',
                  },
                  usageHint: 'body',
                },
              },
            },
            {
              id: 'modal',
              component: {
                Modal: {
                  entryPointChild: 'modal-trigger',
                  contentChild: 'modal-content',
                },
              },
            },
            {
              id: 'modal-trigger',
              component: {
                Button: {
                  child: 'modal-trigger-text',
                  primary: true,
                },
              },
            },
            {
              id: 'modal-trigger-text',
              component: {
                Text: {
                  text: { literalString: 'Open Modal' },
                },
              },
            },
            {
              id: 'modal-content',
              component: {
                Column: {
                  children: {
                    explicitList: ['modal-title', 'modal-body'],
                  },
                },
              },
            },
            {
              id: 'modal-title',
              component: {
                Text: {
                  text: { literalString: 'Modal Title' },
                  usageHint: 'h3',
                },
              },
            },
            {
              id: 'modal-body',
              component: {
                Text: {
                  text: {
                    literalString:
                      'This is the modal content. You can put any components here.',
                  },
                  usageHint: 'body',
                },
              },
            },
          ],
        },
      },
      {
        beginRendering: {
          surfaceId: 'main',
          root: 'root',
        },
      },
    ],
  },
  {
    id: 'datetime-input',
    title: 'DateTime Input',
    description: 'DateTimeInput component for date and time selection',
    group: 'Components',
    messages: [
      {
        surfaceUpdate: {
          surfaceId: 'main',
          components: [
            {
              id: 'root',
              component: {
                Column: {
                  children: {
                    explicitList: [
                      'heading',
                      'description',
                      'date-only-label',
                      'date-only',
                      'time-only-label',
                      'time-only',
                      'datetime-label',
                      'datetime',
                    ],
                  },
                },
              },
            },
            {
              id: 'heading',
              component: {
                Text: {
                  text: { literalString: 'DateTime Input Component' },
                  usageHint: 'h2',
                },
              },
            },
            {
              id: 'description',
              component: {
                Text: {
                  text: {
                    literalString:
                      'Select dates and times with different configurations.',
                  },
                  usageHint: 'body',
                },
              },
            },
            {
              id: 'date-only-label',
              component: {
                Text: {
                  text: { literalString: 'Date Only:' },
                  usageHint: 'caption',
                },
              },
            },
            {
              id: 'date-only',
              component: {
                DateTimeInput: {
                  value: { path: 'dateOnly' },
                  enableDate: true,
                  enableTime: false,
                },
              },
            },
            {
              id: 'time-only-label',
              component: {
                Text: {
                  text: { literalString: 'Time Only:' },
                  usageHint: 'caption',
                },
              },
            },
            {
              id: 'time-only',
              component: {
                DateTimeInput: {
                  value: { path: 'timeOnly' },
                  enableDate: false,
                  enableTime: true,
                },
              },
            },
            {
              id: 'datetime-label',
              component: {
                Text: {
                  text: { literalString: 'Date and Time:' },
                  usageHint: 'caption',
                },
              },
            },
            {
              id: 'datetime',
              component: {
                DateTimeInput: {
                  value: { path: 'datetime' },
                  enableDate: true,
                  enableTime: true,
                },
              },
            },
          ],
        },
      },
      {
        dataModelUpdate: {
          surfaceId: 'main',
          contents: [
            { key: 'dateOnly', valueString: '' },
            { key: 'timeOnly', valueString: '' },
            { key: 'datetime', valueString: '' },
          ],
        },
      },
      {
        beginRendering: {
          surfaceId: 'main',
          root: 'root',
        },
      },
    ],
  },
  {
    id: 'multiple-choice',
    title: 'Multiple Choice',
    description: 'MultipleChoice component for selection from options',
    group: 'Components',
    messages: [
      {
        surfaceUpdate: {
          surfaceId: 'main',
          components: [
            {
              id: 'root',
              component: {
                Column: {
                  children: {
                    explicitList: [
                      'heading',
                      'description',
                      'single-label',
                      'single-select',
                      'multi-label',
                      'multi-select',
                    ],
                  },
                },
              },
            },
            {
              id: 'heading',
              component: {
                Text: {
                  text: { literalString: 'Multiple Choice Component' },
                  usageHint: 'h2',
                },
              },
            },
            {
              id: 'description',
              component: {
                Text: {
                  text: {
                    literalString:
                      'Select one or multiple options from a list.',
                  },
                  usageHint: 'body',
                },
              },
            },
            {
              id: 'single-label',
              component: {
                Text: {
                  text: { literalString: 'Single Selection:' },
                  usageHint: 'caption',
                },
              },
            },
            {
              id: 'single-select',
              component: {
                MultipleChoice: {
                  selections: { path: 'singleSelection' },
                  options: [
                    { label: { literalString: 'Option A' }, value: 'a' },
                    { label: { literalString: 'Option B' }, value: 'b' },
                    { label: { literalString: 'Option C' }, value: 'c' },
                  ],
                  maxAllowedSelections: 1,
                },
              },
            },
            {
              id: 'multi-label',
              component: {
                Text: {
                  text: { literalString: 'Multiple Selection (max 2):' },
                  usageHint: 'caption',
                },
              },
            },
            {
              id: 'multi-select',
              component: {
                MultipleChoice: {
                  selections: { path: 'multiSelection' },
                  options: [
                    { label: { literalString: 'Red' }, value: 'red' },
                    { label: { literalString: 'Green' }, value: 'green' },
                    { label: { literalString: 'Blue' }, value: 'blue' },
                    { label: { literalString: 'Yellow' }, value: 'yellow' },
                  ],
                  maxAllowedSelections: 2,
                },
              },
            },
          ],
        },
      },
      {
        dataModelUpdate: {
          surfaceId: 'main',
          contents: [
            { key: 'singleSelection', valueString: '' },
            { key: 'multiSelection', valueString: '' },
          ],
        },
      },
      {
        beginRendering: {
          surfaceId: 'main',
          root: 'root',
        },
      },
    ],
  },
  {
    id: 'slider',
    title: 'Slider',
    description: 'Slider component for range value selection',
    group: 'Components',
    messages: [
      {
        surfaceUpdate: {
          surfaceId: 'main',
          components: [
            {
              id: 'root',
              component: {
                Column: {
                  children: {
                    explicitList: [
                      'heading',
                      'description',
                      'volume-label',
                      'volume-slider',
                      'volume-value',
                      'progress-label',
                      'progress-slider',
                      'progress-value',
                    ],
                  },
                },
              },
            },
            {
              id: 'heading',
              component: {
                Text: {
                  text: { literalString: 'Slider Component' },
                  usageHint: 'h2',
                },
              },
            },
            {
              id: 'description',
              component: {
                Text: {
                  text: {
                    literalString:
                      'Select values within a range using sliders.',
                  },
                  usageHint: 'body',
                },
              },
            },
            {
              id: 'volume-label',
              component: {
                Text: {
                  text: { literalString: 'Volume (0-100):' },
                  usageHint: 'caption',
                },
              },
            },
            {
              id: 'volume-slider',
              component: {
                Slider: {
                  value: { path: 'volume' },
                  minValue: 0,
                  maxValue: 100,
                },
              },
            },
            {
              id: 'volume-value',
              component: {
                Text: {
                  text: { path: 'volume' },
                  usageHint: 'body',
                },
              },
            },
            {
              id: 'progress-label',
              component: {
                Text: {
                  text: { literalString: 'Progress (0-10):' },
                  usageHint: 'caption',
                },
              },
            },
            {
              id: 'progress-slider',
              component: {
                Slider: {
                  value: { path: 'progress' },
                  minValue: 0,
                  maxValue: 10,
                },
              },
            },
            {
              id: 'progress-value',
              component: {
                Text: {
                  text: { path: 'progress' },
                  usageHint: 'body',
                },
              },
            },
          ],
        },
      },
      {
        dataModelUpdate: {
          surfaceId: 'main',
          contents: [
            { key: 'volume', valueNumber: 50 },
            { key: 'progress', valueNumber: 5 },
          ],
        },
      },
      {
        beginRendering: {
          surfaceId: 'main',
          root: 'root',
        },
      },
    ],
  },
]

export default examples;