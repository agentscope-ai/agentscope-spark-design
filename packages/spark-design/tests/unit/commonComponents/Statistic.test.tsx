import React from 'react';
import { Statistic } from '@agentscope-ai/design';
import { render } from '@testing-library/react';

// Statistic 组件是 antd Statistic 的简单封装，只添加了样式
// 主要测试组件能否正常渲染，无需测试 antd 的原生功能
describe('Statistic 组件 - 基础功能测试', () => {
  it('应该正确渲染Statistic组件', () => {
    render(<Statistic title="用户数" value={1128} />);

    const statisticElement = document.querySelector('.ant-statistic');
    expect(statisticElement).toBeInTheDocument();
  });

  it('应该支持自定义 className', () => {
    const customClass = 'custom-statistic';
    render(<Statistic className={customClass} title="用户数" value={1128} />);

    const element = document.querySelector('.' + customClass);
    expect(element).toBeInTheDocument();
  });
});
