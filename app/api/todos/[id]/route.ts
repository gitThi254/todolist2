import client from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const todo = await client.text.findUnique({ where: { id: id } });
  return NextResponse.json(todo);
}

export async function PUT(
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const updateTodo = await req.json();
  const todo = await client.text.update({
    where: { id: id },
    data: updateTodo,
  });
  return NextResponse.json(todo);
}
