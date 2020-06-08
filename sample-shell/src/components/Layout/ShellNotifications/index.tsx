import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    selectNotifications,
    NotificationEntry,
    removeNotification,
} from '../../../redux/notifications';
import './style.scss';
import { Button } from '../../form/Button';

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
            <div className="shell--notification-content">
                <div className="shell--notification-title">{entry.title}</div>
                <div className="shell--notification-body">{entry.text}</div>
            </div>
            <Button
                text="x"
                className="shell--notification-close"
                onClick={() => dispatch(removeNotification(entry.id))}
            />
        </li>
    );
};

export const ShellNotifications = () => {
    const entries = useSelector(selectNotifications);

    return entries.length === 0 ? null : (
        <ul className="shell--notifications">
            {entries.map((entry) => (
                <ShellNotificationEntry entry={entry} key={entry.id} />
            ))}
        </ul>
    );
};
