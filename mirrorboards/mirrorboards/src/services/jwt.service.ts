import axios from 'axios';
import { env } from 'env';

export const refreshJWTToken = async () => {
  await axios.get(env.AUTH_API_URL + '/auth/jwt/refresh');
}

export const destroyJWTToken = async () => {
  await axios.get(env.AUTH_API_URL + '/auth/jwt/destroy');
}
