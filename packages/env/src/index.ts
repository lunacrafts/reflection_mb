import { str, envsafe, port, url } from 'envsafe';

export const env = envsafe({
  AUTH_API_URL: url({
    devDefault: 'http://localhost:4000',
  }),
  AUTH_TRPC_URL: url({
    devDefault: 'http://localhost:4000/api/trpc',
  }),
  AUTH_MONGODB_URI: url({
    devDefault: 'mongodb://luna:crafts@localhost:27017/',
  }),
  AUTH_MONGODB_DB_NAME: str({
    devDefault: 'mirrorboards',
  }),
  AUTH_SUPERTOKENS_API_URL: url({
    devDefault: 'http://localhost:3567',
  }),
  AUTH_SUPERTOKENS_JWKS_URL: url({
    devDefault: 'http://localhost:3567/recipe/jwt/jwks',
  }),

  LUNA_API_URL: url({
    devDefault: 'http://localhost:4100',
  }),
  LUNA_TRPC_URL: url({
    devDefault: 'http://localhost:4100/api/trpc',
  }),
  LUNA_MONGODB_URI: url({
    devDefault: 'mongodb://luna:crafts@localhost:27017/',
  }),
  LUNA_MONGODB_DB_NAME: str({
    devDefault: 'mirrorboards',
  }),

  NARNIA_TRPC_URL: url({
    devDefault: 'http://localhost:4200/api/trpc',
  }),

  MIRRORBOARDS_WEB_APP_URL: url({
    devDefault: 'http://localhost:3000',
  }),
});
