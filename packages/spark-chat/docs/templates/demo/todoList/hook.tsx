import { useCopilotAction, useCopilotReadable } from "@agentscope-ai/chat";
import { createContext, useContext, useState, ReactNode } from "react";
import { Button, Card } from 'antd';
import { CodeBlock } from "@ali/agentscope-ai-design";

export type Task = {
  id: number;
  title: string;
  status: TaskStatus;
};

export enum TaskStatus {
  todo = "todo",
  done = "done",
}


const defaultTasks: Task[] = [
  {
    id: 1,
    title: "Complete project proposal",
    status: TaskStatus.done,
  },
  {
    id: 2,
    title: "Review design mockups",
    status: TaskStatus.done,
  },
  {
    id: 3,
    title: "Prepare presentation slides",
    status: TaskStatus.todo,
  },
  {
    id: 4,
    title: "Send meeting notes email",
    status: TaskStatus.todo,
  },
  {
    id: 5,
    title: "Review Uli's pull request",
    status: TaskStatus.todo,
  },
];

let nextId = defaultTasks.length + 1;

type TasksContextType = {
  tasks: Task[];
  addTask: (title: string) => void;
  setTaskStatus: (id: number, status: TaskStatus) => void;
  deleteTask: (id: number) => void;
};

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);

  useCopilotReadable({
    description: "The state of the todo list",
    value: JSON.stringify(tasks),
  });

  useCopilotAction({
    name: "handleAddTask",
    description: "Handle a task by confirming or canceling",
    parameters: [
      {
        name: "title",
        type: "string",
        description: "The title of the task",
        required: true,
      },
    ],
    renderAndWaitForResponse({ args, respond, status }) {
      const disabled = status === 'complete';
      if (status === 'complete') return null;

      return <Card
        actions={[
          <Button disabled={disabled} onClick={() => {
            respond?.('ok');
            addTask(args.title);
          }}>ok</Button>,
          <Button disabled={disabled} onClick={() => respond?.('cancel')}>cancel</Button>,
        ]}
      >add task {args.title}?</Card>
    },
  });



  useCopilotAction({
    name: "deleteTask",
    description: "Deletes a task from the todo list",
    parameters: [
      {
        name: "id",
        type: "number",
        description: "The id of the task",
        required: true,
      },
    ],
    handler: ({ id }) => {
      deleteTask(id);
    },

  });

  useCopilotAction({
    name: "setTaskStatus",
    description: "Sets the status of a task",
    parameters: [
      {
        name: "id",
        type: "number",
        description: "The id of the task",
        required: true,
      },
      {
        name: "status",
        type: "string",
        description: "The status of the task",
        enum: Object.values(TaskStatus),
        required: true,
      },
    ],
    handler: ({ id, status }) => {
      setTaskStatus(id, status);
    },
    render(props) {
      return <div style={{ width: '80%', border: '1px solid var(--ant-color-border)' }}>
        <CodeBlock language="json" value={JSON.stringify(props)} />
      </div>
    }
  });

  const addTask = (title: string) => {
    setTasks([...tasks, { id: nextId++, title, status: TaskStatus.todo }]);
  };

  const setTaskStatus = (id: number, status: TaskStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, setTaskStatus, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (context === undefined) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
};
