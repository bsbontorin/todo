import { Button } from './Button';

export const TaskHeader = () => {
  const clickButton = () => {
    console.log('add task fn');
  };

  return (
    <div className='task-header-container'>
      <h1 className='title'>todo list</h1>

      <div className='actions'>
        <Button text='add task' className='button-text' onClick={clickButton} />

        <select name='filterTask' id='filterTask'>
          <option value=''>all</option>
          <option value='1'>todo</option>
          <option value='3'>completed</option>
        </select>
      </div>
    </div>
  );
};
