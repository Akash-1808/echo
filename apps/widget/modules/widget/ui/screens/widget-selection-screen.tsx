"use client"

import { Button } from "@workspace/ui/components/button";
import { WidgetHeader } from "../components/widget-header";
import { ChevronRightIcon, MessageSquareIcon } from "lucide-react";
import { useAtomValue, useSetAtom } from "jotai";
import { contactSessionIdAtomFamily, conversationIdAtom, errorMessageAtom, OrganizationIdAtom, screenAtom } from "../../atoms/widget-atoms";
import { useMutation } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { useState } from "react";

export const WidgetSelectionScreen = () => {
    console.log("Render Selection Screen")
    const setScreen = useSetAtom(screenAtom);
    const organizationId = useAtomValue(OrganizationIdAtom);
    const contactSessionId = useAtomValue(
        contactSessionIdAtomFamily(organizationId || "")
    );
    const setErrorMessage = useSetAtom(errorMessageAtom);
    const createContactSession = useMutation(api.public.conversation.create);
    const [isPending, setIsPending] = useState(false)
    const setConversationId = useSetAtom(conversationIdAtom);
    const handleNewConversation = async () =>{
       if(!contactSessionId){
        setScreen("auth");
        return;   
       } 

       if(!organizationId) {
        setScreen("error");
        setErrorMessage("Missing Organization ID");
        return;
       }

       try {
        const conversationId = await createContactSession({
            contactSessionId,
            organizationId,
        });
        setConversationId(conversationId);
        setScreen("chat");
       } catch (error) {
        setScreen("auth");
       } finally {
        setIsPending(false);
       }
     }

    return (
        <>
        <WidgetHeader >
            <div className="flex flex-col justify-between gap-y-2 px-2 py-6 font-semibold">
                    <p className=" text-3xl">
                        Hi there! 👋
                    </p>
                    <p className="text-lg">
                        Let&apos;s get you started 
                    </p>
                </div>
        </WidgetHeader>
        <div className="flex flex-1 flex-col items-center justify-center gap-y-4 p-4 text-muted-foreground">
            <Button 
                  className="h-16 w-full justify-between bg-white pl-6 pr-6"
                  variant={"outline"}
                  onClick={handleNewConversation}>
                <div className="flex items-center gap-x-3">
                    <MessageSquareIcon className="size-4" />
                    <span>Start chat</span>
                </div>
                <ChevronRightIcon />
            </Button>
        </div>
        </>
    )
}