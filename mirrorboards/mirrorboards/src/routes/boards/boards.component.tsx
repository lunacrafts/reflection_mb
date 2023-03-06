import { Outlet } from "@tanstack/react-router"
import { luna } from "../../trpc/luna.trpc"

export const BoardsComponent = () => {
  const mirrorboards = luna.mirrorboards.findAllPublic.useInfiniteQuery({
    limit: 100,
  }, {
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  const create = luna.mirrorboards.create.useMutation({
    onSuccess: () => {
      mirrorboards.refetch();
    }
  });

  const makePublic = luna.mirrorboards.promote.useMutation({
    onSuccess: () => {
      mirrorboards.refetch();
    }
  });

  if (mirrorboards.isLoading) {
    return <div>spinner</div>
  }

  return <div>
    <div>Boards:</div>
    <div>
      {mirrorboards.data?.pages.map((page) => {
        return page.mirrorboards.map((item) => {
          return <div key={item.id}>{item.title}</div>
        })
      })}
    </div>
    {/* {JSON.stringify(mirrorboards.data)} */}
    <Outlet />

    <div onClick={() => {
      mirrorboards.fetchNextPage();
    }}>Fetch next page</div>

    <div>Create public:</div>
    <button onClick={() => create.mutate({
      isPublic: true,
      title: 'Second mirrorboard!'
    })}>create</button>

    <hr />

    <div>
      <button onClick={() => {
        makePublic.mutate({
          id: '01GTERZ7VYAV9QBT6JGA890JS6',
          isPromoted: true,
        });
      }}>
        Promote
      </button>
    </div>
  </div>
}
