import { BoardLayout, useSlot } from "@reflection-layouts/board"
import { useDatasourceLayoutBrakpoints } from "../../components/useDatasourceLayoutBrakpoints/useDatasourceLayoutBrakpoints";

export const HypeboardsIndexComponent = () => {
  const breakpoints = useDatasourceLayoutBrakpoints();

  const [Actions] = useSlot('actions', {
    breakpoints: breakpoints.actions,
  });

  const [Content] = useSlot('content', {
    breakpoints: breakpoints.content,
  });

  return <BoardLayout>
    <Actions />
    <Content />
  </BoardLayout>
}
