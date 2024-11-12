export type ButtonProps = {
  img?: string;
  text?: string;
  icon?: string;
  altText?: string;
  className?: string;
  onClick?: () => void;
};

export const Button = (props: Readonly<ButtonProps>) => {
  return (
    <button className={`${props?.className ?? 'default'}`} onClick={props?.onClick ?? undefined}>
      {props?.text && <span>{props?.text}</span>}
      {props?.img && <img className='img' src={props?.img} alt={props?.altText} />}
      {props?.icon === 'edit' && (
        <svg className='svg' width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='m3.99 16.854-1.314 3.504a.75.75 0 0 0 .966.965l3.503-1.314a3 3 0 0 0 1.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 0 0-.687 1.068zm12.249-12.63 1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z'
            fill='currentColor'
          />
        </svg>
      )}
      {props?.icon === 'delete' && (
        <svg className='svg' fill='currentColor' width='800px' height='800px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' id='delete'>
          <path d='M17,4V5H15V4H9V5H7V4A2,2,0,0,1,9,2h6A2,2,0,0,1,17,4Z'></path>
          <path d='M20,6H4A1,1,0,0,0,4,8H5V20a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V8h1a1,1,0,0,0,0-2Z'></path>
        </svg>
      )}
    </button>
  );
};
