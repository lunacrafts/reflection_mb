import { Command, useCommandsContext, useCommandsMount } from '@reflection/commands';
import { Luna } from 'luna-sdk';
import React, { useEffect } from 'react';
import { Z_PARTIAL_FLUSH } from 'zlib';
import { luna } from '../../../trpc/luna.trpc';

type MirrorboardFormProps = {
  onSuccess?: (data: Luna.Mirrorboard) => void
}

export const MirrorboardForm: React.FC<MirrorboardFormProps> = (props) => {
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

export const createMirrorboardCommand: Command<Luna.Mirrorboard> = () => {
  const { push, pop } = useCommandsMount();

  return {
    namespace: 'createMirrorboardCommand',
    exec: async () => new Promise((resolve, reject) => {
      push(() => (
        <MirrorboardForm onSuccess={(data) => {
          pop();
          resolve(data);
        }} />
      ));
    })
  }
}
