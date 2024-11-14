import React, { useRef } from 'react';

import { ModalProps } from '../../types/modal';
import { Button } from '../Button/Button';

export const Modal: React.FC<ModalProps> = ({ title, subtitle, children, isOpen, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    if (isOpen) dialogRef?.current?.showModal();
    else dialogRef?.current?.close();
  }, [isOpen]);

  const handleOnClickOnClose = () => {
    onClose();
  };

  return (
    <dialog ref={dialogRef} className='dialog-container'>
      <header className='header'>
        <span className='text'>
          <h2 className='title'>{title}</h2>
          <h3 className='subtitle'>{subtitle}</h3>
        </span>
        <div className='actions'>
          <Button customClass='icon' icon='close' onClick={() => handleOnClickOnClose()} />
        </div>
      </header>

      <div className='modal-content'>{children}</div>
    </dialog>
  );
};
