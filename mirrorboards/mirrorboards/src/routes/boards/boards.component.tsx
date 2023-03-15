import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import { FontAwesomeIcon } from "@reflection/icons";
import { luna } from "../../trpc/luna.trpc"
import { useCommand } from '@reflection/commands';
import { createMirrorboardCommand } from '../../extensions/mirrorboards/commands/createMirrorboard.command';
import { toast } from 'sonner';

export const BoardsComponent = () => {
  const createMirrorboard = useCommand(createMirrorboardCommand());

  // const { create: createMirrorboard } = useCommand<MirrorboardCommands.CreateMirrorboard>();

  const mirrorboards = luna.mirrorboards.findAllPublic.useInfiniteQuery({
    limit: 100,
  }, {
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  return <div className="h-full w-full bg-black bg-gradient-to-r from-black via-slate-900/50 to-black">
    <div className="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {
        mirrorboards.data?.pages.map((page) => {
          return page.mirrorboards.map((mirrorboard, index) => {
            return <motion.div
              key={mirrorboard.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.003 }}>
              <Link
                to={`/shell/mirrorboard/$mirrorboardId`}
                params={{
                  mirrorboardId: mirrorboard.id,
                }}>
                <div className="drop-shadow-sm bg-white/10 hover:bg-white/20 focus:bg-white/20 transition-all text-white rounded-md flex flex-row items-center">
                  <FontAwesomeIcon className="opacity-25 p-4" icon="paw" color={"white"} fontSize={30} />
                  <div className="text-sm subpixel-antialiased" style={{ color: "hsl(215deg 10% 83%)" }}>
                    {mirrorboard.title}
                  </div>
                </div>
              </Link>
            </motion.div>
          })
        })
      }

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>

        <div
          onClick={async () => {
            const mirrorboard = await createMirrorboard.exec();

            console.log('done!');
            console.log(mirrorboard);

            toast('Mirrorboard has been created!', {
              description: mirrorboard.title
            });
          }}
          className="cursor-pointer drop-shadow-sm bg-white/10 hover:bg-white/20 focus:bg-white/20 transition-all text-white rounded-md flex flex-row items-center">
          <FontAwesomeIcon className="opacity-25 p-4" icon="paw" color={"white"} fontSize={30} />
          <div className="text-sm subpixel-antialiased" style={{ color: "hsl(215deg 10% 83%)" }}>
            Create Mirrorboard
          </div>
        </div>
      </motion.div>
    </div>
  </div>
}

