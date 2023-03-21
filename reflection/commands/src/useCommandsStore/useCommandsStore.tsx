import React from "react";
import { useStore } from "zustand";
import { CommandsContext } from "../CommandsProvider/CommandsProvider";

export const useCommandsStore = () => {
  const context = React.useContext(CommandsContext);
  const store = useStore(context);

  return store;
};
