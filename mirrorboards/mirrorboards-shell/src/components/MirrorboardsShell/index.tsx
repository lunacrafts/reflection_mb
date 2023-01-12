import { ReactLocation, Router } from "@tanstack/react-location";
import React, { PropsWithChildren } from "react";
import { routes } from "../../router";

const location = new ReactLocation();

export const MirrorboardsShell: React.FC<PropsWithChildren> = (props) => {
  return <Router location={location} routes={routes} />;
};
