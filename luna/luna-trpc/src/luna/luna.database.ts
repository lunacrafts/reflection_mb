import { singleton } from "tsyringe";

@singleton()
export class LunaDatabase {
  constructor(uri: string, db: string) {
  }

  async connect() {
  }
}
