import React from "react";
import { PropsWithChildren } from "react";

import { Box, createStyles, DefaultProps, MantineNumberSize, Selectors, useComponentDefaultProps } from "@mantine/core";
import { useShellLayout } from "../useShellLayout/useShellLayout";

export interface ShellLayoutParams {
  drawerWidth: MantineNumberSize;
  headerHeight: MantineNumberSize;
  isExpanded: boolean;
}

const useStyles = createStyles((theme, { drawerWidth, headerHeight, isExpanded }: ShellLayoutParams) => ({
  root: {
    width: "100%",
    height: "100%",
    wordWrap: "break-word",
    overflow: "hidden",
  },
  innerContainer: {
    height: `calc(100% + ${headerHeight}px)`,
    width: `calc(100% + ${drawerWidth}px)`,
    display: "flex",
    marginLeft: isExpanded ? 0 : -drawerWidth,
    marginTop: isExpanded ? 0 : -headerHeight,
    transition: "margin 300ms",
  },
  drawer: {
    minWidth: drawerWidth,
    height: `calc(100% - ${headerHeight}px)`,
  },
  contentWrapper: {
    width: `calc(100% - ${drawerWidth}px)`,
    maxWidth: `calc(100% - ${drawerWidth}px)`,
    height: "100%",
  },
  header: {
    minHeight: headerHeight,
  },
  content: {
    height: `calc(100% - ${headerHeight}px)`,
    borderRadius: isExpanded ? 4 : 0,
    transition: "opacity",
    transitionDuration: "200ms",
    boxShadow: "-20px -20px 20px 0px hsl(0deg 0% 0% / 33%)",
    border: "1px solid hsl(0, 0%, 0%)",
  },
}));

type ShellLayoutStylesNames = Selectors<typeof useStyles>;

interface ShellLayoutProps extends DefaultProps<ShellLayoutStylesNames, ShellLayoutParams> {
  drawerWidth?: MantineNumberSize;
  headerHeight?: MantineNumberSize;
  drawer?: JSX.Element;
}

const defaultProps: Partial<ShellLayoutProps> = {
  drawerWidth: 320,
  headerHeight: 50,
};

export const ShellLayout: React.FC<PropsWithChildren<ShellLayoutProps>> = ({
  className,
  classNames,
  styles,
  unstyled,
  ...props
}) => {
  const { drawerWidth, headerHeight, ...others } = props;

  const defaults = useComponentDefaultProps("ShellLayout", defaultProps, {
    drawerWidth,
    headerHeight,
  });

  const { drawer } = useShellLayout();

  const { classes, cx } = useStyles(
    {
      drawerWidth: defaults.drawerWidth,
      headerHeight: defaults.headerHeight,
      isExpanded: drawer.state.isExpanded,
    },
    {
      name: "ShellLayout",
      classNames,
      styles,
      unstyled,
    }
  );

  return (
    <Box className={cx(classes.root, className)} {...others}>
      <Box className={cx(classes.innerContainer)}>
        <Box className={cx(classes.drawer)}>{props.drawer}</Box>
        <Box className={cx(classes.contentWrapper)}>
          <Box className={classes.header}></Box>
          <Box className={classes.content}>{props.children}</Box>
        </Box>
      </Box>
    </Box>
  );
};
