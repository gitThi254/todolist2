import SearchTodo from "@/components/client/fetchData/SearchTodo";
import TodosListFetchData from "@/components/client/fetchData/TodosFetchData";
import FormAddTodo from "@/components/client/form/FormAddTodo";
import Link from "next/link";
import React from "react";

const TodosListPage = () => {
  return (
    <div>
      <div>todo list</div>
      <Link href='/'> go to home</Link>
      <SearchTodo />
      <FormAddTodo />
      <TodosListFetchData />
    </div>
  );
};

export default TodosListPage;
