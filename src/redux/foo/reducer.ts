import { mapReducers } from 'tsrux';

import { myAction } from './actions';

const initialState = {
    foo: 'bar',
};

export type FooState = typeof initialState;

const fooReducer = mapReducers(initialState, (handle) => [
    handle(myAction, (state, action) => ({ foo: action.payload.value })),
]);

export default fooReducer;
