import { TaskListProps, TaskProps } from '../../../types/todo-list';
import { TaskItem } from '../TaskItem/TaskItem';

export const TaskList: React.FC<TaskListProps> = ({ tasks, onClickEditTask, onClickDeleteTask, onClickToggleStatus }) => {
  const handleOnClickEditTask = (task: TaskProps) => {
    onClickEditTask(task);
  };

  const handleOnClickDeleteTask = (id: string) => {
    onClickDeleteTask(id);
  };

  const handleOnClickToggleStatus = (id: string) => {
    onClickToggleStatus(id);
  };

  return (
    <div className='task-list-container'>
      {!!tasks?.length &&
        tasks.map((task) => (
          <TaskItem
            key={task?.id}
            task={task}
            onClickEditTask={(task) => handleOnClickEditTask(task)}
            onClickDeleteTask={(id) => handleOnClickDeleteTask(id)}
            onClickToggleStatus={(id) => handleOnClickToggleStatus(id)}
          />
        ))}
      {!tasks?.length && <span>Nenhuma tarefa aqui. Clique em "Add Task"</span>}
    </div>
  );
};
