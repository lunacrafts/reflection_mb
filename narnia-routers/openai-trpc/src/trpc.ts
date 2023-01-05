import { initTRPC } from "@trpc/server";
// import type { NarniaContext } from ''

export const t = initTRPC.context<NarniaContext>().create();
export default t;
