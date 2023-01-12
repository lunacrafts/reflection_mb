import React, { PropsWithChildren } from "react";
import { createStore, StoreApi } from "zustand";
import { ActivityBarSlice, createActivityBarSlice } from "./store/create-activity-bar-slice";
import { createStatusBarSlice, StatusBarSlice } from "./store/create-status-bar-slice";

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
