import express from 'express';
import cookie from 'cookie';
import { verifySession } from "supertokens-node/recipe/session/framework/express";

const app = express();

app.get('/refresh', verifySession(), async (req, res) => {
  // @ts-ignore
  const access_token = req.session.getAccessTokenPayload()["jwt"];

  const setCookie = cookie.serialize('jwt_access_token', access_token, {
    secure: false,
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
  });

  res.setHeader('Set-Cookie', setCookie);
  res.send(200);
});

app.get('/destroy', (req, res) => {
  res.clearCookie('jwt_access_token').send(200);
});

export default app;
