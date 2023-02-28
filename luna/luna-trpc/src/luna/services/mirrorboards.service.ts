import mongoose from "mongoose";
import { inject, injectable } from "tsyringe";
import { ulid } from 'ulid';
import { LunaModels } from "../luna.models";

@injectable()
export class MirrorboardsService {
  constructor(
    @inject(LunaModels) private readonly models: LunaModels,
  ) { }

  async findAllPublic() {
    const { Mirrorboard } = this.models;

    const docs = await Mirrorboard.find({
      isPublic: true,
    });

    return docs;
  }

  async create(isPublic: boolean) {
    const mirrorboard = new this.models.Mirrorboard({
      id: ulid(),
      title: 'XD',
      isPublic
    });

    const doc = await mirrorboard.save();
    return doc;
  }
}
