import { mapReducers } from 'tsrux';
import { NotificationEntry } from './types';

import { addNotification, removeNotification } from './actions';

const initialState = {
    nextId: 0,
    list: [] as NotificationEntry[],
};

export type NotificationsState = typeof initialState;

export const notificationsReducer = mapReducers(initialState, (handle) => [
    handle(addNotification, (state, action) => ({
        nextId: state.nextId + 1,
        list: [...state.list, { ...action.payload, id: state.nextId }],
    })),
    handle(removeNotification, (state, action) => ({
        ...state,
        list: state.list.filter((entry) => entry.id !== action.payload.id),
    })),
]);
