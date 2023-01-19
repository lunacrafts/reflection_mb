// export type SlotPayload =



// export type Breakpoints = {
//   lg?: BreakpointsList;
//   md?: BreakpointsList;
//   sm?: BreakpointsList;
//   xs?: BreakpointsList;
//   xxs?: BreakpointsList;
// };

// export type BreakpointsList = [number, number, number, number];

export type SlotDimensions = {
  x: number
  y: number
  w: number
  h: number
}

export type SlotBreakpoints = {
  breakpoints: {
    lg: SlotDimensions
    md: SlotDimensions
    sm: SlotDimensions
    xs: SlotDimensions
    xxs: SlotDimensions
  }
}

export type Slot = SlotBreakpoints;
