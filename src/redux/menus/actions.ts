import { actionCreator } from 'tsrux';
import { MenuEntry } from './types';

export const addMenuEntry = actionCreator('SHELL/MENU/ADD', (entry: MenuEntry) => ({
    entry,
}));
