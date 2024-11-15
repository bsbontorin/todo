import { useEffect, useState } from 'react';

import { TaskItemProps, TaskProps } from '../../../types/todo-list';
import { Button } from '../../Button/Button';
import { Checkbox } from '../../Checkbox/Checkbox';
import { Modal } from '../../Modal/Modal';

export const TaskItem: React.FC<TaskItemProps> = ({ task, onClickEditTask, onClickDeleteTask, onClickToggleStatus }) => {
  // * VARIABLES
  const checked = task?.status !== 1;

  const [isFormValid, setIsFormValid] = useState(false);
  const [isModalEditTaskOpen, setIsModalEditTaskOpen] = useState(false);

  const [formData, setFormData] = useState<TaskProps>(task);

  const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString('pt-BR');
  const formatTime = (dateString: string) => new Date(dateString).toLocaleTimeString('pt-BR', { hour12: true });

  const handleOnClickEditTask = () => {
    setIsModalEditTaskOpen(true);
  };

  const handleOnClickDeleteTask = (id: string) => {
    onClickDeleteTask(id);
  };

  const handleOnClickToggleStatus = (id: string) => {
    onClickToggleStatus(id);
  };

  const handleOnCloseModalEditTask = () => {
    setIsModalEditTaskOpen(false);
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

    onClickEditTask(formData);
    setIsModalEditTaskOpen(false);
  };

  return (
    <>
      <div className={`task-item-container ${checked ? 'completed' : ''}`}>
        <button className='item' onClick={() => handleOnClickToggleStatus(task?.id)}>
          <Checkbox id={String(task?.id)} customClass='checkbox' checked={checked} />
          <span className='info'>
            <span className='title'>{task?.name}</span>
            <span className='description'>{task?.description}</span>
            <span className='datetime'>{`${formatTime(task?.datetime)}, ${formatDate(task?.datetime)}`}</span>
          </span>
        </button>
        <div className='actions'>
          <Button customClass='icon' icon='edit' onClick={() => handleOnClickEditTask()} />
          <Button customClass='icon' icon='delete' onClick={() => handleOnClickDeleteTask(task?.id)} />
        </div>
      </div>

      {/* form edit task - modal */}
      <Modal title='Editar Task' subtitle='Altere os dados da task' isOpen={isModalEditTaskOpen} onClose={() => handleOnCloseModalEditTask()}>
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
