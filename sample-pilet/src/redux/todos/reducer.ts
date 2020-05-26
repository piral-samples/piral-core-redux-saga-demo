import { mapReducers } from 'tsrux';

import { addTodoFailure, addTodoStart, addTodoSuccess, toggleDone } from './actions';
import { Todo } from './types';

const initialState = {
    nextId: 1,
    list: [] as Todo[],
    isProcessing: false,
};

export type TodosState = typeof initialState;

const todosReducer = mapReducers(initialState, (handle) => [
    handle(addTodoStart, (state) => ({
        ...state,
        isProcessing: true,
    })),
    handle(addTodoFailure, (state) => ({
        ...state,
        isProcessing: false,
    })),
    handle(addTodoSuccess, (state, action) => ({
        ...state,
        isProcessing: false,
        nextId: state.nextId + 1,
        list: [...state.list, { ...action.payload, id: state.nextId }],
    })),
    handle(toggleDone, (state, action) => ({
        ...state,
        list: state.list.map((todo) =>
            todo.id === action.payload.id ? { ...todo, done: !action.payload.done } : todo,
        ),
    })),
]);

export default todosReducer;
