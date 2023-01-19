export type SlotDimensions = {
  x: number
  y: number
  w: number
  h: number
}

export type Slot = {
  namespace: string
  breakpoints: {
    lg: SlotDimensions
    md: SlotDimensions
    sm: SlotDimensions
    xs: SlotDimensions
    xxs: SlotDimensions
  }
}
