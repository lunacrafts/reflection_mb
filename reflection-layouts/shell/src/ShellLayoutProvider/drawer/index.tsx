import produce from "immer";
import { StateCreator } from "zustand";
import { ShellLayoutStore } from "../ShellLayoutProvider";

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

export const createDrawerSlice: StateCreator<ShellLayoutStore, [], [], DrawerSlice> = (set) => {
  return {
    drawer: {
      state: {
        isExpanded: false,
      },
      actions: {
        open: () => {
          set(
            produce<ShellLayoutStore>((state) => {
              state.drawer.state.isExpanded = true;
            })
          );
        },
        close: () => {
          set(
            produce<ShellLayoutStore>((state) => {
              state.drawer.state.isExpanded = false;
            })
          );
        },
        toggle: () => {
          set(
            produce<ShellLayoutStore>((state) => {
              state.drawer.state.isExpanded = !state.drawer.state.isExpanded;
            })
          );
        },
      },
    },
  };
};
