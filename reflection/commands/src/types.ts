export type Command<N extends string, T extends Record<string, Function>> = {
  namespace: N
  actions: {
    [key in keyof T]: {
      description: string
      action: T[key]
    }
  }
}
