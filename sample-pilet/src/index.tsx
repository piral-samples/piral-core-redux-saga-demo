import { PiletApi, addNotification } from 'sample-piral-core-jambit';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

import TodoPage from './components/TodoPage';

const ShowNotification = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            addNotification({
                type: 'info',
                title: 'Sample Pilet FTW',
                text: 'The sample pilet can fire notifications!',
            }),
        );
    });
    return <div>You should see a notification</div>;
};

export function setup(app: PiletApi) {
    app.registerMenu({
        type: 'mainmenu',
        name: 'pilet',
        label: 'Todo List',
        href: '/todo',
    });
    app.registerMenu({
        type: 'footer',
        name: 'pilet',
        label: 'Pilet Notification',
        href: '/pilet-notification',
    });
    app.registerPage('/todo', TodoPage);
    app.registerPage('/pilet-notification', ShowNotification);
}
