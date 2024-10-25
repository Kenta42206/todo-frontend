export interface Todo {
  id: number;
  title: string;
  done: boolean;
  limit_date: string;
}

export interface TodoRef {
  id: number;
  todo: Todo;
}
