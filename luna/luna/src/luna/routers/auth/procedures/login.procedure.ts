import { Luna } from "luna-sdk";
import { z } from "zod";
import { t } from "../../../../trpc";
import { withLuna } from "../../../procedures/withLuna.procedure";

const input = z.void();

const output = z.object({
  // account: Luna.Account
});

export const login = t.router({
  login: withLuna.input(input).output(output)
    .meta({
      openapi: {
        method: 'GET',
        path: '/auth/login',
        protect: true,
        tags: ['auth']
      }
    }).query(() => {
      return {}
    })
})
