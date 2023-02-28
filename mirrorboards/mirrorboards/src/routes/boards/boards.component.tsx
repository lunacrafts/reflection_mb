import { Outlet } from "@tanstack/react-router"
import { luna } from "../../trpc/luna.trpc"

export const BoardsComponent = () => {
  const mirrorboards = luna.mirrorboards.findAllPublic.useQuery();

  if (mirrorboards.isLoading) {
    return <div>spinner</div>
  }

  return <div>
    <div>Boards:</div>
    {JSON.stringify(mirrorboards.data)}
    <Outlet />
  </div>
}
