import { MongoClient } from "mongodb"
import { envs } from "../envs"

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(envs.MONGODB_URI);
    global._mongoClientPromise = client.connect();
  }

  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(envs.MONGODB_URI);
  clientPromise = client.connect();
}

export default clientPromise
