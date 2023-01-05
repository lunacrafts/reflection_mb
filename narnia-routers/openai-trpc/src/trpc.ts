import { initTRPC } from "@trpc/server";
import { NarniaContext } from "narnia-trpc-context";

export const t = initTRPC.context<NarniaContext>().create();
export default t;
