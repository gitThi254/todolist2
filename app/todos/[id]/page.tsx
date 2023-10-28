import TodoFetchData from "@/components/client/fetchData/TodoFetchData";
import { Libre_Barcode_128 } from "next/font/google";
import Link from "next/link";
import React from "react";

const Todo = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div>
      <div>todo details</div>
      <Link href={"/todos"}>go to todolist</Link>
      <TodoFetchData id={id} />
    </div>
  );
};

export default Todo;
