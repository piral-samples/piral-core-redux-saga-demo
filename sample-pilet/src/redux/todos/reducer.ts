import { mapReducers } from 'tsrux';

import { addTodo, toggleDone, removeTodo } from './actions';
import { Todo } from './types';

const initialState = {
    nextId: 1,
    list: [] as Todo[],
    isProcessing: false,
};

export type TodosState = typeof initialState;

const todosReducer = mapReducers(initialState, (handle) => [
    handle(addTodo, (state, action) => ({
        ...state,
        isProcessing: false,
        nextId: state.nextId + 1,
        list: [...state.list, { ...action.payload, id: state.nextId, done: false }],
    })),
    handle(toggleDone, (state, action) => ({
        ...state,
        list: state.list.map((todo) =>
            todo.id === action.payload.id ? { ...todo, done: !action.payload.done } : todo,
        ),
    })),
    handle(removeTodo, (state, action) => ({
        ...state,
        list: state.list.filter((todo) =>
            todo.id !== action.payload.id,
        ),
    })),
]);

export default todosReducer;
