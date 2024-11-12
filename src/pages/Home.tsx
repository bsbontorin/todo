import { TaskHeader } from '../components/TaskHeader';
import { TaskList } from '../components/TaskList';

export function Home() {
  return (
    <section className='home-container'>
      <div className='content'>
        <TaskHeader />
        <TaskList />
      </div>
    </section>
  );
}
