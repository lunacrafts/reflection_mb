import React, { PropsWithChildren } from "react";
import { createStore, StoreApi, useStore } from "zustand";
import { createSlotsSlice, SlotsSlice } from "./slots";

export type BoardLayoutStore = SlotsSlice;

const createBoardLayout = () =>
  createStore<BoardLayoutStore>()((...a) => ({
    ...createSlotsSlice(...a),
  }));

export const MirrorboardsLayoutContext = React.createContext<StoreApi<BoardLayoutStore>>(null!);

interface BoardLayoutProviderProps { }

export const BoardLayoutProvider: React.FC<PropsWithChildren<BoardLayoutProviderProps>> = (props) => {
  const store = React.useRef(createBoardLayout()).current;

  return <MirrorboardsLayoutContext.Provider value={store}>
    {props.children}
  </MirrorboardsLayoutContext.Provider>;
};
