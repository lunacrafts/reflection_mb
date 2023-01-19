import { ContextNotFound } from "@reflection/core";
import React from "react";
import { ReflectionLayoutContext } from "../ReflectionLayoutProvider/ReflectionLayoutProvider";

export const useReflectionLayoutStore = () => {
  const context = React.useContext(ReflectionLayoutContext);

  if (!context) {
    throw new ContextNotFound("ReflectionLayoutContext");
  }

  return context;
};
