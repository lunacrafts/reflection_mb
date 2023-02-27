import { container, inject, registry, singleton } from "tsyringe";
import { env } from "env";
import { MirrorboardsCollections } from "./mirrorboards.collections";
import { MirrorboardsDatabase } from "./mirrorboards.database";
import { LunaServices } from "./mirrorboards.services";

@registry(
  [
    {
      token: MirrorboardsDatabase,
      useFactory: () => {
        return new MirrorboardsDatabase(env.LUNA_MONGODB_URI, env.LUNA_MONGODB_DB_NAME);
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
