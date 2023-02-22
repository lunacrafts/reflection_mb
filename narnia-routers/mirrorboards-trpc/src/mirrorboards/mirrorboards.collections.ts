import { Collection } from "mongodb";
import { inject, injectable } from "tsyringe";
import { MirrorboardsDatabase } from "./mirrorboards.database";
import { MirrorboardModel } from "./models/Mirrorboard.model";

@injectable()
export class MirrorboardsCollections {
  mirrorboards: Collection<MirrorboardModel>

  constructor(
    @inject(MirrorboardsDatabase) private readonly database: MirrorboardsDatabase,
  ) {
    this.mirrorboards = this.database.db.collection<MirrorboardModel>('mirrorboards');
  }
}
