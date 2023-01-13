import React, { PropsWithChildren } from "react";
import { ReflectionExtension } from "../ReflectionExtension/ReflectionExtension";

export const ReflectionExtensionContext = React.createContext<ReflectionExtension>(null!);

interface ReflectionExtensionProviderProps {
  extension: ReflectionExtension;
}

export const ReflectionExtensionProvider: React.FC<PropsWithChildren<ReflectionExtensionProviderProps>> = (props) => {
  const extension = React.useRef(props.extension).current;

  return (
    <ReflectionExtensionContext.Provider value={extension}>
      {props.extension.component}
      {props.children}
    </ReflectionExtensionContext.Provider>
  );
};
