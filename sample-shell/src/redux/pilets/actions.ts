import { actionCreator } from 'tsrux';
import { PiletMetadata } from 'piral-core';

// Gets dispatched when a pilet gets injected (updated).
// Can be used to reset state before a second setup call.
export const unloadPilet = actionCreator('SHELL/PILETS/UNLOAD', (name: string) => ({
    name,
}));

export const fetchPilets = {
    start: actionCreator('SHELL/PILET/FETCH_START'),
    failure: actionCreator('SHELL/PILET/FETCH_FAILURE'),
    success: actionCreator('SHELL/PILET/FETCH_SUCCESS', (pilets: PiletMetadata[]) => ({
        pilets,
    })),
};
