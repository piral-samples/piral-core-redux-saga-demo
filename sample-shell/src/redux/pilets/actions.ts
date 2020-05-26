import { actionCreator } from 'tsrux';

// Gets dispatched just before a pilets setup function gets called.
// Can be used to reset state upon second setup call.
export const piletSetup = actionCreator('SHELL/PILET/SETUP', (name: string) => ({
    name,
}));
