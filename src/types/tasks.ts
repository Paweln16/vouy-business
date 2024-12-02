export type TaskType = {
  id: string;
  title: string;
  details: string;
  status: string;
  deadline: string;
};

export interface StateType {
  errors: {
    title?: string[];
    deadline?: string[];
    details?: string[];
    status?: string[];
  };
  message?: string;
}
