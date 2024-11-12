import { useEffect, useState } from 'react';

import { Checkbox } from './Checkbox';
import { Button } from './Button';

export type TaskItemProps = {
  task: TaskProps;
  updateTaskStatus: (id: number, status: number) => void;
};

export type TaskProps = {
  id: number;
  title: string;
  subtitle: string;
  status: number;
  date: string;
  time: string;
};

export const TaskItem = ({ task, updateTaskStatus }: TaskItemProps) => {
  const [checked, setChecked] = useState(task?.status === 1);

  useEffect(() => updateTaskStatus(task?.id, Number(checked)), [checked]);

  const editButtonClick = () => {
    console.log('edit', task);
  };

  const deleteButtonClick = () => {
    updateTaskStatus(task?.id, 2);
    console.log('delete', task);
  };

  const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString('pt-BR');

  return (
    <div className='task-item-container'>
      <button className='item' onClick={() => setChecked((prev) => !prev)}>
        <Checkbox id={String(task?.id)} className='checkbox' checked={checked} onChange={setChecked} />
        <span className='info'>
          <span className={`title ${checked ? 'completed' : ''}`}>{task?.title}</span>
          <span className='subtitle'>{task?.subtitle}</span>
          <span className='details'>{`${task?.time}, ${formatDate(task?.date)}`}</span>
        </span>
      </button>
      <div className='actions'>
        <Button className='icon' icon='edit' onClick={editButtonClick} />
        <Button className='icon' icon='delete' onClick={deleteButtonClick} />
      </div>
    </div>
  );
};
