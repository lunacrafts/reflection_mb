import { BreakpointsList, BreakpointsMatrix } from "../types";

export const useBreakpoints = (breakpoints: BreakpointsMatrix) => {
  const keys = ["lg", "md", "sm", "xs", "xxs"] as const;

  const result = {
    lg: null,
    md: null,
    sm: null,
    xs: null,
    xxs: null,
  };

  const set = (key: string, list: BreakpointsList) => {
    const [x, y, h, w] = list;
    result[key] = { x, y, h, w };
  };

  const findAncestorValue = (index: number) => {
    if (index < 0) {
      return null;
    }

    let i = index - 1;

    do {
      const value = result[keys[i]];

      if (value != null) {
        return result[keys[i]];
      }

      i--;
    } while (i != 0);
  };

  keys.forEach((key) => {
    if (result[key] === null && breakpoints[key]) {
      set(key, breakpoints[key]);
    }
  });

  keys.forEach((key, index) => {
    const keyValue = result[key];

    if (keyValue === null) {
      result[key] = findAncestorValue(index);
    }
  });

  return result;
};
