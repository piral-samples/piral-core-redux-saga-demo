import { actionCreator } from 'tsrux';
import { NotificationData } from './types';

export const addNotification = actionCreator(
    'SHELL/NOTIFICATION/ADD',
    (entry: NotificationData) => entry,
);

export const removeNotification = actionCreator('SHELL/NOTIFICATION/REMOVE', (id: number) => ({
    id,
}));
