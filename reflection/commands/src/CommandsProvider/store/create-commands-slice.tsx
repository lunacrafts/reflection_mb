import produce from "immer";
import { StateCreator } from "zustand";
import { CommandsStore } from "../CommandsProvider";

export type CommandsSlice = {};

export const createCommandsSlice: StateCreator<CommandsStore, [], [], CommandsSlice> = (set) => {
  return {};
};
