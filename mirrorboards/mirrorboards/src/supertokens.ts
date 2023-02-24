import SuperTokens from 'supertokens-auth-react';
import ThirdPartyEmailPassword, { Apple, Facebook, Github, Google } from 'supertokens-auth-react/recipe/thirdpartyemailpassword';
import Session from 'supertokens-auth-react/recipe/session';
import { envs } from './envs';

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
    Session.init(),
  ]
});
