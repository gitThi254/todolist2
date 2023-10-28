import {
  createTodo,
  deleteTodo,
  getTodo,
  getTodolist,
  updateTodo,
} from "@/libs/fetchApi/todosFetch";
import {
  useQuery,
  useQueryClient,
  useMutation,
  keepPreviousData,
} from "@tanstack/react-query";
import { useRouter } from "next/navigation";
export const useTodoList = (query: SearchParams) => {
  return useQuery({
    queryKey: ["todos", query],
    queryFn: () => getTodolist(query),
    placeholderData: keepPreviousData,
  });
};

export const useTodo = (id: string) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodo(id),
    initialData: () => {
      return queryClient
        .getQueryData<Todo[]>(["todos"])
        ?.find((todo) => todo.id === id);
    },
  });
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onSuccess: (newData) => {
      queryClient.setQueryData(["todos"], (todos?: Todo[]) => {
        return [newData, ...(todos || [])];
      });
    },
  });
};

export const useUpdateTodo = (id: string) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTodo,
    onSuccess: (data, { id }) => {
      queryClient.setQueryData(["todos"], (todos?: Todo[]) => {
        return (todos || [])?.map((todo) => (todo.id === id ? data : todo));
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      router.back();
    },
  });
};

export const useDeleteTodo = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.setQueryData(["todos"], (todos?: Todo[]) => {
        return (todos || [])?.filter((todo) => todo.id !== id);
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
