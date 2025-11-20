import { Button, Checkbox } from "@agentscope-ai/design";
import { useTasks } from "./hook";
import { TaskStatus, type Task } from "./hook";
import { DeleteOutlined } from "@ant-design/icons";

export function Task({ task: { id, title, status } }: { task: Task }) {
  const { setTaskStatus, deleteTask } = useTasks();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1
      }}
    >
      <Checkbox checked={status === TaskStatus.done} onChange={() => {
        setTaskStatus(id, status === TaskStatus.done ? TaskStatus.todo : TaskStatus.done)
      }}>
        <label>
          {title}
        </label>
      </Checkbox>
      <Button onClick={() => deleteTask(id)} icon={<DeleteOutlined />}>
      </Button>
    </div>
  );
}
