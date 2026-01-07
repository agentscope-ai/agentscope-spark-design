import { useEffect, useRef } from 'react';

// 工具函数：合并 className（如果不需要可以删除，直接用 className）
function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

/**
 * 流体背景动画组件
 * @param {string} width - 容器宽度，默认 '400px'
 * @param {string} height - 容器高度，默认 '400px'
 * @param {number} speed - 动画速度倍数，默认 1.0
 * @param {string} backgroundColor - 主背景颜色，默认 '#b6a9f8'
 * @param {string[]} colors - 圆形元素颜色数组（4个颜色），默认 ['#c979ee', '#ef788c', '#eb7fc6', '#6d67c8']
 * @param {string[]} ringColors - 环形渐变颜色数组，默认 ['white', 'blue', 'magenta', 'violet', 'lightyellow']
 * @param {string} className - 自定义 CSS 类名
 */
const Spin = ({
  speed = 1.0,
  backgroundColor = '#b6a9f8',
  colors = ['#c979ee', '#ef788c', '#eb7fc6', '#6d67c8'],
  ringColors = ['white', 'blue', 'magenta', 'violet', 'lightyellow'],
  className = ''
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // 注册 CSS @property（如果浏览器支持）
    if (CSS && CSS.registerProperty) {
      try {
        CSS.registerProperty({
          name: '--a',
          syntax: '<angle>',
          inherits: true,
          initialValue: '0deg',
        });
        CSS.registerProperty({
          name: '--l',
          syntax: '<number>',
          inherits: true,
          initialValue: '0',
        });
        CSS.registerProperty({
          name: '--x',
          syntax: '<length>',
          inherits: false,
          initialValue: '0',
        });
        CSS.registerProperty({
          name: '--y',
          syntax: '<length>',
          inherits: false,
          initialValue: '0',
        });
        CSS.registerProperty({
          name: '--o',
          syntax: '<number>',
          inherits: false,
          initialValue: '0',
        });
        CSS.registerProperty({
          name: '--value',
          syntax: '<angle>',
          inherits: true,
          initialValue: '0deg',
        });
        CSS.registerProperty({
          name: '--width-ratio',
          syntax: '<number>',
          inherits: true,
          initialValue: '0',
        });
        CSS.registerProperty({
          name: '--scale',
          syntax: '<number>',
          inherits: true,
          initialValue: '0',
        });
      } catch {
        // 浏览器不支持或已注册，忽略
      }
    }
  }, []);

  // 使用 ResizeObserver 监听容器尺寸变化，动态更新 CSS 变量
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      const size = Math.min(rect.width, rect.height);
      container.style.setProperty('--actual-size', `${size}px`);
    };

    // 初始设置
    updateSize();

    // 使用 ResizeObserver 监听尺寸变化
    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes ai {
          from {
            --a: 360deg;
            --l: 0.35;
            --o: 1;
          }
          30% {
            --l: 1.5;
          }
          70% {
            --o: 0.4;
            --l: 0.05;
          }
          98% {
            --o: 0.7;
          }
          to {
            --a: 0deg;
            --l: 0.35;
            --o: 1;
          }
        }

        @keyframes ring {
          from {
            --value: var(--start);
            --scale: 1;
          }
          50% {
            --scale: 1.2;
            --width-ratio: 1.5;
          }
          70% {
            --scale: 1;
            --value: calc(var(--start) + 180deg);
            --width-ratio: 1;
          }
          80% {
            --scale: 1.2;
            --width-ratio: 1.5;
          }
          to {
            --value: calc(var(--start) + 360deg);
            --scale: 1;
            --width-ratio: 1;
          }
        }

        .fluid-background-container {
          
          --s: var(--actual-size);
          --p: calc(var(--s) / 4);
          --radius: calc(var(--s) * 0.25);
          --count: 4;
          --width: calc(var(--s) * 0.025);
          --duration: calc(8s / ${speed});
          --ai-duration: calc(5.5s / ${speed});
          
          --bg-color: color-mix(in srgb, #7b7bf4, transparent 90%);
          position: absolute;
          inset: 0;
          background: radial-gradient(
              60% 75% at center,
              var(--bg-color) 50%,
              transparent 50%
            ),
            radial-gradient(75% 60% at center, var(--bg-color) 50%, transparent 50%);
          overflow: hidden;
        }

        .fluid-background-container .fluid-inner {
          overflow: hidden;
          background: ${backgroundColor};
          width: 100%;
          height: 100%;
          position: relative;
          display: grid;
          place-items: center;
        }

        .fluid-background-container .c {
          opacity: 0.9;
          position: absolute;
          width: calc(var(--s) * 0.4);
          aspect-ratio: 1;
          border-radius: 50%;
          --offset-per-item: calc(360deg / var(--count));
          --current-angle-offset: calc(var(--offset-per-item) * var(--i) + var(--a));
          translate: calc(
              cos(var(--current-angle-offset)) * var(--radius) + var(--x, 0)
            )
            calc(sin(var(--current-angle-offset)) * var(--radius) * -1);
          scale: calc(0.6 + var(--l));
          animation: ai var(--ai-duration) cubic-bezier(0.45, -0.35, 0.16, 1.5) infinite;
          transition: opacity 0.3s linear;
          opacity: var(--o, 1);
        }

        .fluid-background-container .c1 {
          background: radial-gradient(50% 50% at center, ${colors[0] || '#c979ee'}, color-mix(in srgb, ${colors[0] || '#c979ee'}, transparent 30%));
          --x: calc(var(--s) * 0.04);
          width: calc(var(--s) * 0.6);
          animation-timing-function: cubic-bezier(0.12, 0.32, 0.68, 0.24);
        }

        .fluid-background-container .c2 {
          background: radial-gradient(50% 50% at center, ${colors[1] || '#ef788c'}, color-mix(in srgb, ${colors[1] || '#ef788c'}, white 40%));
          width: calc(var(--s) * 0.55);
        }

        .fluid-background-container .c3 {
          background: radial-gradient(50% 50% at center, ${colors[2] || '#eb7fc6'}, transparent);
          width: calc(var(--s) * 0.2);
          opacity: 0.6;
          --x: calc(var(--s) * -0.04);
        }

        .fluid-background-container .c4 {
          background: ${colors[3] || '#6d67c8'};
          animation-timing-function: cubic-bezier(0.39, -0.03, 0.75, 0.47);
        }

        .fluid-background-container .glass {
          overflow: hidden;
          position: absolute;
          border-radius: 8px;
          inset: 0;
          backdrop-filter: blur(calc(var(--s) * 0.12));
          box-shadow: 0 0 calc(var(--s) * 0.2) color-mix(in srgb, black, transparent 70%);
        }

        .fluid-background-container .glass::after {
          content: "";
          position: absolute;
          inset: 0;
          --c: rgba(255, 255, 255, 0.03);
          --w: 0.0625rem;
          --g: 0.1875rem;
          background: repeating-linear-gradient(
            var(--c),
            var(--c),
            var(--w),
            transparent var(--w),
            transparent calc(var(--w) + var(--g))
          );
        }

        .fluid-background-container .rings {
          aspect-ratio: 1;
          border-radius: 50%;
          position: absolute;
          inset: 0;
          perspective: calc(var(--s) * 2.75);
          opacity: 0.9;
        }

        .fluid-background-container .rings::before,
        .fluid-background-container .rings::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(255, 0, 0, 1);
          border-radius: 50%;
          --width-ratio: 1;
          border: calc(var(--width) * var(--width-ratio)) solid transparent;
          mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          background: linear-gradient(
            ${ringColors.join(', ')}
          ) border-box;
          mask-composite: exclude;
          animation: ring var(--duration) ease-in-out infinite;
          --start: 180deg;
          --value: var(--start);
          --scale: 1;
          transform: rotateY(var(--value)) rotateX(var(--value)) rotateZ(var(--value))
            scale(var(--scale));
        }

        .fluid-background-container .rings::before {
          --start: 180deg;
        }

        .fluid-background-container .rings::after {
          --start: 90deg;
        }
      `}</style>
      <div ref={containerRef} className={cn('fluid-background-container', className)}>
        <div className="fluid-inner">
          <div className="c c4" style={{ '--i': 0 } as React.CSSProperties}></div>
          <div className="c c1" style={{ '--i': 1 } as React.CSSProperties}></div>
          <div className="c c2" style={{ '--i': 2 } as React.CSSProperties}></div>
          <div className="c c3" style={{ '--i': 3 } as React.CSSProperties}></div>
          <div className="rings"></div>
        </div>
        <div className="glass"></div>
      </div>
    </>
  );
};

export default Spin;
