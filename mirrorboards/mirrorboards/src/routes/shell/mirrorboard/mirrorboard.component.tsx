import { useParams } from "@tanstack/react-router"
import { narnia } from "narnia-react";
import { mirrorboardRoute } from "./mirrorboard.route";

export const MirrorboardComponent = () => {
  const { mirrorboardId } = useParams({
    from: mirrorboardRoute.id,
  });

  const { data } = narnia.mirrorboards.mirrorboards.findOne.useQuery({
    id: mirrorboardId
  });

  return <div>Mirrorboard {mirrorboardId}{JSON.stringify(data?.mirrorboard)}</div>
}
