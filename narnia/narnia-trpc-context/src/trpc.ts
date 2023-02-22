import { inferAsyncReturnType, initTRPC, TRPCError } from "@trpc/server"
import superjson from 'superjson';
import { Luna } from "luna-sdk"
import { createContext } from "./createContext";

export type WithCurrentUser = {
  currentUser?: Luna.User
}

export type NarniaContext = inferAsyncReturnType<typeof createContext> & WithCurrentUser;

export const t = initTRPC.context<NarniaContext>().create({
  transformer: superjson
});
