export class ContextNotFound extends Error {
  constructor(context: string) {
    super(`${context} not found`);
    this.name = "ContextNotFound";
  }
}
