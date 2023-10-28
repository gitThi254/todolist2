"use client";

import TodoChildren from "@/components/server/children/TodoChildren";
import { useTodoList } from "@/hooks/useTodos";
import { useSearchParams } from "next/navigation";
import React from "react";

const TodosListFetchData = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const {
    data: todos,
    isError,
    error,
    isLoading,
  } = useTodoList({ keyword: keyword });
  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>{error.message}</div>;
  return (
    <>
      {todos
        ? todos.map((todo) => <TodoChildren key={todo.id} todo={todo} />)
        : "not found"}
    </>
  );
};

export default TodosListFetchData;
