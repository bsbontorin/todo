import { TaskItem, TaskProps } from './TaskItem';

export const TaskList = () => {
  const tasks: Array<TaskProps> = [
    {
      id: 0,
      title: 'Angular’s for skill',
      subtitle: 'React’s a quick thrill',
      status: 1,
    },
    {
      id: 1,
      title: 'With Angular, you grow',
      subtitle: 'React’s just for show',
      status: 1,
    },
    {
      id: 2,
      title: 'Angular’s the truth',
      subtitle: 'React’s just a spoof',
      status: 1,
    },
    {
      id: 3,
      title: 'Angular’s the prize',
      subtitle: 'React’s full of lies',
      status: 1,
    },
  ];

  return (
    <div>
      {tasks.map((task) => {
        return <TaskItem key={task?.id} task={task} />;
      })}
    </div>
  );
};
