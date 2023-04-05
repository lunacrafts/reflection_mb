import produce from "immer";
import { StateCreator } from "zustand";
import { BoardLayoutStore } from "../MirrorboardsLayoutProvider";

export interface SlotsSlice {
  slots: {}
}

export const createSlotsSlice: StateCreator<BoardLayoutStore, [], [], SlotsSlice> = (set) => {
  return {
    slots: {},
  };
};
