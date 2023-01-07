import produce from "immer";
import { StateCreator } from "zustand";
import { ReflectionLayoutStore } from "..";
import { ActivityBarItem } from "../../types";

export type ActivityBarSlice = {
  activityBar: {
    items: Record<string, ActivityBarItem & { id: string; timestamp: number }>;
    renders: Record<string, JSX.Element>;
    actions: {
      register: (id: string, item: ActivityBarItem) => void;
      unregister: (id: string) => void;
      setRender: (id: string, element: JSX.Element) => void;
      setMeta: (id: string, meta: ActivityBarItem["meta"]) => void;
    };
  };
};

export const createActivityBarSlice: StateCreator<ReflectionLayoutStore, [], [], ActivityBarSlice> = (set) => {
  return {
    activityBar: {
      items: {},
      renders: {},
      actions: {
        register: (id, item) => {
          set(
            produce<ReflectionLayoutStore>((state) => {
              state.activityBar.items[id] = {
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
              delete state.activityBar.items[id];
              delete state.activityBar.renders[id];
            })
          );
        },
        setRender: (id, element) => {
          set(
            produce<ReflectionLayoutStore>((state) => {
              state.activityBar.renders[id] = element;
            })
          );
        },
        setMeta: (id, meta) => {
          set(
            produce<ReflectionLayoutStore>((state) => {
              state.activityBar.items[id].meta = meta;
            })
          );
        },
      },
    },
  };
};
