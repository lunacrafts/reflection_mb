import React, { DependencyList } from "react";
import { useStore } from "zustand";
import { ActivityBarItem } from "../types";
import { useReflectionLayoutStore } from "../useReflectionLayoutStore/useReflectionLayoutStore";

export const useActivityBarItem = (item: ActivityBarItem, deps: DependencyList = []) => {
  const id = React.useId();
  const context = useReflectionLayoutStore();

  const { register, unregister, setRender, setMeta } = useStore(context, (state) => state.activityBar.actions);

  React.useEffect(() => {
    register(id, item);

    return () => unregister(id);
  }, []);

  React.useEffect(() => {
    setRender(id, <React.Fragment key={item.namespace}>{item.render()}</React.Fragment>);
    setMeta(id, item.meta);
  }, [item, ...deps]);

  return null;
};
