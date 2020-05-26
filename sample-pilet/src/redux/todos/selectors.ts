import { SamplePiletState } from '../state';

export const selectTodos = (state: SamplePiletState) => state.samplePilet.todos;
export const selectTodosProcessing = (state: SamplePiletState) =>
    state.samplePilet.todos.isProcessing;
