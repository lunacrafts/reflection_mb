import { StateCreator } from "zustand";
import produce from "immer";
import { CraftLayoutStore } from "../CraftLayoutProvider";
import { Slot } from "../../types";

export type SlotsSlice = {
  slots: {
    list: Record<string, Slot>;
    actions: {
      register: (namespace: string, slot: Slot) => void;
      update: (namespace: string, slot: Slot) => void;
      unregister: (namespace: string) => void;
    };
  };
};

export const createSlotsSlice: StateCreator<CraftLayoutStore, [], [], SlotsSlice> = (set) => {
  return {
    slots: {
      list: {},
      actions: {
        register: (namespace, slot) => {
          set(
            produce<CraftLayoutStore>((state) => {
              state.slots.list[namespace] = slot;
            })
          );
        },
        update: (namespace, slot) => {
          set(
            produce<CraftLayoutStore>((state) => {
              state.slots.list[namespace] = slot;
            })
          );
        },
        unregister: (namespace) => {
          set(
            produce<CraftLayoutStore>((state) => {
              delete state.slots.list[namespace];
            })
          );
        },
      },
    },
  };
};
