import React from 'react';
import { Luna } from 'luna-sdk';
import { luna } from '../../../../trpc/luna.trpc';

type CreateMirrorboardProps = {
  onSuccess?: (data: Luna.Mirrorboard) => void
}

export const CreateMirrorboard: React.FC<CreateMirrorboardProps> = (props) => {
  const create = luna.mirrorboards.create.useMutation();

  return <div>
    mirrorboard form!
    <div onClick={() => {
      props.onSuccess?.({
        id: 'mirrorboard-1',
        title: 'title',
        isPromoted: true,
        isPublic: true,
      });
    }}>success!</div>
  </div>
}
