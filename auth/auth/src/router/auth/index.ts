import { t } from "../../trpc";

export const auth = t.router({
  me: t.procedure.query(async () => {
    return {
      username: 'LunaCrafts'
    }
  }),
});
