import { container } from 'tsyringe';
import { t } from '../../trpc';
import { AuthContainer } from '../auth.container';

export type WithAuthContainer = {
  auth?: AuthContainer
}

export const withAuthContainer = t.procedure.use(async ({ next, ctx }) => {
  const auth = container.resolve<AuthContainer>(AuthContainer);
  await auth._initialize();

  return next({
    ctx: {
      auth
    }
  });
});
