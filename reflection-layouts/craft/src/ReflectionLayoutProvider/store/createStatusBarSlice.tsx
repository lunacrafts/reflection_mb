import produce from "immer";
import { StateCreator } from "zustand";
import { ReflectionLayoutStore } from "../ReflectionLayoutProvider";
import { StatusBarItem } from "../../types";

export type StatusBarSlice = {
  statusBar: {
    items: Record<string, StatusBarItem & { id: string; timestamp: number }>;
    renders: Record<string, JSX.Element>;
    actions: {
      register: (id: string, item: StatusBarItem) => void;
      unregister: (id: string) => void;
      setRender: (id: string, element: JSX.Element) => void;
      setMeta: (id: string, meta: StatusBarItem["meta"]) => void;
    };
  };
};

export const createStatusBarSlice: StateCreator<ReflectionLayoutStore, [], [], StatusBarSlice> = (set) => {
  return {
    statusBar: {
      items: {},
      renders: {},
      actions: {
        register: (id, item) => {
          set(
            produce<ReflectionLayoutStore>((state) => {
              state.statusBar.items[id] = {
                ...item,
                id: id,
                timestamp: +new Date(),
              };
            })
          );
        },
        unregister: (id) => {
          set(
            produce<ReflectionLayoutStore>((state) => {
              delete state.statusBar.items[id];
              delete state.statusBar.renders[id];
            })
          );
        },
        setRender: (id, element) => {
          set(
            produce<ReflectionLayoutStore>((state) => {
              state.statusBar.renders[id] = element;
            })
          );
        },
        setMeta: (id, meta) => {
          set(
            produce<ReflectionLayoutStore>((state) => {
              state.statusBar.items[id].meta = meta;
            })
          );
        },
      },
    },
  };
};
