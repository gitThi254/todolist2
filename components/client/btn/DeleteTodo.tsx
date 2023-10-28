"use client";
import { useDeleteTodo } from "@/hooks/useTodos";
import React from "react";

const DeleteTodo = ({ id }: { id: string }) => {
  const { mutate: deleteTodo, isPending } = useDeleteTodo(id);
  return (
    <button onClick={() => deleteTodo(id)} disabled={isPending}>
      {isPending ? "loading..." : "Delete"}
    </button>
  );
};

export default DeleteTodo;
