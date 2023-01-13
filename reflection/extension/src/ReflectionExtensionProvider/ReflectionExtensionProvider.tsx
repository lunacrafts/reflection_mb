import React, { PropsWithChildren } from "react";
import { ReflectionExtension } from "../ReflectionExtension/ReflectionExtension";

export const ExtensionContext = React.createContext<ReflectionExtension>(null!);

interface ReflectionExtensionProviderProps {
  extension: ReflectionExtension;
}

export const ReflectionExtensionProvider: React.FC<PropsWithChildren<ReflectionExtensionProviderProps>> = (props) => {
  const extension = React.useRef(props.extension).current;

  return <ExtensionContext.Provider value={extension}>{props.children}</ExtensionContext.Provider>;
};
