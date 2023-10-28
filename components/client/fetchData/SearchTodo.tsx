"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
type Search = {
  keyword: string;
};
const SearchTodo = () => {
  const router = useRouter();
  const form = useForm<Search>({
    defaultValues: {
      keyword: "",
    },
  });
  const { register, handleSubmit, reset } = form;
  const onSubmit = (data: Search) => {
    if (data.keyword) {
      router.push(`/todos?keyword=${data.keyword}`);
    } else {
      router.push("/todos");
    }
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='search todo ...'
        {...register("keyword")}
      />
      <button>search</button>
    </form>
  );
};

export default SearchTodo;
