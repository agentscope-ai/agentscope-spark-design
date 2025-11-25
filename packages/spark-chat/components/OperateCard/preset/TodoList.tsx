import { OperateCard, useProviderContext } from '@agentscope-ai/chat';
import { SparkCheckCircleLine, SparkLoadingLine, SparkProjectNoLine } from '@agentscope-ai/icons';
import classNames from 'classnames';


export interface ITodoListProps {
  /**
   * @description 标题
   * @descriptionEn Title
   * @default 'Task List'
   */
  title?: string;
  /**
   * @description 默认展开
   * @descriptionEn Default Open
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * @description Todo 列表
   * @descriptionEn Todo List
   * @default []
   */
  list: {
    title: string;
    status: 'done' | 'todo' | 'running';
  }[]
}

export default function (props: ITodoListProps) {

  const { getPrefixCls } = useProviderContext();
  const prefixCls = getPrefixCls('operate-card');
  const { title = 'Task List' } = props;
  const doneCount = props.list.filter((item) => item.status === 'done').length;



  return <OperateCard
    header={{
      icon: <SparkProjectNoLine />,
      title: title,
      description: `· ${doneCount ? doneCount + ' of ' : ''} ${props.list.length}`,
    }}
    body={{
      defaultOpen: props.defaultOpen,
      children: <div className={`${prefixCls}-todo-list`}>
        {props.list.map((item) => {
          return <div key={item.title} className={classNames({
            [`${prefixCls}-todo-list-item`]: true,
            [`${prefixCls}-todo-list-item-${item.status}`]: true,
          })}>
            <div className={`${prefixCls}-todo-list-item-icon`}>
              {{
                'done': <SparkCheckCircleLine />,
                'todo': <SparkCheckCircleLine />,
                'running': <SparkLoadingLine spin={true} />,
              }[item.status]}
            </div>
            <div className={`${prefixCls}-todo-list-item-title`} style={{
              textDecoration: item.status === 'done' ? 'line-through' : 'none',
            }}>
              {item.title}
            </div>
          </div>
        })}

      </div>
    }}
  />


}