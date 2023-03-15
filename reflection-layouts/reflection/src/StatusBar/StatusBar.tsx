import { Box, createStyles, DefaultProps, Selectors, useComponentDefaultProps } from "@mantine/core";
import { PropsWithChildren } from "react";
import { useStatusBarItems } from "../useStatusBarItems/useStatusBarItems";

export interface StatusBarStyleParams { }

const useStyles = createStyles(() => {
  return {
    root: {
      height: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    slot: {
      display: "flex",
      flexDirection: "row",
    },
  };
});

type StatusBarStylesNames = Selectors<typeof useStyles>;

export interface StatusBarProps extends DefaultProps<StatusBarStylesNames, StatusBarStyleParams> { }

export const StatusBar: React.FC<PropsWithChildren<StatusBarProps>> = (props) => {
  const left = useStatusBarItems((item) => item.meta.placement === "left");
  const right = useStatusBarItems((item) => item.meta.placement === "right");

  const { classNames, styles, unstyled, className } = props;

  const { classes, cx } = useStyles(undefined, { name: "StatusBar", classNames, styles, unstyled });

  return (
    <>
      <Box className={cx(classes.root, className)}>
        <Box className={cx(classes.slot)}>{left}</Box>
        <Box className={cx(classes.slot)}>{right}</Box>
      </Box>
    </>
  );
};
