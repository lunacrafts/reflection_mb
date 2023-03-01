import { TRPCError } from "@trpc/server";
import { t } from "../../trpc";
import { User } from "../models/User.model";
import { withLuna } from "./withLuna.middleware";

export type WithCurrentUserProtected = {
  currentUser?: User
}

export const withCurrentUserProtected = withLuna.unstable_pipe(async ({ ctx: { luna, decodeJWTToken }, next }) => {
  const { sub: userId } = await decodeJWTToken();
  const currentUser = await luna.services.users.findOneById(userId);

  if (!currentUser) {
    throw new TRPCError({
      code: 'UNAUTHORIZED'
    });
  }

  return next({
    ctx: {
      currentUser
    }
  });
});
