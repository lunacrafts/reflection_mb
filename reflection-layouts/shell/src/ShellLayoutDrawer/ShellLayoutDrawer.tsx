import React from "react";
import { PropsWithChildren } from "react";
import { createStyles, DefaultProps, Selectors, useComponentDefaultProps } from "@mantine/core";

export interface ShellLayoutDrawerParams { }

const useStyles = createStyles((theme, { }: ShellLayoutDrawerParams) => ({
  root: {
    height: "100%",
    overflow: "scroll",
  },
}));

type ShellLayoutDrawerStylesNames = Selectors<typeof useStyles>;

interface ShellLayoutDrawerProps
  extends DefaultProps<ShellLayoutDrawerStylesNames, ShellLayoutDrawerParams> {
  onBottomScroll?: () => void;
}

const defaultProps: Partial<ShellLayoutDrawerProps> = {};

export const ShellLayoutDrawer: React.FC<PropsWithChildren<ShellLayoutDrawerProps>> = ({
  className,
  classNames,
  styles,
  unstyled,
  ...props
}) => {
  const { onBottomScroll, ...others } = props;

  const defaults = useComponentDefaultProps("ShellLayoutDrawer", defaultProps, {});

  const { classes, cx } = useStyles(
    {},
    {
      name: "ShellLayoutDrawer",
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
