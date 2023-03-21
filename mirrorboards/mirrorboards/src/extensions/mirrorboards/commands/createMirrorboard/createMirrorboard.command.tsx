import { Command, useCommandsMount } from '@reflection/commands';
import { Luna } from 'luna-sdk';
import React from 'react';
import { z } from 'zod';
import { PushDrawer, PushDrawerRef } from '../../../../components/CommandDrawer/CommandDrawer';
import { CreateMirrorboard } from './createMirrorboard.component';

export const createMirrorboardCommand: Command<Luna.Mirrorboard> = () => {
  const ref = React.useRef<PushDrawerRef>(null);
  const { push, pop } = useCommandsMount();

  return {
    namespace: 'createMirrorboardCommand',
    exec: async () => new Promise((resolve, reject) => {
      push(() => {
        return <PushDrawer ref={ref} onClose={pop}>
          <CreateMirrorboard
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
