"use client"

import { Button } from "@workspace/ui/components/button";
import { WidgetHeader } from "../components/widget-header";
import { ArrowLeftIcon, MenuIcon } from "lucide-react";
import { useAtomValue, useSetAtom } from "jotai";
import { contactSessionIdAtomFamily, conversationIdAtom, OrganizationIdAtom, screenAtom } from "../../atoms/widget-atoms";
import { useQuery } from "convex/react";
import { api } from "@workspace/backend/_generated/api";


export const WidgetChatScreen = () => {
    console.log("Render Chat Screen")
    const setScreen = useSetAtom(screenAtom);
    const setConversationId = useSetAtom(conversationIdAtom)
    const conversationId = useAtomValue(conversationIdAtom);
    const organizationId = useAtomValue(OrganizationIdAtom)
    const contactSessionId = useAtomValue(
        contactSessionIdAtomFamily(organizationId || "")
    )
    const conversation = useQuery(
        api.public.conversation.getOne,
        contactSessionId && conversationId
        ? {
            conversationId,
            contactSessionId,
        }: "skip"
    );

    const onBack = ()=> {
        setConversationId(null);
        setScreen("selection")
    }

    return (
        <>
        <WidgetHeader className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
                    <Button
                    size="icon"
                    variant={"transparent"}
                    onClick={onBack}
                    >
                        <ArrowLeftIcon />
                    </Button>
                    <p>Chat</p>
                </div>
                <Button
                size={"icon"}
                variant={"transparent"}
                >
                    <MenuIcon />
                </Button>
        </WidgetHeader>
        {conversation ?<div className="flex flex-1 flex-col gap-y-4 p-4 ">
            <p className="text-sm">
              {conversation ? JSON.stringify(conversation) : "No conversation"} 
            </p>
        </div> : <><div className="h-10 w-full animate-pulse bg-slate-300 rounded-2xl mt-5"></div>
                <div className="h-10 w-full animate-pulse bg-slate-300 rounded-2xl mt-5"></div>
                <div className="h-10 w-full animate-pulse bg-slate-300 rounded-2xl mt-5"></div></>}
        </>
    )
}