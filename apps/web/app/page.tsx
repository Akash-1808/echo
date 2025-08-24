"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import { useMutation, useQuery, Authenticated, Unauthenticated } from "convex/react"
import { api } from "@workspace/backend/_generated/api"
import { Button } from "@workspace/ui/components/button";
export default function Page() {
const users = useQuery(api.users.getMany);
const addUser = useMutation(api.users.add)
  return (<><Authenticated>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <p>apps/web</p>
        <UserButton />
        <Button>Add</Button>
        <div className="max-w-sm w-full max-auto"></div>
        {JSON.stringify(users)}
      </div>
    </Authenticated>
    <Unauthenticated>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <p>Please sign in to view this content.</p>
        <SignInButton>Signin</SignInButton>
      </div>
      
    </Unauthenticated>
  </>
  )
}
