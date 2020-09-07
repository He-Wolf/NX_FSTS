export interface ITodo {
  id: string;
  name: string;
  isDone: boolean;
  description?: string;
}


export interface ITodoDto extends ITodo {}


export interface ITodoCreate extends Omit<ITodo, 'id'> {}
