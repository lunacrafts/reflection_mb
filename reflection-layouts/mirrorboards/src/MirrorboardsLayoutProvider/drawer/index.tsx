import produce from "immer";
import { StateCreator } from "zustand";
import { MirrorboardsLayoutStore } from "../MirrorboardsLayoutProvider";

export interface DrawerSlice {
  drawer: {
    state: {
      isExpanded: boolean;
    };
    actions: {
      open: () => void;
      close: () => void;
      toggle: () => void;
    };
  };
}

export const createDrawerSlice: StateCreator<MirrorboardsLayoutStore, [], [], DrawerSlice> = (set) => {
  return {
    drawer: {
      state: {
        isExpanded: true,
      },
      actions: {
        open: () => {
          set(
            produce<MirrorboardsLayoutStore>((state) => {
              state.drawer.state.isExpanded = true;
            })
          );
        },
        close: () => {
          set(
            produce<MirrorboardsLayoutStore>((state) => {
              state.drawer.state.isExpanded = false;
            })
          );
        },
        toggle: () => {
          set(
            produce<MirrorboardsLayoutStore>((state) => {
              state.drawer.state.isExpanded = !state.drawer.state.isExpanded;
            })
          );
        },
      },
    },
  };
};
