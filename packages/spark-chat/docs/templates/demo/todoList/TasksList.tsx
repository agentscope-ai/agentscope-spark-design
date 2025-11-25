import React from 'react';
import { Task } from "./Task";
import { useTasks } from "./hook";
import { List } from 'antd';

export function TasksList() {
  const { tasks } = useTasks();
  return <List
    style={{ margin: 16 }}
    rowKey="id"
    header={<div>AI TODO MVC</div>}
    bordered
    dataSource={tasks}
    renderItem={(item) => {
      return (
        <List.Item>
          <Task task={item} />
        </List.Item>
      )
    }}
  />

}
