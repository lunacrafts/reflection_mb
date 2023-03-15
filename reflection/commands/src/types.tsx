export type CommandPayload<T> = {
  namespace: string
  exec: () => PromiseLike<T>
}

export type Command<T> = () => CommandPayload<T>
