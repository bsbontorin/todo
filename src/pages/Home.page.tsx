import { useEffect, useState } from 'react';

import { TaskHeader } from '../components/TodoList/TaskHeader/TaskHeader';
import { TaskList } from '../components/TodoList/TaskList/TaskList';
import { baseTasks } from '../components/TodoList/TaskList/TaskList.constant';
import { DefaultLayout } from '../layout/DefaultLayout';
import { FormDataAddTask } from '../types/modal';
import { TaskProps } from '../types/todo-list';

export const Home: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState<Array<number>>([]);
  const [filterSearch, setFilterSearch] = useState<string>('');

  const [tasks, setTasks] = useState<Array<TaskProps>>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : baseTasks;
  });
  useEffect(() => localStorage.setItem('tasks', JSON.stringify(tasks)), [tasks]);

  const handleOnChangeSearch = (search: string) => {
    setFilterSearch(search);
  };

  const handleOnClickAddTask = (data: FormDataAddTask) => {
    setTasks((prevTasks) => [...prevTasks, { id: String(prevTasks?.length), ...data }]);
  };

  const handleOnClickEditTask = (updatedTask: TaskProps) => {
    setTasks(tasks?.map((task) => (task?.id === updatedTask?.id ? { ...task, ...updatedTask } : task)));
  };

  const handleOnClickDeleteTask = (id: string) => {
    setTasks(tasks?.map((task) => (task?.id === id ? { ...task, status: 3 } : task)));
  };

  const handleOnClickToggleStatus = (id: string) => {
    setTasks(tasks?.map((task) => (task?.id === id ? { ...task, status: task?.status === 0 ? 1 : 0 } : task)));
  };

  const handleOnClickFilterByStatus = (filterStatus: Array<number>) => {
    setFilterStatus(filterStatus);
  };

  const getVisibleTasks = () => {
    if (!filterStatus?.length) {
      return tasks?.filter(({ name, description, status }) => [name, description]?.some((item) => item?.includes(filterSearch)) && status !== 3) || [];
    }
    return (
      tasks?.filter(
        ({ name, description, status }) =>
          [name, description]?.some((item) => item?.includes(filterSearch)) && (filterStatus?.includes(status) || (filterStatus?.includes(-1) && status !== 3)),
      ) || []
    );
  };

  return (
    <DefaultLayout>
      <section className='home-container'>
        <div className='content'>
          <TaskHeader
            onChangeSearch={(search) => handleOnChangeSearch(search)}
            onClickAddTask={(formData) => handleOnClickAddTask(formData)}
            onClickFilterByStatus={(status) => handleOnClickFilterByStatus([status])}
          />
          <TaskList
            tasks={getVisibleTasks()}
            onClickEditTask={(task) => handleOnClickEditTask(task)}
            onClickDeleteTask={(id) => handleOnClickDeleteTask(id)}
            onClickToggleStatus={(id) => handleOnClickToggleStatus(id)}
          />
        </div>
      </section>
    </DefaultLayout>
  );
};
