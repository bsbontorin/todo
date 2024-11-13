import { TaskListProps } from '../../../types/todo-list';
import { TaskItem } from '../TaskItem/TaskItem';

export const TaskList: React.FC<TaskListProps> = ({ tasks, onClickEditTask, onClickDeleteTask, onClickToggleStatus }) => {
  const handleOnClickEditTask = () => {
    onClickEditTask?.();
  };

  const handleOnClickDeleteTask = (id: string) => {
    onClickDeleteTask?.(id);
  };

  const handleOnClickToggleStatus = (id: string) => {
    onClickToggleStatus?.(id);
  };

  return (
    <div className='task-list-container'>
      {tasks.map((task) => (
        <TaskItem
          key={task?.id}
          task={task}
          onClickEditTask={() => handleOnClickEditTask()}
          onClickDeleteTask={(id) => handleOnClickDeleteTask(id)}
          onClickToggleStatus={(id) => handleOnClickToggleStatus(id)}
        />
      ))}
    </div>
  );
};
