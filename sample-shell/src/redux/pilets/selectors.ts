import { ShellState } from '../state';

export const selectPilets = (state: ShellState) => state.shell.pilets.list;
export const selectPiletsFetched = (state: ShellState) => state.shell.pilets.fetched;
