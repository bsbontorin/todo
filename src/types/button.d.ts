export interface ButtonProps<T extends HTMLElement = HTMLButtonElement> {
  img?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  text?: string;
  icon?: string;
  altText?: string;
  customClass?: string;
  onClick: () => void;
}
