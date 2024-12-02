export type ProjectType = {
  id: string;
  title: string;
  deadline: string;
  details: string;
  status: string;
  netPrice: string;
  tax: string;
  price: string;
};

export type CommentType = {
  index: string;
  id: string;
  title: string | undefined;
  creatorId: string;
  taggedUser: {
    name: string;
  };
};

export interface StateType {
  errors: {
    title?: string[];
    deadline?: string[];
    details?: string[];
    status?: string[];
    netPrice?: string[];
    tax?: string[];
    price?: string[];
  };
  message?: string;
}
