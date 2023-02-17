import { container, inject, registry, singleton } from "tsyringe";
import { envs } from "../envs";
import { LunaDatabase } from "./luna.database";
import { LunaServices } from "./luna.services";

@registry(
  [
    {
      token: LunaDatabase,
      useFactory: () => {
        return new LunaDatabase(envs.MONGODB_URI);
      }
    },
    {
      token: LunaServices,
      useClass: LunaServices,
    }
  ]
)
@singleton()
export class Luna {
  constructor(
    @inject(LunaDatabase) private readonly db: LunaDatabase,
    @inject(LunaServices) public readonly services: LunaServices,
  ) { }

  async _initialize() {
    await this.db.connect();
  }
}

container.register<Luna>("Luna", { useClass: Luna });
