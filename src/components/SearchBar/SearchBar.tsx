import { SearchBarProps } from '../../types/select';

export const SearchBar: React.FC<SearchBarProps> = ({ buttonLabel, placeholder, onChange }) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <div className='search-bar-container'>
      <form className='form-group'>
        <label className='label' aria-label='Search field'>
          <div className='icon'>
            <svg className='svg' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
              <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z' />
            </svg>
          </div>
          <input type='search' className='input' required placeholder={placeholder} onChange={(event) => handleOnChange(event)} />
        </label>
        <button type='submit' className='button'>
          {buttonLabel}
        </button>
      </form>
    </div>
  );
};
