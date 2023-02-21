import { useParams } from "@tanstack/react-router"
import { mirrorboardRoute } from "./mirrorboard.route";

export const MirrorboardComponent = () => {
  const { mirrorboardId } = useParams({
    from: mirrorboardRoute.id,
  });

  return <div>Mirrorboard {mirrorboardId}</div>
}
