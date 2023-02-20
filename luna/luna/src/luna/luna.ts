import { container, inject, registry, singleton } from "tsyringe";
import { envs } from "../envs";
import { LunaCollections } from "./luna.collections";
import { LunaDatabase } from "./luna.database";
import { LunaServices } from "./luna.services";

@registry(
  [
    {
      token: LunaDatabase,
      useFactory: () => {
        return new LunaDatabase(envs.MONGODB_URI, envs.MONGODB_DB_NAME);
      }
    },
    {
      token: LunaServices,
      useClass: LunaServices,
    },
    {
      token: LunaCollections,
      useClass: LunaCollections,
    }
  ]
)
@singleton()
export class Luna {
  constructor(
    @inject(LunaDatabase) public readonly db: LunaDatabase,
    @inject(LunaServices) public readonly services: LunaServices,
    @inject(LunaCollections) public readonly collections: LunaCollections,
  ) { }

  async _initialize() {
    await this.db.connect();
  }
}

container.register<Luna>("Luna", { useClass: Luna });
