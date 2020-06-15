import { IModuleStore } from 'redux-dynamic-modules';
import { PiletApi, PiletMetadata } from 'piral-core';
import { ShellState } from './redux';
import { MenuEntry, addMenuEntry, MenuType, removeMenuEntry } from './redux/menus';

const createMyShellApi = (store: IModuleStore<ShellState>, target: PiletMetadata) => ({
    registerMenu(entry: MenuEntry) {
        store.dispatch(
            addMenuEntry({
                ...entry,
                name: `${target.name}/${entry.name}`,
                pilet: target.name,
            }),
        );
    },
    unregisterMenu(type: MenuType, name: string) {
        store.dispatch(removeMenuEntry(type, `${target.name}/${name}`));
    },
});

export function extendApi(store: IModuleStore<ShellState>) {
    return () => (api: PiletApi, target: PiletMetadata) => ({
        ...api,
        ...createMyShellApi(store, target),
    });
}

export type MyShellApi = ReturnType<typeof createMyShellApi>;

declare module 'piral-core/lib/types/custom' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface PiletCustomApi extends MyShellApi {}
}
