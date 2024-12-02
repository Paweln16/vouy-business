export type CommentType = {
  index: string;
  id: string;
  title: string | undefined;
  creatorId: string;
};

export type OrderType = {
  id: string;
  title: string;
  details: string;
  status: string;
  netPrice: string;
  comments: CommentType[];
  tax: string;
  price: string;
};
