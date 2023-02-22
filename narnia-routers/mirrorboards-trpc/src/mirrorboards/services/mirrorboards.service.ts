import { Luna } from "luna-sdk";
import { Mirrorboards } from "mirrorboards-sdk";
import { ObjectId } from "mongodb";
import { inject, injectable } from "tsyringe";
import { z } from "zod";
import { MirrorboardsCollections } from "../mirrorboards.collections";
import { MirrorboardsServiceDTO } from "./mirrorboards.service.dto";

@injectable()
export class MirrorboardsService {
  constructor(
    @inject(MirrorboardsCollections) private readonly collections: MirrorboardsCollections,
  ) { }

  async findOne(_id: ObjectId) {
    const doc = await this.collections.mirrorboards.findOne({ _id });
    return doc;
  }

  async create(
    mirrorboard: z.infer<typeof MirrorboardsServiceDTO.create.Mirrorboard>,
    createdBy: Luna.User,
  ) {
    try {
      const { acknowledged, insertedId } = await this.collections.mirrorboards.insertOne({
        _id: new ObjectId(),
        ...mirrorboard,
        createdBy: createdBy,
      });

      if (acknowledged) {
        const doc = await this.findOne(insertedId);
        return doc;
      }
    } catch (e) {
      console.log(e);
    }
  }
}
