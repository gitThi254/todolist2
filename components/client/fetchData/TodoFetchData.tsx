"use client";
import TodoDetailschildren from "@/components/server/children/TodoDetailschildren";
import { useTodo } from "@/hooks/useTodos";
import React from "react";

const TodoFetchData = ({ id }: { id: string }) => {
  const { data: todo, isLoading, isError, error } = useTodo(id);
  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>{error?.message}</div>;
  return <>{todo ? <TodoDetailschildren todo={todo} /> : "not found"}</>;
};

export default TodoFetchData;
