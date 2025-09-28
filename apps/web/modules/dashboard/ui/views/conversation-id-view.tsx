"use client"
import { api } from "@workspace/backend/_generated/api"
import { Id } from "@workspace/backend/_generated/dataModel"
import { Button } from "@workspace/ui/components/button"
import { useMutation, useQuery } from "convex/react"
import { MoreHorizontalIcon, Wand2Icon } from "lucide-react"
import { useThreadMessages, toUIMessages } from "@convex-dev/agent/react"
import {
  AIConversation,
  AIConversationContent,
  AIConversationScrollButton
} from "@workspace/ui/components/ai/conversation";

import {
    AIInput,
    AIInputButton,
    AIInputSubmit,
    AIInputTextarea,
    AIInputToolbar,
    AIInputTools
} from "@workspace/ui/components/ai/input"
import {
    AIMessage,
    AIMessageContent
} from "@workspace/ui/components/ai/message"

import { AIResponse } from "@workspace/ui/components/ai/response"

import { Form, FormField } from "@workspace/ui/components/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { useForm } from "react-hook-form"
import { DicebearAvatar } from "@workspace/ui/components/dicebear-avatar"

const formSchema = z.object({
    message: z.string().min(1, "Message is required"),
});

export const ConversationIdView = ({
    conversationId
}: {conversationId: Id<"conversations">}) => {

    const conversation = useQuery(api.private.conversation.getOne, {
        conversationId,
    })

    const messages = useThreadMessages(
        api.private.messages.getMany,
        conversation?.threadId ? { threadId: conversation.threadId} : "skip",
        { initialNumItems: 10 }
    )

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            message: "",
        }
    });

    const createMessage = useMutation(api.private.messages.create);

    const onSubmit = async( values: z.infer<typeof formSchema>) =>{
        try {
            await createMessage({
                prompt: values.message,
                conversationId: conversationId
            })
            form.reset();
        } catch (error){
            console.error(error)
        }
        
    }

return ( <div className="flex flex-col bg-muted">
  <header className="flex items-center justify-between border-b bg-background p-2.5">
    <Button 
    size={"sm"}
    variant={"ghost"}>
        <MoreHorizontalIcon />
    </Button>
  </header>

  <AIConversation className="max-h-[100vh-180px]" >
    <AIConversationContent>
        {toUIMessages(messages?.results ?? [] ).map((messages)=>(
            <AIMessage
            //In reverse, because we are watching from "assitant" prespective
            from={messages.role === "user" ? "assistant" : "user" }
            key={messages.id}
            >
                <AIMessageContent>
                    <AIResponse>
                        {messages.content}
                    </AIResponse>
                </AIMessageContent>
                {messages.role === "user" && (
                    <DicebearAvatar 
                    seed={conversation?.contactSessionId ?? "user"}
                    size={30}
                    />
                )}
            </AIMessage>
        ))}
    </AIConversationContent>
    <AIConversationScrollButton />
  </AIConversation>

  <div className="p-2">
    <Form {...form}>
        <AIInput onSubmit={form.handleSubmit(onSubmit)}>
            <FormField 
            control={form.control}
            disabled={conversation?.status === "resolved"}
            name="message"
            render={({ field }) => (
                <AIInputTextarea 
                disabled={
                    conversation?.status === "resolved" || 
                    form.formState.isSubmitting
                }
                onChange={field.onChange}
                onKeyDown={(e)=>{
                    if(e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        form.handleSubmit(onSubmit)();
                    }
                }}
                placeholder={conversation?.status === "resolved" ? "This conversation is resolved" : "Type your response as an operator..."}
                value={field.value}/>
            )}/>
            <AIInputToolbar>
                <AIInputTools>
                    <AIInputButton>
                        <Wand2Icon />
                        Enhance
                    </AIInputButton>
                </AIInputTools>
                <AIInputSubmit 
                disabled={conversation?.status === "resolved" || form.formState.isValid
                    || form.formState.isSubmitting
                    //TODO: OR if is enhancing prompt
                }
                status="ready"
                type="submit"/>
            </AIInputToolbar>
        </AIInput>
    </Form>
  </div>
</div>)
}