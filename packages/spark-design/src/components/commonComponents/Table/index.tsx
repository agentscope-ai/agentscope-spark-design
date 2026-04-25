import { getCommonConfig } from '@/config';
import { SparkSortLine } from '@agentscope-ai/icons';
import { Table as AntdTable, Flex, TableProps } from 'antd';
import classNames from 'classnames';
import { useStyle as usePaginationStyle } from '../Pagination/index.style';
import { useStyle } from './index.style';
import { Empty } from '@agentscope-ai/design';

export default function Table<T = any>(props: TableProps<T>) {
  const commonConfig = getCommonConfig();
  const { sparkPrefix } = commonConfig;
  let { columns, ...restProps } = props;
  columns = columns?.map((column) => ({
    ...column,
    sortIcon:
      column.sortIcon ||
      (() => <SparkSortLine style={{ fontSize: 16, marginLeft: 8 }} />),
  }));
  const Style = useStyle();
  const PaginationStyle = usePaginationStyle();

  return (
    <>
      <Style />
      <PaginationStyle />
      <AntdTable<T>
        className={classNames(`${sparkPrefix}-table`)}
        columns={columns}
        locale={{
          emptyText: <Flex vertical align="center"><Empty type="noData" /></Flex>,
        }}
        {...restProps}
      />
    </>
  );
}
