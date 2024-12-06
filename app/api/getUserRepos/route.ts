import { NextResponse } from "next/server";
import { Repo } from "@/interfaces/repo"

export async function GET(){
  const data : Repo[] = [
    {id : 1, name : "Repo 1"},
    {id : 2, name : "Repo 2"},
    {id : 3, name : "Repo 3"},
    {id : 4, name : "Repo 4"},
    {id : 5, name : "Repo 5"},
  ];

  return NextResponse.json(data);
}