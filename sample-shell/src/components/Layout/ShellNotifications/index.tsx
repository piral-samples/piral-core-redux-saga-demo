import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    selectNotifications,
    NotificationEntry,
    removeNotification,
} from '../../../redux/notifications';
import './style.scss';

interface ShellNotificationEntryProps {
    entry: NotificationEntry;
}

const ShellNotificationEntry = ({ entry }: ShellNotificationEntryProps) => {
    const dispatch = useDispatch();

    useEffect(() => {
        let timer = setTimeout(() => {
            dispatch(removeNotification(entry.id));
        }, 4000);

        return () => {
            clearTimeout(timer);
        }
    }, []);
    
    return (
        <li className={`shell--notification shell--notification-${entry.type}`}>
            <div>
                <div className="shell--notification-title">{entry.title}</div>
                <div className="shell--notification-body">{entry.text}</div>
            </div>
            <button onClick={() => dispatch(removeNotification(entry.id))} type="button">
                x
            </button>
        </li>
    );
};

export const ShellNotifications = () => {
    const entries = useSelector(selectNotifications);

    return (
        <ul className="shell--notifications">
            {entries.map((entry) => (
                <ShellNotificationEntry entry={entry} key={entry.id} />
            ))}
        </ul>
    );
};
