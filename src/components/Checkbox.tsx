export type CheckboxProps = {
  id: string;
  text?: string;
  checked?: boolean;
  className?: string;
  onChange: (el: boolean) => void;
};

export const Checkbox = ({ id, text, className, onChange, checked = false }: CheckboxProps) => (
  <div className='checkbox-container'>
    <input id={id} type='checkbox' checked={checked} className={className} onChange={(e) => onChange(e?.target?.checked)} />
    {text && <label htmlFor={id}>{text}</label>}
  </div>
);
