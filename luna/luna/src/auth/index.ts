import express from 'express';
import cookie from 'cookie';
import { verifySession } from "supertokens-node/recipe/session/framework/express";
import { SessionRequest } from 'supertokens-node/framework/express';

const app = express();

app.get('/jwt/refresh', verifySession(), async (req: SessionRequest, res) => {
  const access_token = req.session!.getAccessTokenPayload()["jwt"];

  const setCookie = cookie.serialize('access_token', access_token, {
    secure: false,
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
  });

  res.setHeader('Set-Cookie', setCookie);
  res.send(200);
});

app.get('/jwt/destroy', (req, res) => {
  res.clearCookie('access_token').send(200);
});

export default app;
