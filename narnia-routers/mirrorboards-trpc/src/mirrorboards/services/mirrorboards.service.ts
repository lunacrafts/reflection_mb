import { Luna } from "luna-sdk";
import { Mirrorboards } from "mirrorboards-sdk";
import { inject, injectable } from "tsyringe";
import { z } from "zod";
import { MirrorboardsCollections } from "../mirrorboards.collections";
import { MirrorboardsServiceDTO } from "./mirrorboards.service.dto";

@injectable()
export class MirrorboardsService {
  constructor(
    @inject(MirrorboardsCollections) private readonly collections: MirrorboardsCollections,
  ) { }

  async create(
    mirrorboard: z.infer<typeof MirrorboardsServiceDTO.create.Mirrorboard>,
    createdBy: Luna.User,
  ) {
    console.log(mirrorboard);
    console.log(createdBy);

    // this.collections.mirrorboards.insertOne({ title, isPublic });
  }
}
