import { actionCreator } from 'tsrux';
import { PiletMetadata } from 'piral-core';

// Gets dispatched just before a pilets setup function gets called.
// Can be used to reset state upon second setup call.
export const piletSetup = actionCreator('SHELL/PILETS/SETUP', (name: string) => ({
    name,
}));

export const fetchPilets = {
    start: actionCreator('SHELL/PILET/FETCH_START'),
    failure: actionCreator('SHELL/PILET/FETCH_FAILURE'),
    success: actionCreator('SHELL/PILET/FETCH_SUCCESS', (pilets: PiletMetadata[]) => ({
        pilets,
    })),
};
