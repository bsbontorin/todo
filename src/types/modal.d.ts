export interface ModalProps {
  title?: string;
  subtitle?: string;
  customClass?: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export interface FormDataAddTask {
  name: '';
  datetime: '';
  description: '';
}
