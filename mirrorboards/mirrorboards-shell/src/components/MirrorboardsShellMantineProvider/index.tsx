import { PropsWithChildren } from "react";
import { MantineProvider, ColorSchemeProvider, ColorScheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import React from "react";

export const MirrorboardsShellMantineProvider: React.FC<PropsWithChildren> = (props) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  };

  React.useEffect(() => {
    if (colorScheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [colorScheme]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        theme={{
          colorScheme,
          fontFamily: "Inter, sans-serif",
        }}
      >
        {props.children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
