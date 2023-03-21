import { CreateMirrorboardComponent } from "./createMirrorboard.component";
import { useCommandDrawer } from '@reflection/commands';

export const createMirrorboardCommand = () => {
  const { push, ref } = useCommandDrawer();

  return {
    exec: async () => new Promise((resolve, reject) => {
      push(() => <CreateMirrorboardComponent
        onSuccess={() => {
          console.log('on success');
        }}
        onError={() => {
          console.log('on error');
        }} />
      );
    })
  }
}
