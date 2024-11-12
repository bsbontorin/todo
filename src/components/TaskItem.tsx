export type TaskItemProps = {
  task: TaskProps;
};

export type TaskProps = {
  id: number;
  title: string;
  subtitle: string;
  status: number;
};

export const TaskItem = ({ task }: Readonly<TaskItemProps>) => {
  return (
    <div className='task-item-container'>
      <span>{task.title}</span>
      <span>{task.subtitle}</span>
    </div>
  );
};
