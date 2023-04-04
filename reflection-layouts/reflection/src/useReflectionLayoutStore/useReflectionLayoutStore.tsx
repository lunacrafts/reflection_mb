import React from "react";
import { ContextNotFound } from 'errors';
import { ReflectionLayoutContext } from "../ReflectionLayoutProvider/ReflectionLayoutProvider";

export const useReflectionLayoutStore = () => {
  const context = React.useContext(ReflectionLayoutContext);

  if (!context) {
    throw new ContextNotFound('ReflectionLayoutContext');
  }

  return context;
};
