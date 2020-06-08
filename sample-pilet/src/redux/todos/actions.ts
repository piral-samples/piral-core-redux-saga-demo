import { actionCreator } from 'tsrux';

export const addTodo = actionCreator('SAMPLE_PILET/ADD_TODO', (text: string) => ({ text }));
export const toggleTodo = actionCreator('SAMPLE_PILET/TOGGLE_TODO', (id: number) => ({ id }));
export const removeTodo = actionCreator('SAMPLE_PILET/REMOVE_TODO', (id: number) => ({ id }));
