import { Mirrorboard } from '../../models/Mirrorboard.model';

export const getMirrorboard = (data?: Partial<Mirrorboard>) => {
  const mirrorboard: Mirrorboard = {
    id: 'mirrorboard_1',
    title: 'Mirrorboard!',
    isPromoted: false,
    isPublic: false,
  }

  return {
    ...mirrorboard,
    ...data,
  }
}
