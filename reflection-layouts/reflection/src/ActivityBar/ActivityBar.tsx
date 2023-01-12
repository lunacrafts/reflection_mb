import { Box, createStyles, DefaultProps, Selectors, useComponentDefaultProps } from "@mantine/core";
import { PropsWithChildren } from "react";
import { useActivityBarItems } from "../useActivityBarItems/useActivityBarItems";

export interface ActivityBarStyleParams {}

const useStyles = createStyles(() => {
  return {
    root: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  };
});

type ActivityBarStylesNames = Selectors<typeof useStyles>;

export interface ActivityBarProps extends DefaultProps<ActivityBarStylesNames, ActivityBarStyleParams> {}

export const ActivityBar: React.FC<PropsWithChildren<ActivityBarProps>> = (props) => {
  const top = useActivityBarItems((item) => item.meta.placement === "top");
  const bottom = useActivityBarItems((item) => item.meta.placement === "bottom");

  const { classNames, styles, unstyled, className } = props;

  const { classes, cx } = useStyles(null, { name: "ActivityBar", classNames, styles, unstyled });

  return (
    <>
      <Box className={cx(classes.root, className)}>
        <Box>{top}</Box>
        <Box>{bottom}</Box>
      </Box>
    </>
  );
};
