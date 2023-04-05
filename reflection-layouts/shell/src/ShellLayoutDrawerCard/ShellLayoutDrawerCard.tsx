import React from "react";
import { PropsWithChildren } from "react";

import { Box, createStyles, DefaultProps, Selectors, useComponentDefaultProps } from "@mantine/core";

export interface ShellLayoutDrawerCardParams { }

const useStyles = createStyles((theme, { }: ShellLayoutDrawerCardParams) => ({
  root: {
    backgroundColor: "rgb(0 0 0 / 0.4)",
    border: "1px solid black",
    borderRadius: "0.375rem",
    padding: "0.75rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    cursor: "pointer",
    transition: "all",
    transitionDuration: "300ms",
    ":hover": {
      backgroundColor: "rgb(0 0 0 / 0.8)",
    },
  },
}));

type ShellLayoutDrawerCardStylesNames = Selectors<typeof useStyles>;

interface ShellLayoutDrawerCardProps
  extends DefaultProps<ShellLayoutDrawerCardStylesNames, ShellLayoutDrawerCardParams> {
  onBottomScroll?: () => void;
}

const defaultProps: Partial<ShellLayoutDrawerCardProps> = {};

export const ShellLayoutDrawerCard: React.FC<PropsWithChildren<ShellLayoutDrawerCardProps>> = ({
  className,
  classNames,
  styles,
  unstyled,
  ...props
}) => {
  const { ...others } = props;

  const defaults = useComponentDefaultProps("ShellLayoutDrawerCard", defaultProps, {});

  const { classes, cx } = useStyles(
    {},
    {
      name: "ShellLayoutDrawerCard",
      classNames,
      styles,
      unstyled,
    }
  );

  return (
    <Box className={cx(classes.root, className)} {...others}>
      {props.children}
    </Box>
  );
};
