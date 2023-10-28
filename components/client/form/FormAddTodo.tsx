"use client";
import { useCreateTodo } from "@/hooks/useTodos";
import React from "react";
import { useForm } from "react-hook-form";

const FormAddTodo = () => {
  const { mutate: createTodo, isPending } = useCreateTodo();
  const form = useForm<CreateTodo>({
    defaultValues: {
      text: "",
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;
  const onSubmit = (data: CreateTodo) => {
    createTodo(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='add todo'
        {...register("text", { required: "ban chua nhap text ? " })}
      />
      <button disabled={isPending}>
        {isPending ? "loading..." : "add to do"}
      </button>

      <p>
        {errors ? (
          <span className='text-xl text-red-500'>{errors.text?.message}</span>
        ) : null}
      </p>
    </form>
  );
};

export default FormAddTodo;
