import { Box, createStyles, DefaultProps, Selectors, useComponentDefaultProps } from "@mantine/core";
import { PropsWithChildren } from "react";

export interface BoardLayoutStyleParams { }

const useStyles = createStyles(() => {
  return {
    root: {
      width: "100%",
      height: "100%",
    },
  };
});

type BoardLayoutStylesNames = Selectors<typeof useStyles>;

export interface BoardLayoutProps extends DefaultProps<BoardLayoutStylesNames, BoardLayoutStyleParams> {
  spacing?: number;
}

const defaultProps: Partial<BoardLayoutProps> = {};

export const BoardLayout: React.FC<PropsWithChildren<BoardLayoutProps>> = (props) => {
  const { classNames, styles, unstyled, className } = props;

  const { } = useComponentDefaultProps("BoardLayout", defaultProps, props);
  const { classes, cx } = useStyles(null, { name: "BoardLayout", classNames, styles, unstyled });

  return <Box className={cx(classes.root, className)}>{"Render slots"}</Box>;
};
