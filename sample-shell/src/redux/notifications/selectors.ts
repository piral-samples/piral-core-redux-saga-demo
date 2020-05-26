import { ShellState } from '../state';

export const selectNotifications = (state: ShellState) => state.shell.notifications.list;
