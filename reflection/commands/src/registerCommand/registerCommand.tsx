import React from "react";
import { useStore } from "zustand";
import { Command } from "../types";
import { useCommandsStore } from "../useCommandsStore/useCommandsStore";
import { useExtension } from "@reflection/extension";

export const registerCommand = (namespace: string, command: Command) => {
  const extension = useExtension();

  const store = useCommandsStore();
  const { register, unregister } = useStore(store, (state) => state.commands.actions);

  React.useEffect(() => {
    register(extension.getCommandNamespace(namespace), command);

    return () => unregister(extension.getCommandNamespace(namespace));
  }, []);

  return null;
};
