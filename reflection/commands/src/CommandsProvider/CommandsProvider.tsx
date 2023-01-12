import React, { PropsWithChildren } from "react";
import { createStore, StoreApi } from "zustand";
import { CommandsSlice, createCommandsSlice } from "./store/createCommandsSlice";

export type CommandsStore = CommandsSlice;

const createCommandsStore = () => {
  const store = createStore<CommandsStore>()((...a) => ({
    ...createCommandsSlice(...a),
  }));

  return store;
};

export const CommandsContext = React.createContext<StoreApi<CommandsStore>>(null!);

export const CommandsProvider: React.FC<PropsWithChildren> = (props) => {
  const store = React.useRef(createCommandsStore()).current;

  return <CommandsContext.Provider value={store}>{props.children}</CommandsContext.Provider>;
};
