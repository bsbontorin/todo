import { ButtonProps } from '../../types/button';

export const Button: React.FC<ButtonProps> = ({ img, icon, type, text, altText, customClass, onClick }) => {
  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    onClick();
  };

  return (
    <button type={type ?? 'button'} className={`button ${customClass ?? ''}`} onClick={(event) => handleOnClick(event)}>
      {text && <span>{text}</span>}
      {img && <img className='img' src={img} alt={altText} />}
      {icon === 'edit' && (
        <svg className='svg' width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='m3.99 16.854-1.314 3.504a.75.75 0 0 0 .966.965l3.503-1.314a3 3 0 0 0 1.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 0 0-.687 1.068zm12.249-12.63 1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z'
            fill='currentColor'
          />
        </svg>
      )}
      {icon === 'delete' && (
        <svg className='svg' fill='currentColor' width='800px' height='800px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' id='delete'>
          <path d='M17,4V5H15V4H9V5H7V4A2,2,0,0,1,9,2h6A2,2,0,0,1,17,4Z'></path>
          <path d='M20,6H4A1,1,0,0,0,4,8H5V20a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V8h1a1,1,0,0,0,0-2Z'></path>
        </svg>
      )}
      {icon === 'close' && (
        <svg className='svg' width='800px' height='800px' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'>
          <path
            fill='currentColor'
            d='M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z'
          />
        </svg>
      )}
    </button>
  );
};
