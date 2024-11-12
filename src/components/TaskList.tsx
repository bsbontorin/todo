import { TaskItem, TaskProps } from './TaskItem';

export type TaskListProps = {
  tasks: Array<TaskProps>;
  updateTaskStatus: (id: number, status: number) => void;
};

export const TaskList = ({ tasks, updateTaskStatus }: Readonly<TaskListProps>) => {
  return (
    <div className='task-list-container'>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} updateTaskStatus={updateTaskStatus} />
      ))}
    </div>
  );
};
