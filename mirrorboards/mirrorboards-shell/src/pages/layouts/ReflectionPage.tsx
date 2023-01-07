import { ReflectionLayout, ReflectionLayoutProvider, useActivityBarItem } from "@reflection-layouts/reflection";
import React from "react";

export const ReflectionPage = () => {
  return (
    <ReflectionLayoutProvider>
      <ReflectionLayout>
        <ReflectionLayoutExtensionsA namespace={"icon-A"} placement="top" />
        <ReflectionLayoutExtensionsB namespace={"icon-B"} placement="top" />
      </ReflectionLayout>
    </ReflectionLayoutProvider>
  );
};

const ReflectionLayoutExtensionsA: React.FC<{ namespace: string; placement: "top" | "bottom" }> = (props) => {
  const [char, setChar] = React.useState("A");

  useActivityBarItem(
    {
      namespace: props.namespace,
      render: () => <div onClick={() => setChar("B")}>{char}</div>,
      meta: {
        placement: props.placement,
      },
    },
    [props.namespace, char]
  );

  return null;
};

const ReflectionLayoutExtensionsB: React.FC<{ namespace: string; placement: "top" | "bottom" }> = (props) => {
  const [char, setChar] = React.useState("B");

  useActivityBarItem(
    {
      namespace: props.namespace,
      render: () => <div onClick={() => setChar("D")}>{char}</div>,
      meta: {
        placement: props.placement,
      },
    },
    [props.namespace, char]
  );

  return null;
};
