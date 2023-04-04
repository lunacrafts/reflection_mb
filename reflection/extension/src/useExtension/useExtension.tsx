import React from "react";
import { ContextNotFound } from 'errors';
import { ReflectionExtensionContext } from "../ReflectionExtensionProvider/ReflectionExtensionProvider";

export const useExtension = () => {
  const context = React.useContext(ReflectionExtensionContext);

  if (!context) {
    throw new ContextNotFound('ExtensionContext');
  }

  return context;
};
