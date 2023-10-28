import client from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const newTodo = await req.json();
  const todo = await client.text.create({
    data: newTodo,
  });
  return NextResponse.json(todo, { status: 201 });
}

export async function GET(req: NextRequest) {
  const keyword = (await req.nextUrl.searchParams.get("keyword")) || undefined;
  const todos = await client.text.findMany({
    where: {
      text: {
        contains: keyword,
        mode: "insensitive",
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return NextResponse.json(todos);
}

export async function DELETE(req: NextRequest) {
  const id = await req.nextUrl.searchParams.get("id")?.toString();
  await client.text.delete({ where: { id: id } });
  return NextResponse.json({ message: "delete text succesffully" });
}
