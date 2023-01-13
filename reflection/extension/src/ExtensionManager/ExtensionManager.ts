export class ExtensionManager {
  namespace: string;

  constructor({ namespace }: { namespace: string }) {
    this.namespace = namespace;
  }

  getCommandNamespace(commandName: string) {
    return `${this.namespace}#command#${commandName}`;
  }
}
