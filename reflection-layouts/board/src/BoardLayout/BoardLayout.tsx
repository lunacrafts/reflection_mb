import React from "react";
import { PropsWithChildren } from "react";
import { Box, createStyles, DefaultProps, MantineNumberSize, Selectors, useComponentDefaultProps } from "@mantine/core";

export interface BoardLayoutParams {

}

const useStyles = createStyles((theme, { }: BoardLayoutParams) => ({
  root: {},
}));

type BoardLayoutStylesNames = Selectors<typeof useStyles>;

interface BoardLayoutProps extends DefaultProps<BoardLayoutStylesNames, BoardLayoutParams> { }

const defaultProps: Partial<BoardLayoutProps> = {};

export const BoardLayout: React.FC<PropsWithChildren<BoardLayoutProps>> = ({
  className,
  classNames,
  styles,
  unstyled,
  ...props
}) => {
  const { ...others } = props;

  const defaults = useComponentDefaultProps("BoardLayout", defaultProps, {});

  const { classes, cx } = useStyles(
    {

    },
    {
      name: "BoardLayout",
      classNames,
      styles,
      unstyled,
    }
  );

  return (
    <Box className={cx(classes.root, className)} {...others}>
      BoardLayout!
    </Box>
  );
};
