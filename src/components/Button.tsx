export type ButtonProps = {
  text: string;
  className?: string;
  callback?: () => void;
};

export const Button = (props: Readonly<ButtonProps>) => {
  return (
    <button className={`${props?.className ?? 'default'}`} onClick={props?.callback ?? undefined}>
      {props.text}
    </button>
  );
};
