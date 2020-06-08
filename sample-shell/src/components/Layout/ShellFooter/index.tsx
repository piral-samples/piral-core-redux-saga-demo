import React from 'react';

import './style.scss';
import { useSelector } from 'react-redux';
import { selectFooterMenuEntries } from '../../../redux';
import { MenuLink } from '../../MenuLink';

export const ShellFooter = () => {
    const entries = useSelector(selectFooterMenuEntries);

    return (
        <div className="shell--footer">
            {entries.map((entry) => (
                <MenuLink entry={entry} key={entry.name} className="shell--footer-link" />
            ))}
        </div>
    );
};
