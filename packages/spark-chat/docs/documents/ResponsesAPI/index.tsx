import OpenAI from 'openai';

const client = new OpenAI({
  dangerouslyAllowBrowser: true,
  baseURL: 'https://ark.cn-beijing.volces.com/api/v3',
});


export default function () {
  return <button onClick={async () => {
    const response = await client.responses.create({
      model: 'doubao-seed-1-6-250615',
      input: '你好呀',
      stream: true,
    });

    for await (const chunk of response) {
      console.log(chunk);
    }

  }}>ResponsesAPI</button>
}