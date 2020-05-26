import { ShellState } from '../state';

export const selectFooterMenuEntries = (state: ShellState) => state.shell.menus.footer;
export const selectMainMenuEntries = (state: ShellState) => state.shell.menus.mainmenu;
