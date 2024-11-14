import { FormDataAddTask } from './modal';

export interface TaskProps {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  status: number;
}

export interface TaskHeaderProps {
  onClickSubmitAddTask: (formData: FormDataAddTask) => void;
}

export interface TaskItemProps {
  task: TaskProps;
  onClickEditTask?: () => void;
  onClickDeleteTask?: (id: string) => void;
  onClickToggleStatus?: (id: string) => void;
}

export interface TaskListProps {
  tasks: Array<TaskProps>;
  onClickEditTask?: () => void;
  onClickDeleteTask?: (id: string) => void;
  onClickToggleStatus?: (id: string) => void;
}
