import * as trpcNext from "@trpc/server/adapters/next";

import { router } from 'narnia-trpc';

export default trpcNext.createNextApiHandler({
  router: router
});
