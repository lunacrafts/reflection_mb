import { WithId } from "mongodb"

export const serialize = <T>(item: WithId<T>) => {
  return {
    ...item,
    id: item._id.toString(),
  }
}
