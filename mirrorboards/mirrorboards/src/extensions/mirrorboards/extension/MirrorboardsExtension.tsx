import { MirrorboardsExtensionCommands } from "./MirrorboardsExtension.commands";
import { MirrorboardsExtensionReflection } from "./MirrorboardsExtension.reflection";

export const MirrorboardsExtension = () => {
  return <>
    <MirrorboardsExtensionReflection />
    <MirrorboardsExtensionCommands />
  </>
}
