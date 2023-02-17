import { t } from "../../../../trpc";
import { withSession } from "../../../procedures/withSession.procedure";

export const login = t.router({
  login: withSession.query(({ ctx: { luna, account } }) => {
  })
})
