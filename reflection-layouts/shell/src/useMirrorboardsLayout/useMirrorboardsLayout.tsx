import React from "react";
import { useStore } from "zustand";
import { MirrorboardsLayoutContext } from "../MirrorboardsLayoutProvider/MirrorboardsLayoutProvider";

export const useMirrorboardsLayout = () => {
  const store = React.useContext(MirrorboardsLayoutContext);
  const drawer = useStore(store, (state) => state.drawer);

  return { drawer };
};
