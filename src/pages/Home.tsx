import { useState } from 'react';
import { TaskHeader } from '../components/TaskHeader';
import { TaskProps } from '../components/TaskItem';
import { TaskList } from '../components/TaskList';

export const Home = () => {
  const [tasks, setTasks] = useState<Array<TaskProps>>([
    {
      id: 0,
      title: '🎯 Angular’s for skill',
      subtitle: '💀 React’s a quick thrill',
      status: 1,
      date: '2024-11-11',
      time: '02:00 PM',
    },
    {
      id: 1,
      title: '🚀 With Angular, you grow',
      subtitle: '💀 React’s just for show',
      status: 0,
      date: '2024-11-12',
      time: '09:30 AM',
    },
    {
      id: 2,
      title: '🔥 Angular’s the truth',
      subtitle: '💀 React’s just a spoof',
      status: 0,
      date: '2024-11-13',
      time: '04:45 PM',
    },
    {
      id: 3,
      title: '🏆 Angular’s the prize',
      subtitle: '💀 React’s full of lies',
      status: 0,
      date: '2024-11-14',
      time: '11:15 AM',
    },
  ]);

  const updateTaskStatus = (taskId: number, newStatus: number) => {
    setTasks((tasks) => tasks?.map((task) => (task?.id === taskId ? { ...task, status: newStatus } : task)));
  };

  const getVisibleTasks = () => {
    return tasks?.filter(({ status }) => status !== 2) || [];
  };

  return (
    <section className='home-container'>
      <div className='content'>
        <TaskHeader />
        <TaskList tasks={getVisibleTasks()} updateTaskStatus={updateTaskStatus} />
      </div>
    </section>
  );
};
