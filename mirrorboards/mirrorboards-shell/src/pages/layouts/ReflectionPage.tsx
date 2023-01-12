import { ReflectionLayout } from "@reflection-layouts/reflection";
import { CommandsList, useCommandsList } from "@reflection/commands";

export const ReflectionPage = () => {
  const commands = useCommandsList();

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ReflectionLayout>
        <CommandsList commands={commands} />
      </ReflectionLayout>
    </div>
  );
};
