import jwksClient from 'jwks-rsa';
import JsonWebToken, { JwtHeader, SigningKeyCallback } from 'jsonwebtoken';
import { envs } from '../envs';

var client = jwksClient({
  jwksUri: envs.LUNA_JWKS_URL,
});

const getKey = (header: JwtHeader, callback: SigningKeyCallback) => {
  client.getSigningKey(header.kid, function (err, key) {
    var signingKey = key!.getPublicKey();
    callback(err, signingKey);
  });
}

export const decodeJWTToken = (access_token: string) => new Promise((resolve, reject) => {
  JsonWebToken.verify(access_token, getKey, {}, function (err, payload) {
    if (err) {
      return reject(err);
    }

    if (payload) {
      resolve(payload);
    } else {
      reject();
    }
  });
});
