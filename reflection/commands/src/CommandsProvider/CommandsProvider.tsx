import React, { PropsWithChildren } from "react";
import { createStore, StoreApi } from "zustand";
import { CommandsSlice, createCommandsSlice } from "./commands";

export type CommandsStore = CommandsSlice;

export const CommandsContext = React.createContext<StoreApi<CommandsStore>>(null!);

export const createCommandsStore = () => {
  return createStore<CommandsStore>()((...args) => {
    return {
      ...createCommandsSlice(...args),
    };
  });
};

export const CommandsProvider: React.FC<PropsWithChildren> = (props) => {
  const store = React.useRef(createCommandsStore()).current;

  return <CommandsContext.Provider value={store}>{props.children}</CommandsContext.Provider>;
};
