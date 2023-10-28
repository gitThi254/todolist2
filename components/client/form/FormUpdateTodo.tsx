"use client";
import { useUpdateTodo } from "@/hooks/useTodos";
import React from "react";
import { useForm } from "react-hook-form";

const FormUpdateTodo = ({ id, data }: { id: string; data: UpdateTodo }) => {
  const { mutate: updateTodo, isPending } = useUpdateTodo(id);
  const form = useForm<UpdateTodo>({
    defaultValues: data,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;
  const onSubmit = (data: UpdateTodo) => {
    delete data.id;
    updateTodo({ id, data });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='add todo'
        {...register("text", { required: "ban chua nhap text ? " })}
      />
      <button disabled={isPending}>
        {isPending ? "loading..." : "update"}
      </button>

      <p>
        {errors ? (
          <span className='text-xl text-red-500'>{errors.text?.message}</span>
        ) : null}
      </p>
    </form>
  );
};

export default FormUpdateTodo;
