import { useEffect, useState } from 'react';

import { TaskHeader } from '../components/TodoList/TaskHeader/TaskHeader';
import { TaskList } from '../components/TodoList/TaskList/TaskList';
import { baseTasks } from '../components/TodoList/TaskList/TaskList.constant';
import { DefaultLayout } from '../layout/DefaultLayout';
import { TaskProps } from '../types/todo-list';

export const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Array<TaskProps>>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : baseTasks;
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleOnClickEditTask = () => {
    console.log('edit');
  };

  const handleOnClickDeleteTask = (id: string) => {
    console.log('delete', id);
    setTasks(tasks?.map((task) => (task?.id === id ? { ...task, status: 3 } : task)));
  };

  const handleOnClickToggleStatus = (id: string) => {
    setTasks(tasks?.map((task) => (task?.id === id ? { ...task, status: task?.status === 0 ? 1 : 0 } : task)));
  };

  const getVisibleTasks = () => {
    return tasks?.filter(({ status }) => status !== 3) || [];
  };

  return (
    <DefaultLayout>
      <section className='home-container'>
        <div className='content'>
          <TaskHeader />
          <TaskList
            tasks={getVisibleTasks()}
            onClickEditTask={() => handleOnClickEditTask()}
            onClickDeleteTask={(id) => handleOnClickDeleteTask(id)}
            onClickToggleStatus={(id) => handleOnClickToggleStatus(id)}
          />
        </div>
      </section>
    </DefaultLayout>
  );
};
