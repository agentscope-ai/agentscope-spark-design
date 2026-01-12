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
                    "form"
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
                  "literalString": "Form Inputs"
                },
                "usageHint": "h2"
              }
            }
          },
          {
            "id": "form",
            "component": {
              "Column": {
                "children": {
                  "explicitList": [
                    "name-field",
                    "email-field",
                    "checkbox"
                  ]
                }
              }
            }
          },
          {
            "id": "name-field",
            "component": {
              "TextField": {
                "label": {
                  "literalString": "Name"
                },
                "text": {
                  "path": "form.name"
                }
              }
            }
          },
          {
            "id": "email-field",
            "component": {
              "TextField": {
                "label": {
                  "literalString": "Email"
                },
                "text": {
                  "path": "form.email"
                }
              }
            }
          },
          {
            "id": "checkbox",
            "component": {
              "CheckBox": {
                "label": {
                  "literalString": "Subscribe to newsletter"
                },
                "value": {
                  "path": "form.subscribe"
                }
              }
            }
          }
        ]
      }
    },
    {
      "dataModelUpdate": {
        "surfaceId": "main",
        "path": "form",
        "contents": [
          {
            "key": "name",
            "valueString": ""
          },
          {
            "key": "email",
            "valueString": ""
          },
          {
            "key": "subscribe",
            "valueBoolean": false
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