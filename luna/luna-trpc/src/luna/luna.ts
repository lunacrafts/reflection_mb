import { container, inject, registry, singleton } from "tsyringe";
import { env } from 'env';
import { LunaModels } from "./luna.models";
import { LunaDatabase } from "./luna.database";
import { LunaServices } from "./luna.services";

@registry(
  [
    {
      token: LunaDatabase,
      useFactory: () => {
        return new LunaDatabase(env.LUNA_MONGODB_URI, env.LUNA_MONGODB_DB_NAME);
      }
    },
    {
      token: LunaServices,
      useClass: LunaServices,
    },
    {
      token: LunaModels,
      useClass: LunaModels,
    }
  ]
)
@singleton()
export class Luna {
  constructor(
    @inject(LunaDatabase) public readonly db: LunaDatabase,
    @inject(LunaServices) public readonly services: LunaServices,
    @inject(LunaModels) public readonly collections: LunaModels,
  ) { }

  async _initialize() {
    await this.db.connect();
  }
}

container.register<Luna>("Luna", { useClass: Luna });
