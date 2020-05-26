import { IModule } from 'redux-dynamic-modules';
import { combineReducers } from 'redux';

import { ShellState } from './state';
import menusReducer from './menus/reducer';
import notificationsReducer from './notifications/reducer';

export default function shellModule(): IModule<ShellState> {
    return {
        id: 'shell',
        reducerMap: {
            shell: combineReducers({
                menus: menusReducer,
                notifications: notificationsReducer,
            }),
        },
    };
}
