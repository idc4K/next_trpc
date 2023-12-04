import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const todoRouter = createTRPCRouter({
  all: protectedProcedure.query(async ({ ctx }) => {
    const todos = await ctx.db.todo.findMany({
      where: {
        userId: ctx.session.user.id
      }
    })
    console.log("Todos", todos)
    return [
      {
        id: 'fake',
        texte: 'fake text',
        done: false
      },
      {
        id: 'fake2',
        texte: 'fake text2',
        done: false
      }
    ];
  }),
});
