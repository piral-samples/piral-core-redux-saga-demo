import React from 'react';
import { useDispatch } from 'react-redux';
import { addNotification, NotificationType } from '../../../redux';
import { Button } from '../../form/Button';

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
            <h1>Landing Page</h1>
            <h4>Create Notifications:</h4>
            <Button text="Info" onClick={() => createNotification('info')} />
            <Button text="Warn" onClick={() => createNotification('warn')} />
            <Button text="Error" onClick={() => createNotification('error')} />
        </div>
    );
};
