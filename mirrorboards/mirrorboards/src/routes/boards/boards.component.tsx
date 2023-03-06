import { luna } from "../../trpc/luna.trpc"

export const BoardsComponent = () => {
  const mirrorboards = luna.mirrorboards.findAllPublic.useInfiniteQuery({
    limit: 100,
  }, {
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  return <div className="bg-black bg-gradient-to-r from-black via-slate-900/50 to-black h-full">
    {
      mirrorboards.data?.pages.map((page) => {
        return page.mirrorboards.map((item) => {
          return <div key={item.id}>{item.title}</div>
        })
      })
    }
  </div>
}
