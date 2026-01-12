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
                    "vertical-label",
                    "vertical-list",
                    "horizontal-label",
                    "horizontal-list"
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
                  "literalString": "List Component"
                },
                "usageHint": "h2"
              }
            }
          },
          {
            "id": "vertical-label",
            "component": {
              "Text": {
                "text": {
                  "literalString": "Vertical List:"
                },
                "usageHint": "caption"
              }
            }
          },
          {
            "id": "vertical-list",
            "component": {
              "List": {
                "children": {
                  "explicitList": [
                    "v-item1",
                    "v-item2",
                    "v-item3"
                  ]
                },
                "direction": "vertical",
                "alignment": "start"
              }
            }
          },
          {
            "id": "v-item1",
            "component": {
              "Text": {
                "text": {
                  "literalString": "• First item"
                },
                "usageHint": "body"
              }
            }
          },
          {
            "id": "v-item2",
            "component": {
              "Text": {
                "text": {
                  "literalString": "• Second item"
                },
                "usageHint": "body"
              }
            }
          },
          {
            "id": "v-item3",
            "component": {
              "Text": {
                "text": {
                  "literalString": "• Third item"
                },
                "usageHint": "body"
              }
            }
          },
          {
            "id": "horizontal-label",
            "component": {
              "Text": {
                "text": {
                  "literalString": "Horizontal List:"
                },
                "usageHint": "caption"
              }
            }
          },
          {
            "id": "horizontal-list",
            "component": {
              "List": {
                "children": {
                  "explicitList": [
                    "h-item1",
                    "h-item2",
                    "h-item3"
                  ]
                },
                "direction": "horizontal",
                "alignment": "center"
              }
            }
          },
          {
            "id": "h-item1",
            "component": {
              "Card": {
                "child": "h-item1-text"
              }
            }
          },
          {
            "id": "h-item1-text",
            "component": {
              "Text": {
                "text": {
                  "literalString": "Card 1"
                },
                "usageHint": "body"
              }
            }
          },
          {
            "id": "h-item2",
            "component": {
              "Card": {
                "child": "h-item2-text"
              }
            }
          },
          {
            "id": "h-item2-text",
            "component": {
              "Text": {
                "text": {
                  "literalString": "Card 2"
                },
                "usageHint": "body"
              }
            }
          },
          {
            "id": "h-item3",
            "component": {
              "Card": {
                "child": "h-item3-text"
              }
            }
          },
          {
            "id": "h-item3-text",
            "component": {
              "Text": {
                "text": {
                  "literalString": "Card 3"
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