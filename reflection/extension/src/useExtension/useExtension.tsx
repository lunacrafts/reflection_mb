import { ContextNotFound } from "@reflection/core";
import React from "react";
import { ReflectionExtensionContext } from "../ReflectionExtensionProvider/ReflectionExtensionProvider";

export const useExtension = () => {
  const context = React.useContext(ReflectionExtensionContext);

  if (!context) {
    throw new ContextNotFound("ReflectionLayoutContext");
  }

  return context;
};
