import { RequireAtLeastOne } from "type-fest";

export type BreakpointsMatrix = RequireAtLeastOne<{
  lg: BreakpointsList;
  md: BreakpointsList;
  sm: BreakpointsList;
  xs: BreakpointsList;
  xxs: BreakpointsList;
}>

export type BreakpointsList = [number, number, number, number];
