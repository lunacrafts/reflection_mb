import { container } from 'tsyringe';
import { t } from '../../trpc';
import { Luna } from '../luna';

export type WithLuna = {
  luna?: Luna
}

export const withLuna = t.middleware(async ({ next, ctx }) => {
  const luna = container.resolve<Luna>(Luna);
  await luna._initialize();

  return next({
    ctx: {
      luna
    }
  });
});
