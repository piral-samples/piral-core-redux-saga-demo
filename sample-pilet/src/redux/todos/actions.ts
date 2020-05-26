import { actionCreator } from 'tsrux';
import { Todo } from './types';

export const addTodoStart = actionCreator('SAMPLE/ADD_TODO_START', (text: string) => ({ text }));
export const addTodoSuccess = actionCreator('SAMPLE/ADD_TODO_SUCCESS', (text: string) => ({
    text,
    done: false,
}));
export const addTodoFailure = actionCreator('SAMPLE/ADD_TODO_FAILURE');

export const toggleDone = actionCreator('SAMPLE/TOGGLE_DONE', (todo: Todo) => todo);


export const createTodoEntry = actionCreator('SAMPLE/TODO/REMOVE', (todo: Todo) => todo);

export const removeTodoEntry = actionCreator('SAMPLE/TODO/REMOVE', (todo: Todo) => todo);
