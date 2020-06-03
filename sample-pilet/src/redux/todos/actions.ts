import { actionCreator } from 'tsrux';
import { Todo } from './types';

export const addTodo = actionCreator('SAMPLE/ADD_TODO', (text: string) => ({ text }));
export const toggleDone = actionCreator('SAMPLE/TOGGLE_DONE', (todo: Todo) => todo);
export const removeTodo = actionCreator('SAMPLE/REMOVE_TODO', (todo: Todo) => todo);
