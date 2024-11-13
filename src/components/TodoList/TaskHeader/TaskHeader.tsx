import { Button } from '../../Button/Button';

export const TaskHeader: React.FC = () => {
  const handleOnClickAddTask = () => {
    console.log('add task fn');
  };

  const reset = () => {
    localStorage.setItem('tasks', '');
    window.location.reload();
  };

  return (
    <div className='task-header-container'>
      <h1 className='title'>todo list</h1>

      <div className='actions'>
        <Button text='reset' customClass='button-text' onClick={() => reset()} />
        <Button text='add task' customClass='button-text' onClick={() => handleOnClickAddTask()} />

        {/* criar componente isolado */}
        <select name='filterTask' id='filterTask'>
          <option value=''>all</option>
          <option value='1'>todo</option>
          <option value='3'>completed</option>
        </select>
      </div>
    </div>
  );
};
