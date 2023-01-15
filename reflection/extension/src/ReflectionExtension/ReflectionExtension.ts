export class ReflectionExtension {
  scope: string;
  component: JSX.Element;

  constructor({ scope, component }: { scope: string, component: JSX.Element }) {
    this.scope = scope;
    this.component = component;
  }

  getCommandNamespace(commandName: string) {
    return `${this.scope}#command#${commandName}`;
  }
}
