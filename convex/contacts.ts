import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    company: v.optional(v.string()),
    message: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const contact = await ctx.db.insert("contacts", {
      ...args,
      createdAt: Date.now(),
    });
    return contact;
  },
});

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("contacts").collect();
  },
});