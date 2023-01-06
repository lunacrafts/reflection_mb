import { ReactLocation, Router } from "@tanstack/react-location";
import { routes } from "../../router";

const location = new ReactLocation();

export const MirrorboardsShell = () => {
  return <Router location={location} routes={routes} />;
};
