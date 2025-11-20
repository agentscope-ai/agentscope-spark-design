import thinkingAnswer from "./thinkingAnswer";
import normalAnswer from "./normalAnswer";
import webDevAnswer from "./webDevAnswer";
import deepResearchAnswer from "./deepResearchAnswer";

export default async function ({ getDemoContext, currentQA, ref }) {
  const context = getDemoContext();
  if (context.mode === 'WebDev') return await webDevAnswer(currentQA, ref);
  if (context.mode === 'DeepResearch') return await deepResearchAnswer(currentQA, ref);
  if (context.enableThinking) return await thinkingAnswer(currentQA, ref);
  return await normalAnswer(currentQA, ref);
}