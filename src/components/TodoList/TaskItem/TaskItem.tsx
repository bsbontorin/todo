import { TaskItemProps } from '../../../types/todo-list';
import { Button } from '../../Button/Button';
import { Checkbox } from '../../Checkbox/Checkbox';

export const TaskItem: React.FC<TaskItemProps> = ({ task, onClickEditTask, onClickDeleteTask, onClickToggleStatus }) => {
  const checked = task?.status === 1;

  const handleOnClickEditTask = () => {
    onClickEditTask?.();
  };

  const handleOnClickDeleteTask = (id: string) => {
    onClickDeleteTask?.(id);
  };

  const handleOnClickToggleStatus = (id: string) => {
    onClickToggleStatus?.(id);
  };

  const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString('pt-BR');

  return (
    <div className='task-item-container'>
      <button className='item' onClick={() => handleOnClickToggleStatus(task?.id)}>
        <Checkbox id={String(task?.id)} customClass='checkbox' checked={checked} />
        <span className='info'>
          <span className={`title ${checked ? 'completed' : ''}`}>{task?.title}</span>
          <span className='subtitle'>{task?.subtitle}</span>
          <span className='details'>{`${task?.time}, ${formatDate(task?.date)}`}</span>
        </span>
      </button>
      <div className='actions'>
        <Button customClass='icon' icon='edit' onClick={() => handleOnClickEditTask()} />
        <Button customClass='icon' icon='delete' onClick={() => handleOnClickDeleteTask(task?.id)} />
      </div>
    </div>
  );
};
