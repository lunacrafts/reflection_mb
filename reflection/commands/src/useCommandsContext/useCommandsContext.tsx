import React from "react";
import { CommandsContext } from "../CommandsProvider/CommandsProvider";

export const useCommandsContext = () => {
  const context = React.useContext(CommandsContext);

  if (!context) {
    throw new Error("ExtensionContext not found");
  }

  return context;
};
