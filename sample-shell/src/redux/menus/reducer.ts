import { mapReducers } from 'tsrux';
import { MenuEntry } from './types';

import { addMenuEntry, removeMenuEntry } from './actions';

const initialState = {
    footer: [] as MenuEntry[],
    mainmenu: [] as MenuEntry[],
};

export type MenusState = typeof initialState;

const menusReducer = mapReducers(initialState, (handle) => [
    handle(addMenuEntry, (state, action) => ({
        ...state,
        [action.payload.type]: [...state[action.payload.type], action.payload],
    })),
    handle(removeMenuEntry, (state, action) => ({
        ...state,
        [action.payload.type]: state[action.payload.type].filter(
            (entry) => entry.name !== action.payload.name,
        ),
    })),
]);

export default menusReducer;
