import { ReflectionExtension } from "@reflection/extension";
import { CurrentMirrorboardStatusBar } from "./extensions/currentMirroboard.statusBar";
import { NotificationsStatusBar } from "./extensions/notifications.statusBar";
import { ToggleFullscreenStatusBar } from "./extensions/toggleFullscreen.statusBar";
import { SettingsModule } from "./pages/settings/settings.module";

const MirrorboardsCore = () => {
  return (
    <>
      <SettingsModule />

      <CurrentMirrorboardStatusBar />
      <NotificationsStatusBar />
      <ToggleFullscreenStatusBar />
    </>
  );
};

const extension = new ReflectionExtension({
  scope: "mirrorboards.core",
  component: <MirrorboardsCore />,
});

export default extension;
