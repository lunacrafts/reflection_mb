import React from "react";
import { CraftLayoutContext } from "../CraftLayoutProvider/CraftLayoutProvider";
import { ContextNotFound } from "@reflection/core";

export const useCraftLayoutStore = () => {
  const context = React.useContext(CraftLayoutContext);

  if (!context) {
    throw new ContextNotFound("CraftLayoutContext");
  }

  return context;
};
