import { query,mutation } from "./_generated/server"
export const getMany = query({
    args: {},
    handler: async (ctx) => {
        const users = await ctx.db.query("user").collect(); 

        return users;
    }

})

export const add =  mutation({
    args: {
        
    },
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Not authenticated");
        }

        const orgId = identity.orgId as string;

        if(!orgId){
            throw new Error("No organization found");
        }

        throw new Error("Error tracking test")

        const userId = await ctx.db.insert("user", {
            name: "Akash",
        });
        return userId;
    }
});