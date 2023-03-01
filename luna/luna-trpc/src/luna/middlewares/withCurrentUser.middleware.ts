import { t } from "../../trpc";
import { User } from "../models/User.model";
import { withLuna } from "./withLuna.middleware";

export type WithCurrentUser = {
  currentUser?: User
}

export const withCurrentUser = withLuna.unstable_pipe(async ({ ctx: { luna, decodeJWTToken }, next }) => {
  const { sub: userId } = await decodeJWTToken();
  const currentUser = await luna.services.users.findOneById(userId);

  return next({
    ctx: {
      currentUser
    }
  });
});
