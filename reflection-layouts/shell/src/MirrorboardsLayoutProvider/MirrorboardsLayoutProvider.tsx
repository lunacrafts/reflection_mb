import React, { PropsWithChildren } from "react";
import { createStore, StoreApi, useStore } from "zustand";
import { createDrawerSlice, DrawerSlice } from "./drawer";

export type MirrorboardsLayoutStore = DrawerSlice;

const createMirrorboardsLayout = () =>
  createStore<MirrorboardsLayoutStore>()((...a) => ({
    ...createDrawerSlice(...a),
  }));

export const MirrorboardsLayoutContext = React.createContext<StoreApi<MirrorboardsLayoutStore>>(null!);

interface MirrorboardsLayoutProviderProps { }

export const MirrorboardsLayoutProvider: React.FC<PropsWithChildren<MirrorboardsLayoutProviderProps>> = (props) => {
  const store = React.useRef(createMirrorboardsLayout()).current;

  return <MirrorboardsLayoutContext.Provider value={store}>{props.children}</MirrorboardsLayoutContext.Provider>;
};
