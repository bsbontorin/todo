import { useEffect, useState } from 'react';

import { FormDataAddTask } from '../../../types/modal';
import { TaskHeaderProps } from '../../../types/todo-list';
import { Button } from '../../Button/Button';
import { Modal } from '../../Modal/Modal';

export const TaskHeader: React.FC<TaskHeaderProps> = ({ onClickAddTask }) => {
  // * VARIABLES
  const [isFormValid, setIsFormValid] = useState(false);
  const [isModalAddTaskOpen, setIsModalAddTaskOpen] = useState(false);

  const [formData, setFormData] = useState<FormDataAddTask>({
    name: '',
    datetime: '',
    description: '',
    status: 0,
  });

  // * ARROWs
  const reset = () => {
    localStorage.setItem('tasks', '');
    window.location.reload();
  };

  const clearFormData = () => {
    setFormData({ name: '', datetime: '', description: '', status: 0 });
  };

  const handleOnClickModalAddTask = () => {
    setIsModalAddTaskOpen(true);
  };

  const handleOnCloseModalAddTask = () => {
    clearFormData();
    setIsModalAddTaskOpen(false);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    setIsFormValid(Object?.values(formData)?.every((value) => String(value)?.trim() !== ''));
  };
  useEffect(() => validateForm(), [formData]);

  const handleOnClickSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event?.preventDefault();

    onClickAddTask({ ...formData, status: 0 });

    clearFormData();
    setIsModalAddTaskOpen(false);
  };

  return (
    <>
      <div className='task-header-container'>
        <h1 className='title'>todo list</h1>

        <div className='actions'>
          <Button text='reset' customClass='button-text' onClick={() => reset()} />
          <Button text='add task' customClass='button-text' onClick={() => handleOnClickModalAddTask()} />

          {/* criar componente isolado */}
          <select name='filterTask' id='filterTask'>
            <option value=''>all</option>
            <option value='1'>todo</option>
            <option value='3'>completed</option>
          </select>
        </div>
      </div>

      {/* form add task - modal */}
      <Modal title='Cadastrar Task' subtitle='Informe os dados da task' isOpen={isModalAddTaskOpen} onClose={() => handleOnCloseModalAddTask()}>
        <form className='form'>
          <label className='label'>
            <span className='title'>Nome</span>
            <input type='text' name='name' className='input-text' required value={formData.name} onChange={(event) => handleOnChange(event)} />
          </label>

          <label className='label'>
            <span className='title'>Descrição</span>
            <textarea name='description' className='textarea' required value={formData.description} onChange={(event) => handleOnChange(event)} />
          </label>

          <label className='label'>
            <span className='title'>Data e hora</span>
            <input
              type='datetime-local'
              name='datetime'
              required
              className='input-datetime'
              value={formData.datetime}
              onChange={(event) => handleOnChange(event)}
            />
          </label>

          <button type='submit' className='submit' disabled={!isFormValid} onClick={(event) => handleOnClickSubmit(event)}>
            <span>Salvar</span>
          </button>
        </form>
      </Modal>
    </>
  );
};
