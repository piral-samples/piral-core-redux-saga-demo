import React from 'react';

import './style.scss';
import { useSelector } from 'react-redux';
import { selectMainMenuEntries } from '../../../redux';
import { MenuLink } from '../../MenuLink';

export const ShellSidebar = () => {
    const entries = useSelector(selectMainMenuEntries);

    return (
        <div className="shell--sidebar">
            <h2>Navigation</h2>
            <ul>
                {entries.map((entry) => (
                    <li className="shell--sidebar-menu-entry" key={entry.name}>
                        <MenuLink entry={entry} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
