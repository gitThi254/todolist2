import axios from "axios";

export const getTodolist = (query: SearchParams): Promise<Todo[]> => {
  return axios
    .get(`/api/todos?keyword=${query.keyword}`)
    .then((res) => res.data);
};

export const getTodo = (id: string): Promise<Todo> =>
  axios.get(`/api/todos/${id}`).then((res) => res.data);

export const createTodo = (data: CreateTodo): Promise<Todo> =>
  axios.post(`/api/todos`, data).then((res) => res.data);

export const updateTodo = ({
  id,
  data,
}: {
  id: string;
  data: UpdateTodo;
}): Promise<Todo> =>
  axios.put(`/api/todos/${id}`, data).then((res) => res.data);

export const deleteTodo = (id: string) => axios.delete(`/api/todos?id=${id}`);
