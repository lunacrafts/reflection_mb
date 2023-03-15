import { Command, useCommandsContext, useCommandsMount } from '@reflection/commands';
import { Luna } from 'luna-sdk';
import React, { useEffect } from 'react';
import { luna } from '../../../trpc/luna.trpc';
import { Drawer } from '@mantine/core';


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

const WithDrawer = () => {
  const [opened, setOpened] = React.useState(false);

  React.useEffect(() => {
    setOpened(true);
  }, []);

  return <Drawer
    opened={opened}
    position={'right'}
    onClose={() => {
      setOpened(false);
      // pop();
      // reject();
    }} onEnded={() => {
      console.log('ended')
    }}>
    <MirrorboardForm
      onSuccess={(data) => {
        // pop();
        // resolve(data);
      }}
    />
  </Drawer>
}

export const createMirrorboardCommand: Command<Luna.Mirrorboard> = () => {
  const { push, pop } = useCommandsMount();

  return {
    namespace: 'createMirrorboardCommand',
    exec: async () => new Promise((resolve, reject) => {
      push(() => <WithDrawer />);
    })
  }
}
