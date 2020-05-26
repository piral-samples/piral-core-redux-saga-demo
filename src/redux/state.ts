import { MenusState } from './menus/reducer';

export interface ShellState {
    shell: {
        menus: MenusState;
    };
}
