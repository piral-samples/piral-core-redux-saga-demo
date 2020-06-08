import { IModule } from 'redux-dynamic-modules';
import { combineReducers } from 'redux';

import { SamplePiletState } from './state';
import { todosReducer } from './todos/reducer';

export function samplePiletModule(): IModule<SamplePiletState> {
    return {
        id: 'sample-pilet',
        reducerMap: {
            samplePilet: combineReducers({
                todos: todosReducer,
            }),
        },
    };
}
