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
  const [hidden, setHidden] = React.useState(false);

  useActivityBarItem(
    {
      namespace: props.namespace,
      render: () => <div onClick={() => setHidden(true)}>{char}</div>,
      meta: {
        placement: props.placement,
        hidden: hidden,
      },
    },
    [props.namespace, char, hidden]
  );

  return null;
};

const ReflectionLayoutExtensionsB: React.FC<{ namespace: string; placement: "top" | "bottom" }> = (props) => {
  const [char, setChar] = React.useState("hidden true");

  useActivityBarItem(
    {
      namespace: props.namespace,
      render: () => <div onClick={() => setChar("D")}>{char}</div>,
      meta: {
        placement: props.placement,
        hidden: false,
      },
    },
    [props.namespace, char]
  );

  return null;
};
