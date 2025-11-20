---
order: 2
title: CustomCard
group:
  title: Advanced Usage
  order: 4
---

# CustomCard

In real LLM conversation application development, besides basic text-type (Markdown) answers, there are many rich interactive response effects, such as:

<div style="display: flex;gap: 32px">
  <div>
    <img src="https://gw.alicdn.com/imgextra/i2/O1CN01ylWEJy1vCnk1z86IB_!!6000000006137-2-tps-3200-1800.png"></img>
    <p style="font-size: 14px;">Even the most natural and smooth conversations cannot eliminate the helplessness and inefficiency when converging user needs through repeated questioning : (</p>
  </div>
  <div>
    <img src="https://gw.alicdn.com/imgextra/i3/O1CN01e76Zm71WmBwzb5P4B_!!6000000002830-2-tps-3200-1800.png"></img>
    <p style="font-size: 14px;">Provide more powerful interactive support at necessary moments in conversations (form input, secondary confirmation, feature guidance...), leveraging the advantages of GUI interaction in structured and efficient information exchange</p>
  </div>
</div>

We can use CustomCard to implement similar requirements.

---

## Development Guide

### Create a CustomCard

CustomCard is simply a React Component

```tsx | pure
import React, { useState } from 'react';
import { Button, Card, Select } from '@agentscope-ai/design';
import { Flex } from 'antd';

function SelectPageCard(props: { data: { pages: string[] } }) {
  const [page, setPage] = useState<string>(props.data.pages[0]);
  return (
    <Card title="Please select a page">
      <Flex gap={8}>
        <Select
          value={page}
          onChange={setPage}
          options={props.data.pages.map((page) => ({
            label: page,
            value: page,
          }))}
        />
        <Button>OK</Button>
      </Flex>
    </Card>
  );
}

export default SelectPageCard;
```

<div height="32px" ></div>

```tsx | pure
// You can also implement more cards
function PagePVChartCard() {...};

export default PagePVChartCard;
```

### Register CustomCard

```tsx | pure
import { Bubble, CustomCardsProvider } from '@agentscope-ai/chat';
import SelectPageCard from './SelectPageCard';
import PagePVChartCard from './PagePVChartCard';

export default () => (
  <CustomCardsProvider
    cardConfig={{
      SelectPageCard: SelectPageCard,
      PagePVChartCard: PagePVChartCard,
    }}
  ></CustomCardsProvider>
);
```

### Construct Data and Render

```tsx | pure
import { Bubble, CustomCardsProvider } from '@agentscope-ai/chat';
import SelectPageCard from './SelectPageCard';
import PagePVChartCard from './PagePVChartCard';

export default function () {
  return (
    <CustomCardsProvider
      cardConfig={{
        SelectPageCard: SelectPageCard,
        PagePVChartCard: PagePVChartCard,
      }}
    >
      <Bubble.List
        items={[
          {
            id: '0',
            role: 'user',
            content: 'I want to View page PV data',
          },
          {
            id: '1',
            role: 'assistant',
            cards: [
              {
                code: 'SelectPageCard',
                data: {
                  pages: [
                    'https://foo.com/page1',
                    'https://foo.com/page2',
                    'https://foo.com/page3',
                  ],
                },
              },
            ],
          },
          {
            id: '2',
            role: 'assistant',
            cards: [
              {
                code: 'PagePVChartCard',
                data: {
                  page: 'https://foo.com/page1',
                },
              },
            ],
          },
        ]}
      ></Bubble.List>
    </CustomCardsProvider>
  );
}
```

<code src="./CustomCard/index.tsx" compact height="695"></code>

### Using CustomCard in ChatAnywhere

<code src="./CustomCard/chatanywhere.tsx" iframe="695"></code>
