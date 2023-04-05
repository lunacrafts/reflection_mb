import { Breakpoint } from "../types"

interface UseSlotArgs {
  breakpoints?: {
    xxs?: Breakpoint
    xs?: Breakpoint
    sm?: Breakpoint
    md?: Breakpoint
    lg?: Breakpoint
  }
}

export const useSlot = (name: string, slot: UseSlotArgs) => {
  return [
    () => <div>actions</div>
  ];
};
