import React from "react";
import { CommandsContext } from "../CommandsProvider/CommandsProvider";

export const useCommandsStore = () => {
  const context = React.useContext(CommandsContext);

  if (!context) {
    throw new Error("CommandsContext not found");
  }

  return context;
};
