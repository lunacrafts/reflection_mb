import { container, inject, registry, singleton } from "tsyringe";
import { envs } from "../envs";
import { LunaDatabase } from "./luna.database";

@registry(
  [
    {
      token: LunaDatabase,
      useFactory: () => {
        return new LunaDatabase(envs.MONGODB_URI);
      }
    }
  ]
)
@singleton()
export class Luna {
  constructor(
    @inject(LunaDatabase) private readonly db: LunaDatabase
  ) { }

  async initialize() {
    await this.db.connect();
  }
}

container.register<Luna>("Luna", { useClass: Luna });
