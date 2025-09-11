import { ConvexError, v } from "convex/values";
import { mutation, query } from "../_generated/server";
import { threadId } from "worker_threads";

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
            return;
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


        const threadId = "123"; //temporary
        const conversationId = await ctx.db.insert("conversations", {
            contactSessionId: session._id,
            status: "unresolved",
            organizationId: args.organizationId,
            threadId: threadId
        });

        return conversationId;
    }
})