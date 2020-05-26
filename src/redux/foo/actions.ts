import { actionCreator } from 'tsrux';

export const myAction = actionCreator('SHELL/MY_ACTION', (value: string) => ({
    value,
}));
