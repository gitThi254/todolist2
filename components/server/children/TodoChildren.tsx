import DeleteTodo from "@/components/client/btn/DeleteTodo";
import Link from "next/link";
import React from "react";

const TodoChildren = ({ todo }: { todo: Todo }) => {
  return (
    <div className='container mx-auto grid grid-cols-4'>
      <Link href={`/todos/${todo.id}`}>{todo.text}</Link>
      <div>{todo.createdAt}</div>
      <div>{todo.updatedAt}</div>
      <div className='flex justify-around'>
        <Link href={`/todos/update/${todo.id}`}>update</Link>
        <DeleteTodo id={todo.id} />
      </div>
    </div>
  );
};

export default TodoChildren;
