import { StateCreator } from "zustand";
import { Slot } from "../../types";
import { CraftLayoutStore } from "../CraftLayoutProvider";

export type SlotsSlice = {
  slots: {
    actions: {
      register: (namespace: string, slot: Slot) => void;
      unregister: (namespace: string) => void;
    };
  };
};

export const createSlotsSlice: StateCreator<CraftLayoutStore, [], [], SlotsSlice> = (set) => {
  return {
    slots: {
      actions: {
        register: () => {},
        unregister: () => {},
      },
    },
  };
};
