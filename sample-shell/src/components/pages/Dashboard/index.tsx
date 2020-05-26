import React from 'react';
import { useDispatch } from 'react-redux';
import { addNotification, NotificationType } from '../../../redux';

let nextIndex = 0;

export const Dashboard = () => {
    const dispatch = useDispatch();
    const createNotification = (type: NotificationType) => {
        dispatch(
            addNotification({
                type,
                title: `${type}: Some Title`,
                text: `A longer description for ${type}.`,
            }),
        );
    };

    return (
        <div>
            <h1>This is the landing page!</h1>
            <button onClick={() => createNotification('info')}>Create Info Notification</button>
            <button onClick={() => createNotification('warn')}>Create Warn Notification</button>
            <button onClick={() => createNotification('error')}>Create Error Notification</button>
        </div>
    );
};
