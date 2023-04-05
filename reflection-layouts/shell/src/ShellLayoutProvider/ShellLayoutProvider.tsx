import React, { PropsWithChildren } from "react";
import { createStore, StoreApi, useStore } from "zustand";
import { createDrawerSlice, DrawerSlice } from "./drawer";

export type ShellLayoutStore = DrawerSlice;

const createShellLayout = () =>
  createStore<ShellLayoutStore>()((...a) => ({
    ...createDrawerSlice(...a),
  }));

export const ShellLayoutContext = React.createContext<StoreApi<ShellLayoutStore>>(null!);

interface ShellLayoutProviderProps { }

export const ShellLayoutProvider: React.FC<PropsWithChildren<ShellLayoutProviderProps>> = (props) => {
  const store = React.useRef(createShellLayout()).current;

  return <ShellLayoutContext.Provider value={store}>{props.children}</ShellLayoutContext.Provider>;
};
