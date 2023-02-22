import { container, inject, registry, singleton } from "tsyringe";
import { envs } from "../envs";
import { MirrorboardsCollections } from "./mirrorboards.collections";
import { MirrorboardsDatabase } from "./mirrorboards.database";
import { LunaServices } from "./mirrorboards.services";

@registry(
  [
    {
      token: MirrorboardsDatabase,
      useFactory: () => {
        return new MirrorboardsDatabase(envs.MIRRORBOARDS_MONGODB_URI, envs.MIRRORBOARDS_MONGODB_DB_NAME);
      }
    },
    {
      token: LunaServices,
      useClass: LunaServices,
    },
    {
      token: MirrorboardsCollections,
      useClass: MirrorboardsCollections,
    }
  ]
)
@singleton()
export class Mirrorboards {
  constructor(
    @inject(MirrorboardsDatabase) public readonly db: MirrorboardsDatabase,
    @inject(LunaServices) public readonly services: LunaServices,
    @inject(MirrorboardsCollections) public readonly collections: MirrorboardsCollections,
  ) { }

  async _initialize() {
    await this.db.connect();
  }
}

container.register<Mirrorboards>("Mirrorboards", { useClass: Mirrorboards });
