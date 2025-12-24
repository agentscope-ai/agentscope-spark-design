import createGlobalStyle from '@/libs/createStyle';

/**
 * Tree 组件全局样式
 * - 节点间距 gap: 8px
 */
export const useTreeStyle = createGlobalStyle`
.${(p) => p.antPrefix}-tree .${(p) => p.antPrefix}-tree-treenode {
  margin-bottom: 8px;
}

.${(p) => p.antPrefix}-tree .${(p) => p.antPrefix}-tree-treenode:last-child {
  margin-bottom: 0;
}
`;

export default useTreeStyle;

