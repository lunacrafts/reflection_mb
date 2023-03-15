import produce from "immer";
import { StateCreator } from "zustand";
import { CommandsStore } from "../CommandsProvider";

export interface CommandsSlice {
  commands: {
    mounted: Record<string, JSX.Element>
    mount: (id: string, element: JSX.Element) => void
    unmount: (id: string) => void
  };
}

export const createCommandsSlice: StateCreator<CommandsStore, [], [], CommandsSlice> = (set) => {
  return {
    commands: {
      mounted: {},
      mount: (id, element) => {
        set(
          produce<CommandsStore>((state) => {
            state.commands.mounted[id] = element;
          })
        )
      },
      unmount: (id) => {
        set(
          produce<CommandsStore>((state) => {
            delete state.commands.mounted[id];
          })
        )
      }
    }
  };
};
