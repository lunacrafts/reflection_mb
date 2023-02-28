import { BoardLayoutProvider } from "@reflection-layouts/board";
import { ReflectionLayout } from "@reflection-layouts/reflection";
import { ReflectionPageBoardDashboard } from "./ReflectionPageBoardDashboard";

export const ReflectionPage = () => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ReflectionLayout>
        <BoardLayoutProvider>
          <ReflectionPageBoardDashboard />
        </BoardLayoutProvider>
      </ReflectionLayout>
    </div>
  );
};
