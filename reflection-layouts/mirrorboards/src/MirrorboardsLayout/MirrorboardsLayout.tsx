import React from "react";
import { PropsWithChildren } from "react";

import { Box, createStyles, DefaultProps, MantineNumberSize, Selectors, useComponentDefaultProps } from "@mantine/core";
import { useMirrorboardsLayout } from "../useMirrorboardsLayout/useMirrorboardsLayout";

export interface MirrorboardsLayoutParams {
  drawerWidth: MantineNumberSize;
  headerHeight: MantineNumberSize;
  isExpanded: boolean;
}

const useStyles = createStyles((theme, { drawerWidth, headerHeight, isExpanded }: MirrorboardsLayoutParams) => ({
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

type MirrorboardsLayoutStylesNames = Selectors<typeof useStyles>;

interface MirrorboardsLayoutProps extends DefaultProps<MirrorboardsLayoutStylesNames, MirrorboardsLayoutParams> {
  drawerWidth?: MantineNumberSize;
  headerHeight?: MantineNumberSize;
  drawer?: JSX.Element;
}

const defaultProps: Partial<MirrorboardsLayoutProps> = {
  drawerWidth: 320,
  headerHeight: 50,
};

export const MirrorboardsLayout: React.FC<PropsWithChildren<MirrorboardsLayoutProps>> = ({
  className,
  classNames,
  styles,
  unstyled,
  ...props
}) => {
  const { drawerWidth, headerHeight, ...others } = props;

  const defaults = useComponentDefaultProps("MirrorboardsLayout", defaultProps, {
    drawerWidth,
    headerHeight,
  });

  const { drawer } = useMirrorboardsLayout();

  const { classes, cx } = useStyles(
    {
      drawerWidth: defaults.drawerWidth!,
      headerHeight: defaults.headerHeight!,
      isExpanded: drawer.state.isExpanded,
    },
    {
      name: "MirrorboardsLayout",
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
