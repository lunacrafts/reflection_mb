import React from "react";
import { useStore } from "zustand";
import { ContextNotFound } from 'errors';
import { MirrorboardsLayoutContext } from "../MirrorboardsLayoutProvider/MirrorboardsLayoutProvider";

export const useMirrorboardsLayoutContext = () => {
  const context = React.useContext(MirrorboardsLayoutContext);

  if (!context) {
    throw new ContextNotFound('MirrorboardsLayoutContext');
  }

  return context;
};
