import { ITask } from "./Task";

export interface TaskItemProps {
  task: ITask;
  onModalClose: () => void;
}

export interface TaskListProps {
  tasks: ITask[];
  onTaskDone: (id: number) => void;
  onModalOpen: (id: number) => void;
}

export interface TaskCreateProps {
  onTaskCreate: (title: string, description: string) => void;
}

export interface InputProps {
  error: boolean;
  inputType: string;
  content: string;
  onChange: (e: any) => void;
}
