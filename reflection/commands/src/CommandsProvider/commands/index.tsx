import produce from "immer";
import { StateCreator } from "zustand";
import { CommandsStore } from "../CommandsProvider";

export interface CommandsSlice {
  commands: {

  };
}

export const createCommandsSlice: StateCreator<CommandsStore, [], [], CommandsSlice> = (set) => {
  return {
    commands: {
    }
  };
};
