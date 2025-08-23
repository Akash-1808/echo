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
        const userId = await ctx.db.insert("user", {
            name: "Akash",
        });
        return userId;
    }
});