import { ShellState } from '../state';

export const selectFoo = (state: ShellState) => state.shell.foo.foo;
