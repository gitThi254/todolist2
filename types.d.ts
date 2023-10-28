type Todo = {
  id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
};

type CreateTodo = Pick<Todo, "text">;
type UpdateTodo = Partial<Todo>;

type SearchParams = {
  keyword?: string;
};
