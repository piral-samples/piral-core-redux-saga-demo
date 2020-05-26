import { mapReducers } from 'tsrux';
import { MenuEntry } from './types';

import { addMenuEntry } from './actions';

const initialState = {
    footer: [] as MenuEntry[],
    mainmenu: [] as MenuEntry[],
};

export type MenusState = typeof initialState;

const menusReducer = mapReducers(initialState, (handle) => [
    handle(addMenuEntry, (state, action) => ({
        ...state,
        [action.payload.entry.type]: [...state[action.payload.entry.type], action.payload.entry],
    })),
]);

export default menusReducer;
