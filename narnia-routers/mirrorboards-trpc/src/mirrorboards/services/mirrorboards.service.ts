import { inject, injectable } from "tsyringe";
import { MirrorboardsCollections } from "../mirrorboards.collections";

@injectable()
export class MirrorboardsService {
  constructor(
    @inject(MirrorboardsCollections) private readonly collections: MirrorboardsCollections,
  ) { }

  async create() {

  }
}
