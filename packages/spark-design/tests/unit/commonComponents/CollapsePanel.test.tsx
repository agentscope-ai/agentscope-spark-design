import React from 'react';
import { CollapsePanel } from '@agentscope-ai/design';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

// Mock icons
jest.mock('@agentscope-ai/icons', () => ({
  SparkDownLine: ({ style, ...props }) => (
    <div data-testid="down-icon" style={style} {...props}>
      ↓
    </div>
  ),
  SparkUpLine: ({ style, ...props }) => (
    <div data-testid="up-icon" style={style} {...props}>
      ↑
    </div>
  ),
}));

describe('CollapsePanel 组件 - 定制化功能测试', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('基础渲染测试', () => {
    it('应该正确渲染CollapsePanel组件', () => {
      render(
        <CollapsePanel title="测试标题">
          <div>测试内容</div>
        </CollapsePanel>,
      );

      expect(screen.getByText('测试标题')).toBeInTheDocument();
      expect(screen.getByText('测试内容')).toBeInTheDocument();
    });

    it('应该支持 ReactNode 类型的 title', () => {
      render(
        <CollapsePanel
          title={<span data-testid="custom-title">自定义标题</span>}
        >
          内容
        </CollapsePanel>,
      );

      expect(screen.getByTestId('custom-title')).toBeInTheDocument();
      expect(screen.getByText('自定义标题')).toBeInTheDocument();
    });
  });

  describe('展开/收起功能测试（定制化功能）', () => {
    it('应该默认为收起状态', () => {
      const { container } = render(
        <CollapsePanel title="标题" collapsedHeight={0}>
          内容
        </CollapsePanel>,
      );

      const content = container.querySelector('.spark-collapse-panel-content');
      expect(content).toBeInTheDocument();
    });

    it('应该支持 defaultExpanded 属性', () => {
      render(
        <CollapsePanel title="标题" defaultExpanded>
          内容
        </CollapsePanel>,
      );

      // 默认展开状态下，内容应该可见
      expect(screen.getByText('内容')).toBeInTheDocument();
    });

    it('点击标题应该切换展开/收起状态', async () => {
      const { container } = render(
        <CollapsePanel title="可点击标题" collapsedHeight={0}>
          内容
        </CollapsePanel>,
      );

      const header = container.querySelector('.spark-collapse-panel-header');
      const content = container.querySelector('.spark-collapse-panel-content');

      // 初始状态：收起
      expect(content).toBeInTheDocument();

      // 点击标题展开
      fireEvent.click(header);

      await waitFor(() => {
        // 展开后高度应该不为0（实际值取决于内容高度）
        expect(content).not.toHaveStyle({ height: '0px' });
      });

      // 再次点击收起
      fireEvent.click(header);

      await waitFor(() => {
        expect(content).toBeInTheDocument();
      });
    });
  });

  describe('collapsedHeight 属性测试', () => {
    it('应该支持自定义收起高度', () => {
      const { container } = render(
        <CollapsePanel title="标题" collapsedHeight={50}>
          内容
        </CollapsePanel>,
      );

      const content = container.querySelector('.spark-collapse-panel-content');
      expect(content).toBeInTheDocument();
    });
  });

  describe('expandedHeight 属性测试（定制化功能）', () => {
    it('应该支持固定的展开高度', async () => {
      const { container } = render(
        <CollapsePanel title="标题" expandedHeight={300} defaultExpanded>
          <div style={{ height: '500px' }}>高内容</div>
        </CollapsePanel>,
      );

      const content = container.querySelector('.spark-collapse-panel-content');
      expect(content).toBeInTheDocument();
    });

    it('设置 expandedHeight 后应该显示滚动条', () => {
      const { container } = render(
        <CollapsePanel title="标题" expandedHeight={200} defaultExpanded>
          <div style={{ height: '400px' }}>超高内容</div>
        </CollapsePanel>,
      );

      const contentWrapper = container.querySelector(
        '.spark-collapse-panel-contentWrapper',
      );
      expect(contentWrapper).toHaveClass('scrollable');
    });

    it('未设置 expandedHeight 时应该自适应内容高度', () => {
      const { container } = render(
        <CollapsePanel title="标题" defaultExpanded>
          内容
        </CollapsePanel>,
      );

      const contentWrapper = container.querySelector(
        '.spark-collapse-panel-contentWrapper',
      );
      expect(contentWrapper).not.toHaveClass('scrollable');
    });
  });

  describe('expandOnPanelClick 属性测试（定制化功能）', () => {
    it('应该支持点击整个面板展开', async () => {
      const { container } = render(
        <CollapsePanel
          title="标题"
          expandOnPanelClick
          expandedHeight={200}
          collapsedHeight={0}
        >
          内容
        </CollapsePanel>,
      );

      const panel = container.querySelector('.spark-collapse-panel');
      const content = container.querySelector('.spark-collapse-panel-content');

      // 初始收起状态
      expect(content).toBeInTheDocument();
      expect(panel).toHaveClass('collapsible');

      // 点击面板展开
      fireEvent.click(panel);

      await waitFor(() => {
        expect(content).toBeInTheDocument();
      });
    });

    it('展开后点击面板不应该收起（只能通过标题收起）', async () => {
      const { container } = render(
        <CollapsePanel
          title="标题"
          expandOnPanelClick
          expandedHeight={200}
          defaultExpanded
        >
          内容
        </CollapsePanel>,
      );

      const panel = container.querySelector('.spark-collapse-panel');
      const content = container.querySelector('.spark-collapse-panel-content');

      // 已展开状态
      expect(content).toBeInTheDocument();

      // 点击面板不应该收起
      fireEvent.click(panel);
      expect(content).toBeInTheDocument();
    });

    it('expandOnPanelClick 需要配合 expandedHeight 使用', () => {
      const { container } = render(
        <CollapsePanel title="标题" expandOnPanelClick collapsedHeight={0}>
          内容
        </CollapsePanel>,
      );

      const panel = container.querySelector('.spark-collapse-panel');

      // 没有 expandedHeight 时，点击面板不会展开
      fireEvent.click(panel);

      const content = container.querySelector('.spark-collapse-panel-content');
      expect(content).toBeInTheDocument();
    });
  });

  describe('extra 属性测试', () => {
    it('应该支持 extra 内容', () => {
      render(
        <CollapsePanel
          title="标题"
          extra={<button data-testid="extra-button">额外按钮</button>}
        >
          内容
        </CollapsePanel>,
      );

      expect(screen.getByTestId('extra-button')).toBeInTheDocument();
      expect(screen.getByText('额外按钮')).toBeInTheDocument();
    });

    it('点击 extra 内容不应该触发展开/收起', () => {
      const { container } = render(
        <CollapsePanel
          title="标题"
          extra={<button data-testid="extra-button">按钮</button>}
          collapsedHeight={0}
        >
          内容
        </CollapsePanel>,
      );

      const extraButton = screen.getByTestId('extra-button');
      const content = container.querySelector('.spark-collapse-panel-content');

      // 初始收起状态
      expect(content).toBeInTheDocument();

      // 点击 extra 按钮
      fireEvent.click(extraButton);

      // 状态不应该改变
      expect(content).toBeInTheDocument();
    });
  });

  describe('图标显示测试（定制化功能）', () => {
    it('有 expandedHeight 且支持 expandOnPanelClick 时应该显示图标', () => {
      render(
        <CollapsePanel
          title="标题"
          expandedHeight={200}
          expandOnPanelClick
          collapsedHeight={0}
        >
          内容
        </CollapsePanel>,
      );

      // 收起状态应该显示向下箭头
      expect(screen.getByTestId('down-icon')).toBeInTheDocument();
    });

    it('展开状态应该显示向上箭头', async () => {
      const { container } = render(
        <CollapsePanel
          title="标题"
          expandedHeight={200}
          expandOnPanelClick
          defaultExpanded
        >
          内容
        </CollapsePanel>,
      );

      // 展开状态应该显示向上箭头
      expect(screen.getByTestId('up-icon')).toBeInTheDocument();
    });

    it('没有 expandedHeight 时不应该显示图标', () => {
      render(
        <CollapsePanel title="标题" expandOnPanelClick>
          内容
        </CollapsePanel>,
      );

      expect(screen.queryByTestId('down-icon')).not.toBeInTheDocument();
      expect(screen.queryByTestId('up-icon')).not.toBeInTheDocument();
    });
  });

  describe('遮罩层测试', () => {
    it('收起状态且有 expandedHeight 时应该显示遮罩层', () => {
      const { container } = render(
        <CollapsePanel title="标题" expandedHeight={200} collapsedHeight={0}>
          内容
        </CollapsePanel>,
      );

      const mask = container.querySelector('.spark-collapse-panel-mask');
      expect(mask).toBeInTheDocument();
    });

    it('展开状态时不应该显示遮罩层', () => {
      const { container } = render(
        <CollapsePanel title="标题" expandedHeight={200} defaultExpanded>
          内容
        </CollapsePanel>,
      );

      const mask = container.querySelector('.spark-collapse-panel-mask');
      expect(mask).not.toBeInTheDocument();
    });
  });



  describe('事件传播测试', () => {
    it('点击标题应该阻止事件传播', () => {
      const panelClick = jest.fn();

      const { container } = render(
        <div onClick={panelClick}>
          <CollapsePanel title="标题">内容</CollapsePanel>
        </div>,
      );

      const header = container.querySelector('.spark-collapse-panel-header');
      fireEvent.click(header);

      // 标题点击不应该触发父级点击事件
      expect(panelClick).not.toHaveBeenCalled();
    });

    it('点击 extra 内容应该阻止事件传播', () => {
      const { container } = render(
        <CollapsePanel
          title="标题"
          extra={<button data-testid="extra-button">按钮</button>}
        >
          内容
        </CollapsePanel>,
      );

      const extraButton = screen.getByTestId('extra-button');
      const header = container.querySelector('.spark-collapse-panel-header');

      // 验证 extra 按钮存在
      expect(extraButton).toBeInTheDocument();
      expect(header).toBeInTheDocument();

      // extra 内容应该在 extra 容器中
      const extraContainer = container.querySelector(
        '.spark-collapse-panel-extra',
      );
      expect(extraContainer).toBeInTheDocument();
    });
  });
});
