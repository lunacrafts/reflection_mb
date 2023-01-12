import produce from "immer";
import { StateCreator } from "zustand";
import { Command } from "../../types";
import { CommandsStore } from "../CommandsProvider";

export type CommandsSlice = {
  commands: {
    list: Record<string, Command>;
    actions: {
      register: (namespace: string, command: Command) => void;
      unregister: (namespace: string) => void;
    };
  };
};

export const createCommandsSlice: StateCreator<CommandsStore, [], [], CommandsSlice> = (set) => {
  return {
    commands: {
      list: {},
      actions: {
        register: (namespace, command) => {},
        unregister: (namespace) => {},
      },
    },
  };
};
