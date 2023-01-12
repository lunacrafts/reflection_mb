import React from "react";
import { useStore } from "zustand";
import { Command } from "../types";
import { useCommandsStore } from "../useCommandsStore/useCommandsStore";

export const registerCommand = (command: Command) => {
  const store = useCommandsStore();

  const { register, unregister } = useStore(store, (state) => state.commands.actions);

  React.useEffect(() => {
    register(command.namespace, command);

    return () => unregister(command.namespace);
  }, []);

  return null;
};
