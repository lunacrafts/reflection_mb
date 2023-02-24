import SuperTokens from 'supertokens-auth-react';
import ThirdPartyEmailPassword, { Apple, Facebook, Github, Google } from 'supertokens-auth-react/recipe/thirdpartyemailpassword';
import Session from 'supertokens-auth-react/recipe/session';
import { envs } from './envs';
import { destroyJWTToken, refreshJWTToken } from './services/jwt.service';

SuperTokens.init({
  appInfo: {
    appName: 'mirrorboards',
    apiDomain: envs.VITE_LUNA_API_URL,
    websiteDomain: envs.VITE_LUNA_WEBSITE_URL,
    apiBasePath: '/auth',
    websiteBasePath: '/auth',
  },
  recipeList: [
    ThirdPartyEmailPassword.init({
      signInAndUpFeature: {
        providers: [
          Github.init()
        ]
      }
    }),
    Session.init({
      postAPIHook: async (context) => {
        if (context.action === 'REFRESH_SESSION') {
          await refreshJWTToken();
        }

        if (context.action === 'SIGN_OUT') {
          await destroyJWTToken();
        }
      },
      onHandleEvent: async (context) => {
        if (context.action === 'SESSION_CREATED') {
          await refreshJWTToken();
        }

        if (context.action === 'SIGN_OUT' || context.action === 'UNAUTHORISED') {
          await destroyJWTToken();
        }
      }
    }),
  ]
});
