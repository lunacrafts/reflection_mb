import { z } from "zod";

export const MirrorboardsServiceDTO = {
  create: {
    Mirrorboard: z.object({
      id: z.string().nullish(),
      title: z.string().min(3),
      isPublic: z.boolean().default(false),
    })
  }
}
