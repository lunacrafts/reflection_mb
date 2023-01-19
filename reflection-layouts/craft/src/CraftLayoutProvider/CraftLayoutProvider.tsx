import React, { PropsWithChildren } from "react";
import { createStore, StoreApi } from "zustand";
import { createSlotsSlice, SlotsSlice } from "./store/createSlotsSlice";

export type CraftLayoutStore = SlotsSlice;

const createCraftLayoutStore = () => {
  return createStore<CraftLayoutStore>()((...a) => ({
    ...createSlotsSlice(...a),
  }));
};

export const CraftLayoutContext = React.createContext<StoreApi<CraftLayoutStore>>(null!);

export const CraftLayoutProvider: React.FC<PropsWithChildren> = (props) => {
  const store = React.useRef(createCraftLayoutStore()).current;

  return <CraftLayoutContext.Provider value={store}>{props.children}</CraftLayoutContext.Provider>;
};
