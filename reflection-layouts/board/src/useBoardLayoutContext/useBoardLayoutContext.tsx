import React from "react";
import { useStore } from "zustand";
import { ContextNotFound } from 'errors';
import { BoardLayoutContext } from "../BoardLayoutProvider/BoardLayoutProvider";

export const useBoardLayoutContext = () => {
  const context = React.useContext(BoardLayoutContext);

  if (!context) {
    throw new ContextNotFound('BoardLayoutContext');
  }

  return context;
};
