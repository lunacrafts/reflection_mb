import social from './routers/social';
import t from './trpc';

export const router = t.mergeRouters(social);

export type OpenAIRouter = typeof router;