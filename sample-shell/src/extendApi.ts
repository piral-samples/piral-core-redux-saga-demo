import { IModuleStore } from "redux-dynamic-modules";
import { PiletApi, PiletMetadata } from "piral-core";
import { ShellState } from "./redux";
import {
  MenuEntry,
  addMenuEntry,
  MenuType,
  removeMenuEntry,
} from "./redux/menus";

const createMyShellApi = (
  store: IModuleStore<ShellState>,
  target: PiletMetadata
) => ({
  registerMenu(entry: MenuEntry) {
    const pilet = target.name || "";

    store.dispatch(
      addMenuEntry({
        ...entry,
        name: `${pilet}/${entry.name}`,
        pilet,
      })
    );
  },
  unregisterMenu(type: MenuType, name: string) {
    store.dispatch(removeMenuEntry(type, `${target.name}/${name}`));
  },
});

export function createStoreApi(store: IModuleStore<ShellState>) {
  return () => (_: PiletApi, target: PiletMetadata) =>
    createMyShellApi(store, target);
}

export type MyShellApi = ReturnType<typeof createMyShellApi>;

declare module "piral-core/lib/types/custom" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface PiletCustomApi extends MyShellApi {}
}
