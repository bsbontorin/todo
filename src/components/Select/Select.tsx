import { useState } from 'react';

export interface SelectProps {
  defaultOption: string;
  values: Array<number>;
  options: Array<string>;
  onChange: (value: number) => void;
}

export const Select: React.FC<SelectProps> = ({ defaultOption, values, options, onChange }) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();

    const selectedIndex = event?.target?.selectedIndex - 1;
    if (selectedIndex >= 0) {
      setSelectedValue(event?.target?.value);
      onChange(values[selectedIndex]);
    }
  };

  return (
    <select value={selectedValue} onChange={(event) => handleOnChange(event)} className='select-container'>
      <option value='' disabled>
        {defaultOption ?? 'Selecione uma opção'}
      </option>
      {options.map((option, index) => (
        <option key={option + index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
