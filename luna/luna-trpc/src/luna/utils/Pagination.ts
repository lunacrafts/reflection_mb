import { z } from "zod"

export const PaginationInput = z.object({
  limit: z.number().min(1).default(10),
  cursor: z.number().default(0),
});

export type PaginationInput = z.infer<typeof PaginationInput>

export class Pagination {
  constructor(
    private input: PaginationInput,
  ) { }

  get pagination() {
    const { limit = 10, cursor = 0 } = this.input;

    return {
      limit,
      skip: limit * cursor
    }
  }

  get nextCursor() {
    return this.input.cursor + 1;
  }
}
