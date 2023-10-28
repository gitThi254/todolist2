import React from "react";

const TodoDetailschildren = ({ todo }: { todo: Todo }) => {
  return (
    <div>
      <div>{todo.text}</div>
      <div>{todo.createdAt}</div>
      <div>{todo.updatedAt}</div>
    </div>
  );
};

export default TodoDetailschildren;
