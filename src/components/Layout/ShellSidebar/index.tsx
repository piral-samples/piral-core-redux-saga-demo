import React from 'react';

import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectMainMenuEntries, MenuEntry, removeMenuEntry } from '../../../redux';

interface MainMenuEntryProps {
    entry: MenuEntry;
}

const MainMenuEntry = ({ entry }: MainMenuEntryProps) => {
    const dispatch = useDispatch();
    return (
        <li className="shell--sidebar-menu-entry">
            <a href={entry.href} key={entry.name} rel="noopener noreferrer" target={entry.target}>
                {entry.label}
            </a>
            <button onClick={() => dispatch(removeMenuEntry(entry.type, entry.name))} type="button">
                x
            </button>
        </li>
    );
};

export const ShellSidebar = () => {
    const entries = useSelector(selectMainMenuEntries);

    return (
        <div className="shell--sidebar">
            <h2>Our Geeky Sidebar</h2>
            <ul>
                {entries.map((entry) => (
                    <MainMenuEntry entry={entry} key={entry.name} />
                ))}
            </ul>
        </div>
    );
};
