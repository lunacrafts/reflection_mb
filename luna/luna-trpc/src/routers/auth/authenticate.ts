import t from "../../trpc";

export const authenticate = t.router({
  authenticate: t.procedure.mutation(async () => {
    return {
      'status': "OK"
    }
  })
});
