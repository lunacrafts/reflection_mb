import SuperTokens from 'supertokens-auth-react';
import ThirdPartyEmailPassword, { Apple, Facebook, Github, Google } from 'supertokens-auth-react/recipe/thirdpartyemailpassword';
import Session from 'supertokens-auth-react/recipe/session';

SuperTokens.init({
  appInfo: {
    appName: 'mirrorboards',
    apiDomain: 'http://localhost:4000',
    websiteDomain: 'http://localhost:3000',
    apiBasePath: '/api/auth',
    websiteBasePath: '/auth',
  },
  recipeList: [
    ThirdPartyEmailPassword.init({
      signInAndUpFeature: {
        providers: [
          Github.init(),
          Google.init(),
          Facebook.init(),
          Apple.init(),
        ]
      }
    }),
    Session.init(),
  ]
});
