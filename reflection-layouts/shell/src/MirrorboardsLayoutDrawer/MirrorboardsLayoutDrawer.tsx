import React from "react";
import { PropsWithChildren } from "react";
import { createStyles, DefaultProps, Selectors, useComponentDefaultProps } from "@mantine/core";

export interface MirrorboardsLayoutDrawerParams {}

const useStyles = createStyles((theme, {}: MirrorboardsLayoutDrawerParams) => ({
  root: {
    height: "100%",
    overflow: "scroll",
  },
}));

type MirrorboardsLayoutDrawerStylesNames = Selectors<typeof useStyles>;

interface MirrorboardsLayoutDrawerProps
  extends DefaultProps<MirrorboardsLayoutDrawerStylesNames, MirrorboardsLayoutDrawerParams> {
  onBottomScroll?: () => void;
}

const defaultProps: Partial<MirrorboardsLayoutDrawerProps> = {};

export const MirrorboardsLayoutDrawer: React.FC<PropsWithChildren<MirrorboardsLayoutDrawerProps>> = ({
  className,
  classNames,
  styles,
  unstyled,
  ...props
}) => {
  const { onBottomScroll, ...others } = props;

  const defaults = useComponentDefaultProps("MirrorboardsLayoutDrawer", defaultProps, {});

  const { classes, cx } = useStyles(
    {},
    {
      name: "MirrorboardsLayoutDrawer",
      classNames,
      styles,
      unstyled,
    }
  );

  return (
    <div className={cx(classes.root, className)} {...others}>
      {props.children}
    </div>
  );
};
