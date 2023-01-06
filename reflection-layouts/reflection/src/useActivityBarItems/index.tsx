import { values, chain, sortBy, uniqueId, uniqBy, map } from "lodash";
import { useStore } from "zustand";
import { ActivityBarItem } from "../types";
import { useReflectionLayoutStore } from "../useReflectionLayoutStore";

export const useActivityBarItems = (filter?: (item: ActivityBarItem) => boolean) => {
  const store = useReflectionLayoutStore();
  const items = useStore(store, (state) => state.activityBar.items);
  const renders = useStore(store, (state) => state.activityBar.renders);

  const result = chain(values(items))
    .filter(filter)
    .sortBy((item) => item.timestamp)
    .reverse()
    .uniqBy((item) => item.namespace)
    .map((item) => item.id)
    .map((id) => renders[id])
    .value();

  return result;
};
