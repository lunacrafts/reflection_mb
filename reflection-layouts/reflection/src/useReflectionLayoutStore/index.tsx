import React from "react";
import { ReflectionLayoutContext } from "../ReflectionLayoutProvider";

export const useReflectionLayoutStore = () => {
  const context = React.useContext(ReflectionLayoutContext);

  if (!context) {
    throw new Error("ReflectionLayoutContext not found");
  }

  return context;
};
