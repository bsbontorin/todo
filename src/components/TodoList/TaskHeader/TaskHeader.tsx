import { useEffect, useState } from 'react';

import { FormDataAddTask } from '../../../types/modal';
import { TaskHeaderProps } from '../../../types/todo-list';
import { Button } from '../../Button/Button';
import { Modal } from '../../Modal/Modal';
import { Select } from '../../Select/Select';
import { SearchBar } from '../../SearchBar/SearchBar';

export const TaskHeader: React.FC<TaskHeaderProps> = ({ onChangeSearch, onClickAddTask, onClickFilterByStatus }) => {
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

  const handleOnChangeSearch = (search: string) => {
    onChangeSearch(search)
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

  const handleOnClickFilterByStatus = (status: number) => {
    onClickFilterByStatus(status);
  };

  return (
    <>
      <div className='task-header-container'>
        <h1 className='title'>todo list</h1>

        <div className='actions'>
          <div className='line'>
            <Button text='add task' customClass='button-text' onClick={() => handleOnClickModalAddTask()} />
            <Select
              defaultOption='Filtrar tarefas'
              options={['All', 'Todo', 'Completed']}
              values={[-1, 0, 1]}
              onChange={(status) => handleOnClickFilterByStatus(status)}
            />
          </div>
          <div className='line'>
            <SearchBar buttonLabel="pesquisar" placeholder='Pesquisar tarefas' onChange={(search) => handleOnChangeSearch(search)} />
          </div>
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
