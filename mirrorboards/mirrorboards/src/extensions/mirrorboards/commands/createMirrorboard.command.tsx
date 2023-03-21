import { Command, useCommandsContext, useCommandsMount } from '@reflection/commands';
import { Luna } from 'luna-sdk';
import React, { PropsWithChildren, useEffect } from 'react';
import { luna } from '../../../trpc/luna.trpc';
import { Drawer } from '@mantine/core';
import { PushDrawer, PushDrawerRef } from '../../../components/CommandDrawer/CommandDrawer';


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
  const ref = React.useRef<PushDrawerRef>(null);
  const { push, pop } = useCommandsMount();

  return {
    namespace: 'createMirrorboardCommand',
    exec: async () => new Promise((resolve, reject) => {
      push(() => {
        return <PushDrawer ref={ref} onClose={pop}>
          <MirrorboardForm
            onSuccess={(data) => {
              ref.current?.close();
              console.log(data);
              resolve(data);
            }}
          />
        </PushDrawer>
      });
    })
  }
}
