import { mapReducers } from 'tsrux';
import { PiletMenuEntry } from './types';

import { addMenuEntry, removeMenuEntry } from './actions';
import { unloadPilet } from '../pilets/actions';

const initialState = {
    footer: [] as PiletMenuEntry[],
    mainmenu: [] as PiletMenuEntry[],
};

export type MenusState = typeof initialState;

export const menusReducer = mapReducers(initialState, (handle) => [
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
    // When a pilet gets unloaded, we might have leftovers from a pre-existing setup, which we should clear up.
    handle(unloadPilet, (state, action) => ({
        footer: state.footer.filter((entry) => entry.pilet !== action.payload.name),
        mainmenu: state.mainmenu.filter((entry) => entry.pilet !== action.payload.name),
    })),
]);
