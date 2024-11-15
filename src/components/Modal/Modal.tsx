import React, { useEffect, useRef, useState } from 'react';

import { ModalProps } from '../../types/modal';
import { Button } from '../Button/Button';

export const Modal: React.FC<ModalProps> = ({ title, subtitle, children, isOpen, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [modalState, setModalState] = useState<boolean>(isOpen);
  useEffect(() => setModalState(isOpen), [isOpen]);

  useEffect(() => {
    if (modalState) dialogRef?.current?.showModal();
    else dialogRef?.current?.close();
  }, [modalState]);

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
