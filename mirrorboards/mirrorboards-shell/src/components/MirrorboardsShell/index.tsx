import { CommandsProvider } from "@reflection/commands";
import { ReflectionLayoutProvider } from "@reflection-layouts/reflection";
import { ReactLocation, Router } from "@tanstack/react-location";
import React, { PropsWithChildren } from "react";
import { routes } from "../../router";

const location = new ReactLocation();

export const MirrorboardsShell: React.FC<PropsWithChildren> = (props) => {
  return (
    <ReflectionLayoutProvider>
      <CommandsProvider>
        {props.children}
        <Router location={location} routes={routes} />
      </CommandsProvider>
    </ReflectionLayoutProvider>
  );
};
