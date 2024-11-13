export interface CheckboxProps {
  id: string;
  text?: string;
  checked?: boolean;
  customClass?: string;
  onChange?: (el: boolean) => void;
}
