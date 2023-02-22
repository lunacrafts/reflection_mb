import { initTRPC } from "@trpc/server";
import superjson from 'superjson';
import { NarniaContext } from "narnia-trpc-context";

export const t = initTRPC.context<NarniaContext>().create({
  transformer: superjson,
});

export default t;
