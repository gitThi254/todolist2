import TodoUpdateFetchData from "@/components/client/fetchData/TodoUpdateFetchData";
import Link from "next/link";
import React from "react";

const UpdateTodo = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div>
      <div>form update todo</div>
      <Link href={"/todos"}>go todolist</Link>
      <TodoUpdateFetchData id={id} />
    </div>
  );
};

export default UpdateTodo;
