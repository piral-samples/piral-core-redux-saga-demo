import React from 'react';

import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectMainMenuEntries, PiletMenuEntry, removeMenuEntry } from '../../../redux';
import { MenuLink } from '../../MenuLink';

interface MainMenuEntryProps {
    entry: PiletMenuEntry;
}

const MainMenuEntry = ({ entry }: MainMenuEntryProps) => {
    const dispatch = useDispatch();
    return (
        <li className="shell--sidebar-menu-entry">
            <MenuLink entry={entry} />
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
