import { Box, createStyles, DefaultProps, Selectors } from "@mantine/core";
import { PropsWithChildren } from "react";
import { Command } from "../types";

export interface CommandsListStyleParams {}

const useStyles = createStyles(() => {
  return {
    root: {},
  };
});

type CommandsListStylesNames = Selectors<typeof useStyles>;

export interface CommandsListProps extends DefaultProps<CommandsListStylesNames, CommandsListStyleParams> {
  commands?: Command[];
}

export const CommandsList: React.FC<PropsWithChildren<CommandsListProps>> = (props) => {
  const { classNames, styles, unstyled, className, commands = [] } = props;

  const { classes, cx } = useStyles(null, { name: "CommandsList", classNames, styles, unstyled });

  return (
    <Box className={cx(classes.root, className)}>
      {commands.map((command) => (
        <div key={command.namespace}>{command.namespace}</div>
      ))}
    </Box>
  );
};
