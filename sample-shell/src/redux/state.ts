import { MenusState } from './menus/reducer';
import { NotificationsState } from './notifications/reducer';
import { PiletsState } from './pilets/reducer';

export interface ShellState {
    shell: {
        pilets: PiletsState;
        menus: MenusState;
        notifications: NotificationsState;
    };
}
