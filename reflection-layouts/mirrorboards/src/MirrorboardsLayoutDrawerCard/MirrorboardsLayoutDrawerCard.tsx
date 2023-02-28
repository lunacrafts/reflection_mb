import React from "react";
import { PropsWithChildren } from "react";

import { Box, createStyles, DefaultProps, Selectors, useComponentDefaultProps } from "@mantine/core";

export interface MirrorboardsLayoutDrawerCardParams {}

const useStyles = createStyles((theme, {}: MirrorboardsLayoutDrawerCardParams) => ({
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

type MirrorboardsLayoutDrawerCardStylesNames = Selectors<typeof useStyles>;

interface MirrorboardsLayoutDrawerCardProps
  extends DefaultProps<MirrorboardsLayoutDrawerCardStylesNames, MirrorboardsLayoutDrawerCardParams> {
  onBottomScroll?: () => void;
}

const defaultProps: Partial<MirrorboardsLayoutDrawerCardProps> = {};

export const MirrorboardsLayoutDrawerCard: React.FC<PropsWithChildren<MirrorboardsLayoutDrawerCardProps>> = ({
  className,
  classNames,
  styles,
  unstyled,
  ...props
}) => {
  const { ...others } = props;

  const defaults = useComponentDefaultProps("MirrorboardsLayoutDrawerCard", defaultProps, {});

  const { classes, cx } = useStyles(
    {},
    {
      name: "MirrorboardsLayoutDrawerCard",
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
