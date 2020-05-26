import React from 'react';

import './style.scss';
import { useSelector } from 'react-redux';
import { selectFooterMenuEntries } from '../../../redux';

export const ShellFooter = () => {
    const entries = useSelector(selectFooterMenuEntries);

    return (
        <div className="shell--footer">
            {entries.map((entry) => (
                <a
                    href={entry.href}
                    key={entry.name}
                    rel="noopener noreferrer"
                    target={entry.target}
                >
                    {entry.label}
                </a>
            ))}
        </div>
    );
};
