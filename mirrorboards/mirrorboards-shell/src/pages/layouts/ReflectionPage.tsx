import { ReflectionLayout } from "@reflection-layouts/reflection";

export const ReflectionPage = () => {
  return (
    <ReflectionLayout>
      <ReflectionLayoutExtensions />
    </ReflectionLayout>
  );
};

const ReflectionLayoutExtensions = () => {
  return <div>foo</div>;
};
