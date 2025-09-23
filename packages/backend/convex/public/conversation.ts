import { ConvexError, v } from "convex/values";
import { mutation, query } from "../_generated/server";
import { threadId } from "worker_threads";
import { supportAgent } from "../system/ai/agents/supportAgent";
import { saveMessage } from "@convex-dev/agent";
import { components } from "../_generated/api";

export const getOne = query({
    args: {
        conversationId: v.id("conversations"),
        contactSessionId: v.id("contactSessions"),
    },
    handler: async (ctx, args) => {
    const session = await ctx.db.get(args.contactSessionId);

        if(!session || session.expiresAt < Date.now()) {
            throw new ConvexError({
                code: "UNAUTHORIZED",
                message: "Invalid session"
            });
        }

        const conversationId = await ctx.db.get(args.conversationId);

        if(!conversationId){
            throw new ConvexError({
                code: "NOT_FOUND",
                message: "Conversation not found"
            })
        }
        if(conversationId.contactSessionId !== session._id){
            throw new ConvexError({
                code: "UNAUTHORIZED",
                message: "Incorrect session"
            })
        }

        return {
            _id: conversationId._id,
            status: conversationId.status,
            threadId: conversationId.threadId,
        }
    }
})

export const create = mutation({
    args: {
        organizationId: v.string(),
        contactSessionId: v.id("contactSessions"),
    },
    handler: async (ctx, args) => {
        const session = await ctx.db.get(args.contactSessionId);

        if(!session || session.expiresAt < Date.now()) {
            throw new ConvexError({
                code: "UNAUTHORIZED",
                message: "Invalid session"
            })
        }

        const { threadId } = await supportAgent.createThread(ctx, {
            userId: args.organizationId
        })

        await saveMessage(ctx, components.agent, {
            threadId,
            message: {
                role: "assistant",
                //TODO: Later modify to widget settings
                content: "Hello, How can i help you today?"
            }
        })

        const conversationId = await ctx.db.insert("conversations", {
            contactSessionId: session._id,
            status: "unresolved",
            organizationId: args.organizationId,
            threadId: threadId
        });

        return conversationId;
    }
})