import supertokens from 'supertokens-node';
import Dashboard from "supertokens-node/recipe/dashboard";
import Session from "supertokens-node/recipe/session";
import ThirdPartyEmailPassword from "supertokens-node/recipe/thirdpartyemailpassword";
import UserMetadata from "supertokens-node/recipe/usermetadata";

const { Github } = ThirdPartyEmailPassword;

supertokens.init({
  framework: 'express',
  supertokens: {
    connectionURI: 'http://localhost:3567'
  },
  appInfo: {
    appName: 'mirrorboards',
    apiDomain: 'http://localhost:4000',
    websiteDomain: 'http://localhost:3000',
    apiBasePath: '/api/auth',
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
          clientId: 'c31deb67851c32a3aec7',
          clientSecret: 'd710223fc1953d1a9682682a305c6a7725a0c627',
          scope: ['user']
        }),
      ]
    }),
    Session.init(),
  ]
});
