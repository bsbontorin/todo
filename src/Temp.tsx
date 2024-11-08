type TempProps = {
  text: string;
};

export function Temp(props: Readonly<TempProps>) {
  return <p>{props.text}</p>;
}
