import { Bubble, CustomCardsProvider } from "@agentscope-ai/chat";
import SelectPageCard from "./SelectPageCard";
import PagePVChartCard from "./PagePVChartCard";

export default function () {
  return <CustomCardsProvider cardConfig={{
    SelectPageCard: SelectPageCard,
    PagePVChartCard: PagePVChartCard,
  }}>
    <Bubble.List
      items={[{
        id: '0',
        role: 'user',
        content: 'I want to View page PV data',
      }, {
        id: '1',
        role: 'assistant',
        cards: [{
          code: 'SelectPageCard',
          data: {
            pages: ['https://foo.com/page1', 'https://foo.com/page2', 'https://foo.com/page3'],
          }
        }],
      }, {
        id: '2',
        role: 'assistant',
        cards: [{
          code: 'PagePVChartCard',
          data: {
            page: 'https://foo.com/page1',
          }
        }]
      }]}
    >
    </Bubble.List>
  </CustomCardsProvider>
}