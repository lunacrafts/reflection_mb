import { inferAsyncReturnType, initTRPC, TRPCError } from "@trpc/server"
import { Luna } from "luna-sdk"
import { createContext } from "./createContext";

export type WithCurrentUser = {
  user?: Luna.User
}

export type NarniaContext = inferAsyncReturnType<typeof createContext> & WithCurrentUser;

export const t = initTRPC.context<NarniaContext>().create();
