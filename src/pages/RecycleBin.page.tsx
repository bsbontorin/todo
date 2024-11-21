import { useEffect, useState } from 'react';

import { baseTasks } from '../components/TodoList/TaskList/TaskList.constant';
import { DefaultLayout } from '../layout/DefaultLayout';
import { TaskProps } from '../types/todo-list';

export const RecycleBin: React.FC = () => {
  // * VARIABLES
  const [tasks, setTasks] = useState<Array<TaskProps>>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : baseTasks;
  });
  useEffect(() => localStorage.setItem('tasks', JSON.stringify(tasks)), [tasks]);

  const [dropIndicator, setDropIndicator] = useState<string | null>(null);

  const handleOnDragStart = (event: React.DragEvent<HTMLDivElement>, id: string) => {
    return event.dataTransfer.setData('text/plain', id);
  };

  const handleOnDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.clearData();
  };

  const handleOnDrop = (event: React.DragEvent<HTMLDivElement>, status: string) => {
    event.preventDefault();
    const id = event?.dataTransfer.getData('text/plain');

    const statusList: Record<string, number> = {
      all: 0,
      recycle: 3,
    };

    setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, status: statusList[status] } : task)));
  };

  const handleOnDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDropIndicator(event.currentTarget.id);
  };

  const renderTasks = (status: string) => {
    return tasks
      .filter(({ status: s }) => (status === 'all' ? s !== 3 : status === 'recycle' ? s === 3 : true))
      .map(({ id, name }) => {
        return (
          <div key={id} draggable onDragStart={(event) => handleOnDragStart(event, id)} onDragEnd={(event) => handleOnDragEnd(event)} className='item'>
            {name}
          </div>
        );
      });
  };

  return (
    <DefaultLayout>
      <section className='recycle-container'>
        <div className='content'>
          <h2 className='title'>Demais tarefas</h2>
          <h2 className='title'>Tarefas excluídas</h2>
          <div id='all' onDrop={(event) => handleOnDrop(event, 'all')} onDragOver={(event) => handleOnDragOver(event)} className='drag-drop-container'>
            {renderTasks('all')}
          </div>
          <div id='recycle' onDrop={(event) => handleOnDrop(event, 'recycle')} onDragOver={(event) => handleOnDragOver(event)} className='drag-drop-container'>
            {renderTasks('recycle')}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};
