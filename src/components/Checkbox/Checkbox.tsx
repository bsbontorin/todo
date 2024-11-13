import { CheckboxProps } from '../../types/checkbox';

export const Checkbox: React.FC<CheckboxProps> = ({ id, text, customClass, onChange, checked = false }) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event?.target?.checked);
  };

  return (
    <div className='checkbox-container'>
      <input id={id} type='checkbox' checked={checked} className={customClass} onChange={(event) => handleOnChange(event)} />
      {text && <label htmlFor={id}>{text}</label>}
    </div>
  );
};
