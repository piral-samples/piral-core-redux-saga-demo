import { ISagaModule } from 'redux-dynamic-modules-saga';
import { combineReducers } from 'redux';

import { ShellState } from './state';
import { menusReducer } from './menus/reducer';
import { notificationsReducer } from './notifications/reducer';
import { piletsReducer } from './pilets/reducer';
import { piletsRootSaga } from './pilets/saga';

export function shellModule(): ISagaModule<ShellState> {
    return {
        id: 'shell',
        reducerMap: {
            shell: combineReducers({
                pilets: piletsReducer,
                menus: menusReducer,
                notifications: notificationsReducer,
            }),
        },
        sagas: [piletsRootSaga],
    };
}
