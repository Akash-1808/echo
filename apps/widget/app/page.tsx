"use client";
import { useQuery } from "convex/react"
import { api } from "@workspace/backend/_generated/api"
export default function Page() {
const users = useQuery(api.users.getMany);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>apps/web</p>
      <div className="max-w-sm w-full max-auto"></div>
      {JSON.stringify(users)}
    </div>
  )
}
