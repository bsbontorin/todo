export interface ButtonProps {
  img?: string;
  text?: string;
  icon?: string;
  altText?: string;
  customClass?: string;
  onClick: () => void;
}
