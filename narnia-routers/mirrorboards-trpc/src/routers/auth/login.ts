import t from "../../trpc";
import { z } from 'zod';
import { Mirrorboards } from 'mirrorboards-sdk'

const input = z.void();

const output = z.object({
  account: Mirrorboards.Account
});

export const login = t.router({
  login: t.procedure.input(input).output(output).query(async ({ ctx }) => {
    return {
      account: {
        id: 'luna_id',
        email: 'lunacrafts@protonmail.com'
      }
    }
  })
});
