import React, { PropsWithChildren } from "react";
import { ExtensionManager } from "../ExtensionManager/ExtensionManager";

export const ExtensionContext = React.createContext<ExtensionManager>(null!);

interface ExtensionProviderProps {
  namespace: string;
}

export const ExtensionProvider: React.FC<PropsWithChildren<ExtensionProviderProps>> = (props) => {
  const extension = React.useRef(new ExtensionManager({ namespace: props.namespace })).current;

  return <ExtensionContext.Provider value={extension}>{props.children}</ExtensionContext.Provider>;
};
