import { Box, createStyles, DefaultProps, Selectors } from "@mantine/core";
import { PropsWithChildren } from "react";
import { Tooltip } from "@mantine/core";

export interface ActivityBarItemStyleParams { }

const useStyles = createStyles((theme) => {
  return {
    root: {
      width: "100%",
      aspectRatio: "1/1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all",
      transitionDuration: "300ms",
      cursor: "pointer",
      opacity: 0.5,
      ":hover": {
        opacity: 1,
      },
    },
  };
});

type ActivityBarItemStylesNames = Selectors<typeof useStyles>;

export interface ActivityBarItemProps extends DefaultProps<ActivityBarItemStylesNames, ActivityBarItemStyleParams> {
  tooltip?: string;
}

export const ActivityBarItem: React.FC<PropsWithChildren<ActivityBarItemProps>> = (props) => {
  const { classNames, styles, unstyled, className } = props;

  const { classes, cx } = useStyles(null, { name: "ActivityBarItem", classNames, styles, unstyled });

  return (
    <Tooltip label={props.tooltip} disabled={!props.tooltip} position={"right"}>
      <Box className={cx(classes.root, className)}>{props.children}</Box>
    </Tooltip>
  );
};
