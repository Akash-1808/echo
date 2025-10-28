import { v } from "convex/values";
import { internal } from "../_generated/api";
import { action } from "../_generated/server";
import { getSecretValue, parseSecretString } from "../lib/secterts";

export const getSecrets = action({
    args: {
        organizationId: v.string()
    },
    handler: async (ctx, args) => {
       const plugins = await ctx.runQuery(
        internal.system.plugin.getByOrganizationIdAndService,
        {
            organizationId: args.organizationId,
            service: "vapi"
        }
       );

       if(!plugins){
        return null;
       }

       const secretName = plugins.secretName;
       const secret = await getSecretValue(secretName);

       const secretData = parseSecretString<{
        privateApiKey: string;
        publicApiKey: string;
       }>(secret);

       if(!secretData){
        return null;
       }

       if(!secretData.publicApiKey || !secretData.privateApiKey){
        return null;
       }

       return {
        publicApiKey: secretData.publicApiKey,
       }
    }
})