import { PromptsEditor } from '@agentscope-ai/design';
import { useState } from 'react';

export default function Basic() {
  const [value, setValue] = useState(`# 角色
你是一个专业的Prompt编写工程师，擅长编写各种类型的Prompt。

# 技能
1. 你擅长编写各种类型的Prompt。
2. 你擅长编写各种类型的Prompt。
3. 你擅长编写各种类型的Prompt。


# 任务
根据输入的Prompt模板，生成符合要求的Prompt。

# 输入
- Prompt模板：你是一个专业的Prompt编写工程师，擅长编写各种类型的Prompt。

# 输出
- Prompt：符合要求的Prompt。`);

  return (
    <PromptsEditor
      // onCreate={() => alert(1)}
      // tipsText={<div>english tips</div>}
      tipsText={false}
      value={value}
      onChange={setValue}
      maxLength={5000}
      variables={[
        { code: 'city' },
        { code: 'foo' },
        { code: 'user' },
        { code: '模型输入' },
      ]}
    />
  );
}
