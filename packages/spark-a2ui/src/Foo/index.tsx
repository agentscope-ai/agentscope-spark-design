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
                    "section1",
                    "divider-h",
                    "section2",
                    "vertical-demo"
                  ]
                }
              }
            }
          },
          {
            "id": "heading",
            "component": {
              "Text": {
                "text": {
                  "literalString": "Divider Component"
                },
                "usageHint": "h2"
              }
            }
          },
          {
            "id": "section1",
            "component": {
              "Text": {
                "text": {
                  "literalString": "Content above horizontal divider"
                },
                "usageHint": "body"
              }
            }
          },
          {
            "id": "divider-h",
            "component": {
              "Divider": {
                "axis": "horizontal"
              }
            }
          },
          {
            "id": "section2",
            "component": {
              "Text": {
                "text": {
                  "literalString": "Content below horizontal divider"
                },
                "usageHint": "body"
              }
            }
          },
          {
            "id": "vertical-demo",
            "component": {
              "Row": {
                "children": {
                  "explicitList": [
                    "left-text",
                    "divider-v",
                    "right-text"
                  ]
                },
                "alignment": "stretch"
              }
            }
          },
          {
            "id": "left-text",
            "component": {
              "Text": {
                "text": {
                  "literalString": "Left"
                },
                "usageHint": "body"
              }
            }
          },
          {
            "id": "divider-v",
            "component": {
              "Divider": {
                "axis": "vertical"
              }
            }
          },
          {
            "id": "right-text",
            "component": {
              "Text": {
                "text": {
                  "literalString": "Right"
                },
                "usageHint": "body"
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