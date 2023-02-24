import axios from 'axios';
import { envs } from '../envs';

export const refreshJWTToken = async () => {
  await axios.get(envs.VITE_LUNA_API_URL + '/auth/jwt/refresh');
}

export const destroyJWTToken = async () => {
  await axios.get(envs.VITE_LUNA_API_URL + '/auth/jwt/destroy');
}
