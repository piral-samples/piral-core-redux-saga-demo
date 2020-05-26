import { actionCreator } from 'tsrux';
import { PiletMenuEntry, MenuType } from './types';

export const removeMenuEntry = actionCreator(
    'SHELL/MENU/REMOVE',
    (type: MenuType, name: string) => ({
        type,
        name,
    }),
);

export const addMenuEntry = actionCreator('SHELL/MENU/ADD', (entry: PiletMenuEntry) => entry);
