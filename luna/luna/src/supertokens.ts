import supertokens from 'supertokens-node';
import Dashboard from "supertokens-node/recipe/dashboard";
import Session from "supertokens-node/recipe/session";
import ThirdPartyEmailPassword from "supertokens-node/recipe/thirdpartyemailpassword";
import UserMetadata from "supertokens-node/recipe/usermetadata";
import { envs } from './envs';

const { Github } = ThirdPartyEmailPassword;

supertokens.init({
  framework: 'express',
  supertokens: {
    connectionURI: envs.SUPERTOKENS_API_URL
  },
  appInfo: {
    appName: 'mirrorboards',
    apiDomain: envs.LUNA_API_URL,
    websiteDomain: envs.LUNA_WEBSITE_URL,
    apiBasePath: '/auth',
    websiteBasePath: '/auth'
  },
  recipeList: [
    UserMetadata.init(),
    Dashboard.init({
      apiKey: 'keyboard_cat'
    }),
    ThirdPartyEmailPassword.init({
      providers: [
        Github({
          clientId: envs.OAUTH_GITHUB_CLIENT_ID,
          clientSecret: envs.OAUTH_GITHUB_CLIENT_SECRET
        }),
      ],
      override: {
        functions: (originalImplementation) => {
          return {
            ...originalImplementation,
            emailPasswordSignUp: async (input) => {
              const response = await originalImplementation.emailPasswordSignUp(input);

              if (response.status === 'OK') {
                await UserMetadata.updateUserMetadata(response.user.id, {
                  email: response.user.email,
                });
              }

              return response;
            },
            thirdPartySignInUp: async (input) => {
              const response = await originalImplementation.thirdPartySignInUp(input);

              if (response.status === 'OK' && response.createdNewUser) {
                await UserMetadata.updateUserMetadata(response.user.id, {
                  email: response.user.email,
                });
              }

              return response;
            },
          }
        }
      }
    }),
    Session.init({
      jwt: {
        enable: true,
      },
    }),
  ]
});
