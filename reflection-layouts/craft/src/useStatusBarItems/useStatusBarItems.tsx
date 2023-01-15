import { values, chain } from "lodash";
import { useStore } from "zustand";
import { StatusBarItem } from "../types";
import { useReflectionLayoutStore } from "../useReflectionLayoutStore/useReflectionLayoutStore";

export const useStatusBarItems = (filter?: (item: StatusBarItem) => boolean) => {
  const store = useReflectionLayoutStore();
  const items = useStore(store, (state) => state.statusBar.items);
  const renders = useStore(store, (state) => state.statusBar.renders);

  const result = chain(values(items))
    .filter(filter)
    .filter((item) => !item.meta.hidden)
    .sortBy((item) => item.timestamp)
    .reverse()
    .uniqBy((item) => item.namespace)
    .sortBy((item) => item.meta.order ?? Infinity)
    .map((item) => item.id)
    .map((id) => renders[id])
    .value();

  return result;
};
