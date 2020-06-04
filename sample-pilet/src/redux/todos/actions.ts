import { actionCreator } from 'tsrux';
import { Todo } from './types';

export const addTodo = actionCreator('SAMPLE/ADD_TODO', (text: string) => ({ text }));
export const toggleTodo = actionCreator('SAMPLE/TOGGLE_TODO', (id: number) => ({ id }));
export const removeTodo = actionCreator('SAMPLE/REMOVE_TODO', (id: number) => ({ id }));
