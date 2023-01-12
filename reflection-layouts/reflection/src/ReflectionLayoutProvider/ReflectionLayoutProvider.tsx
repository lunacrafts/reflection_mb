import React, { PropsWithChildren } from "react";
import { createStore, StoreApi } from "zustand";
import { ActivityBarSlice, createActivityBarSlice } from "./store/createActivityBarSlice";
import { createStatusBarSlice, StatusBarSlice } from "./store/createStatusBarSlice";

export type ReflectionLayoutStore = ActivityBarSlice & StatusBarSlice;

const createReflectionLayoutStore = () => {
  const store = createStore<ReflectionLayoutStore>()((...a) => ({
    ...createActivityBarSlice(...a),
    ...createStatusBarSlice(...a),
  }));

  return store;
};

export const ReflectionLayoutContext = React.createContext<StoreApi<ReflectionLayoutStore>>(null!);

export const ReflectionLayoutProvider: React.FC<PropsWithChildren> = (props) => {
  const store = React.useRef(createReflectionLayoutStore()).current;

  return <ReflectionLayoutContext.Provider value={store}>{props.children}</ReflectionLayoutContext.Provider>;
};
