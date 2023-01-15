import React, { PropsWithChildren } from "react";

export const CraftLayoutProvider: React.FC<PropsWithChildren> = (props) => {
  return <>{props.children}</>;
};
