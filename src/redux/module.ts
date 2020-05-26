import { IModule } from 'redux-dynamic-modules';
import { combineReducers } from 'redux';

import { ShellState } from './state';
import fooReducer from './foo/reducer';

export default function shellModule(): IModule<ShellState> {
    return {
        id: 'shell',
        reducerMap: {
            shell: combineReducers({
                foo: fooReducer,
            }),
        },
    };
}
