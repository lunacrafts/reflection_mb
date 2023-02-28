import React, { PropsWithChildren } from "react";
import { createStore, StoreApi } from "zustand";

export type BoardLayoutStore = {};

const createBoardLayoutStore = () => {
  return createStore<BoardLayoutStore>()(() => ({}));
};

export const BoardLayoutContext = React.createContext<StoreApi<BoardLayoutStore>>(null!);

export const BoardLayoutProvider: React.FC<PropsWithChildren> = (props) => {
  const store = React.useRef(createBoardLayoutStore()).current;

  return <BoardLayoutContext.Provider value={store}>{props.children}</BoardLayoutContext.Provider>;
};
