import React from "react";
import { ExtensionContext } from "../ExtensionProvider/ExtensionProvider";

export const useExtension = () => {
  const context = React.useContext(ExtensionContext);

  if (!context) {
    throw new Error("ExtensionContext not found");
  }

  return context;
};
