import { z } from "zod";
import { inject, injectable } from "tsyringe";
import { ulid } from 'ulid';
import { LunaModels } from "../luna.models";
import { MirrorboardsServiceDTO } from "./mirrorboards.service.dto";

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

  async create(input: z.infer<typeof MirrorboardsServiceDTO.create.input>) {
    const mirrorboard = new this.models.Mirrorboard(input);
    const doc = await mirrorboard.save();

    return doc;
  }
}
