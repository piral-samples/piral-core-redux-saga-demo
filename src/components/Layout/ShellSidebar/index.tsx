import React from 'react';

import './style.scss';
import { useSelector } from 'react-redux';
import { selectMainMenuEntries } from '../../../redux';

export const ShellSidebar = () => {
    const entries = useSelector(selectMainMenuEntries);

    return (
        <div className="shell--sidebar">
            <h2>Our Geeky Sidebar</h2>
            <ul>
                {entries.map((entry) => (
                    <li>
                        <a
                            href={entry.href}
                            key={entry.name}
                            rel="noopener noreferrer"
                            target={entry.target}
                        >
                            {entry.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
