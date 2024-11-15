import { FormDataAddTask } from './modal';

export interface TaskProps {
  id: string;
  name: string;
  datetime: string;
  description: string;
  status: number;
}

export interface TaskHeaderProps {
  onClickAddTask: (data: FormDataAddTask) => void;
}

export interface TaskItemProps {
  task: TaskProps;
  onClickEditTask: (task: TaskProps) => void;
  onClickDeleteTask: (id: string) => void;
  onClickToggleStatus: (id: string) => void;
}

export interface TaskListProps {
  tasks: Array<TaskProps>;
  onClickEditTask: (task: TaskProps) => void;
  onClickDeleteTask: (id: string) => void;
  onClickToggleStatus: (id: string) => void;
}
