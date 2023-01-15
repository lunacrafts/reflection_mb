import React, { PropsWithChildren } from "react";
import { createStore, StoreApi } from "zustand";

export type CraftLayoutStore = {};

const createCraftLayoutStore = () => {
  return createStore<CraftLayoutStore>()(() => ({}));
};

export const CraftLayoutContext = React.createContext<StoreApi<CraftLayoutStore>>(null!);

export const CraftLayoutProvider: React.FC<PropsWithChildren> = (props) => {
  const store = React.useRef(createCraftLayoutStore()).current;

  return <CraftLayoutContext.Provider value={store}>{props.children}</CraftLayoutContext.Provider>;
};
