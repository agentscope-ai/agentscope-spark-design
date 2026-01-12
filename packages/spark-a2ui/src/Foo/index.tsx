import React from 'react';

import {
  A2UIProvider,
  A2UIRenderer,
  type A2UIMessage,
  type A2UIAction,
} from '@agentscope-ai/spark-a2ui'

function App() {
  const messages: A2UIMessage[] = [
    {
      "surfaceUpdate": {
        "surfaceId": "main",
        "components": [
          {
            "id": "root",
            "component": {
              "Column": {
                "children": {
                  "explicitList": [
                    "heading",
                    "text",
                    "button"
                  ]
                },
                "alignment": "start"
              }
            }
          },
          {
            "id": "heading",
            "component": {
              "Text": {
                "text": {
                  "literalString": "Hello, A2UI!"
                },
                "usageHint": "h1"
              }
            }
          },
          {
            "id": "text",
            "component": {
              "Text": {
                "text": {
                  "literalString": "Welcome to the A2UI React Renderer Playground. Edit the JSON on the left to see changes in real-time."
                },
                "usageHint": "body"
              }
            }
          },
          {
            "id": "button",
            "component": {
              "Button": {
                "child": "button-text",
                "primary": true,
                "action": {
                  "name": "hello-click"
                }
              }
            }
          },
          {
            "id": "button-text",
            "component": {
              "Text": {
                "text": {
                  "literalString": "Get Started"
                }
              }
            }
          }
        ]
      }
    },
    {
      "beginRendering": {
        "surfaceId": "main",
        "root": "root"
      }
    }
  ]

  const handleAction = (action: A2UIAction) => {
    console.log('Action received:', action)
  }

  return (
    <A2UIProvider messages={messages}>
      <A2UIRenderer onAction={handleAction} />
    </A2UIProvider>
  )
}


export default App;