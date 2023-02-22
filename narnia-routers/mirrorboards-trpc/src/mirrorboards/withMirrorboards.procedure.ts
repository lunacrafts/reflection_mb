import { container } from 'tsyringe';
import { t } from '../trpc';
import { Mirrorboards } from './mirrorboards';

export type WithMirrorboards = {
  mirrorboards?: Mirrorboards
}

export const withMirrorboards = t.procedure.use(async ({ next, ctx }) => {
  const mirrorboards = container.resolve<Mirrorboards>(Mirrorboards);
  await mirrorboards._initialize();

  return next({
    ctx: {
      mirrorboards
    }
  });
});
