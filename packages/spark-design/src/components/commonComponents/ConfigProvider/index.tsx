import { useIndexStyle } from '@/antd/styles/index.style';
import $i18n from '@/i18n';
import { App, ConfigProvider, ConfigProviderProps, message, theme } from 'antd';
import { ConfigContext, ThemeConfig } from 'antd/es/config-provider/context';
import useTheme from 'antd/es/config-provider/hooks/useTheme';
import classNames from 'classnames';
import { useContext, useLayoutEffect, useMemo, useState } from 'react';
import {
  DEFAULT_SPARK_PREFIX,
  getCommonConfig,
  setCommonConfig,
} from '../../../config';

export type SparkConfigProviderProps = ConfigProviderProps & {
  /**iconfont地址，采用SVG方案，不叫iconfontUrl是为了和BLConfigProvider的iconfontUrl区分开 */
  iconfont?: string;
  /** 用于拼成antd和spark组件的前缀 */
  prefix?: string;
  /** antd组件的class前缀，antd原生的 */
  prefixCls?: string;
  /** 子组件内容 */
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  theme?: ConfigProviderProps['theme'];
};

function SparkGlobalStyle() {
  // 使用统一的全局样式（包含 antd 样式 + 滚动条 + 动画）
  const GlobalStyle = useIndexStyle();

  // 直接渲染，让 CSS-in-JS 库处理去重和性能优化
  return <GlobalStyle />;
}

const empty = {};

function SparkConfigProvider(props: SparkConfigProviderProps) {
  const {
    prefix = '',
    prefixCls = '',
    iconfont = 'https://at.alicdn.com/t/a/font_4807885_xobxpcpwk4i.js',
    children = undefined,
    ...restProps
  } = props;
  const [hasInit, setHasInit] = useState(false);
  const [key, setKey] = useState<string>(props.locale?.locale || 'defaultKey');
  // 更新antd的class prefix
  const { antPrefix } = getCommonConfig();
  const { theme: parentTheme } = useContext(ConfigContext); // 父级ConfigProvider的theme（如有）
  const mergedPrefixCls = useMemo(() => {
    return prefixCls || (prefix ? `${prefix}-ant` : antPrefix);
  }, [prefixCls, prefix]);

  // 融合父ConfigProvider的theme（如有），供给静态方法使用
  const _mergedTheme = useTheme(props.theme || empty, parentTheme || empty, {
    prefixCls: mergedPrefixCls,
  }) as ThemeConfig & { darkMode: boolean };

  // 设计师提供的 antd 主题存在没有完全覆盖的 dark 的颜色，依然还是需要指定 antd 以 darkAlgorithm 进行token 驱动
  const mergedTheme = useMemo(() => {
    const res = {
      ..._mergedTheme,
      algorithm: _mergedTheme.darkMode ? theme.darkAlgorithm : void 0,
    };
    return res;
  }, [_mergedTheme]);

  useLayoutEffect(() => {
    let newCommonConfig: any = {
      antPrefix: mergedPrefixCls, // antd的前缀，用作antd组件的前缀以及css变量的前缀
      configProviderProps: { ...restProps, prefixCls: mergedPrefixCls },
      iconfont,
    };
    // 处理spark组件的前缀
    if (prefix.length) {
      newCommonConfig = {
        ...newCommonConfig,
        sparkPrefix: `${prefix}-${DEFAULT_SPARK_PREFIX}`, // spark组件的前缀
        prefix,
      };
    }
    setCommonConfig({
      ...newCommonConfig,
      isDarkMode: (() => {
        try {
          return (
            (restProps.theme.algorithm || mergedTheme.algorithm) ===
            theme.darkAlgorithm
          );
        } catch (error) {
          return false;
        }
      })(),
    });
    setHasInit(true);
    message.config({
      top: 24,
    });
  }, []);

  useLayoutEffect(() => {
    // 给 message 、modal 、notification 静态方法设置 Provider
    // 注意这里的theme不会集成父ConfigProvider的theme，所以需要手动合并
    ConfigProvider.config({
      // 5.13.0+
      holderRender: (children) => (
        <ConfigProvider
          {...restProps}
          prefixCls={mergedPrefixCls}
          theme={mergedTheme}
          wave={{ disabled: true }}
        >
          {/* 注入覆盖antd的样式 */}
          <App
            className={classNames(`spark`)}
            style={{ ...props.style }}
            key={key}
          >
            {children}
          </App>
        </ConfigProvider>
      ),
    });
  }, [restProps, mergedPrefixCls, hasInit]);

  useLayoutEffect(() => {
    $i18n.updateLocale(props.locale?.locale || 'zh-cn'); // 默认为中文
    setKey(props.locale?.locale || 'defaultKey');
  }, [props.locale]);

  return (
    <ConfigProvider
      {...restProps}
      theme={mergedTheme}
      prefixCls={mergedPrefixCls}
      wave={{ disabled: true }}
    >
      {/* 注入覆盖antd的样式 */}
      <App
        className={classNames(`spark`, props.className)}
        style={{ ...props.style }}
        key={key}
      >
        {hasInit ? (
          <>
            <SparkGlobalStyle />
            {children}
          </>
        ) : null}
      </App>
    </ConfigProvider>
  );
}

SparkConfigProvider.ConfigContext = ConfigProvider.ConfigContext;
SparkConfigProvider.config = (props) => {
  ConfigProvider.config(props);
};
SparkConfigProvider.useConfig = ConfigProvider.useConfig;

// CSS-in-JS 库自动处理样式去重和性能优化，不需要手动管理

export * from 'antd/lib/config-provider';
export default SparkConfigProvider;
