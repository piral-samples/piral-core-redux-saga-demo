import { MenusState } from './menus/reducer';
import { NotificationsState } from './notifications/reducer';

export interface ShellState {
    shell: {
        menus: MenusState;
        notifications: NotificationsState;
    };
}
