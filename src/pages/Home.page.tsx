import { useEffect, useState } from 'react';

import { TaskHeader } from '../components/TodoList/TaskHeader/TaskHeader';
import { TaskList } from '../components/TodoList/TaskList/TaskList';
import { baseTasks } from '../components/TodoList/TaskList/TaskList.constant';
import { DefaultLayout } from '../layout/DefaultLayout';
import { TaskProps } from '../types/todo-list';
import { FormDataAddTask } from '../types/modal';

export const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Array<TaskProps>>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : baseTasks;
  });
  useEffect(() => localStorage.setItem('tasks', JSON.stringify(tasks)), [tasks]);

  const handleOnClickSubmitAddTask = (formData: FormDataAddTask) => {
    setTasks([
      ...tasks,
      {
        id: String(tasks?.length),
        date: formData.datetime,
        title: formData?.name,
        subtitle: formData?.description,
        status: 0,
      },
    ]);

    console.log('formData :>> ', formData);
  };

  const handleOnClickEditTask = () => {
    console.log('edit');
  };

  const handleOnClickDeleteTask = (id: string) => {
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
          <TaskHeader onClickSubmitAddTask={(formData) => handleOnClickSubmitAddTask(formData)} />
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
