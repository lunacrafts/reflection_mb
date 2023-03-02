import { User } from '../../models/User.model';

export const getUser = (data?: Partial<User>) => {
  const user: User = {
    id: 'user_1',
    isSuperAdmin: false
  }

  return {
    ...user,
    ...data,
  }
}
