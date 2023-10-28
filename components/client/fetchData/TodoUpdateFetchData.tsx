"use client";
import { useTodo } from "@/hooks/useTodos";
import React from "react";
import FormUpdateTodo from "../form/FormUpdateTodo";

const TodoUpdateFetchData = ({ id }: { id: string }) => {
  const { data: todo, isLoading, isError, error } = useTodo(id);
  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>{error?.message}</div>;
  return <>{todo ? <FormUpdateTodo id={id} data={todo} /> : "not found"}</>;
};

export default TodoUpdateFetchData;
