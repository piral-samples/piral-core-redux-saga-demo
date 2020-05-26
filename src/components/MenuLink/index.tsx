import React from 'react';
import { Link } from 'react-router-dom';
import { MenuEntry } from '../../redux';

interface MenuLinkProps {
    entry: MenuEntry;
}

// If the link starts with a slash, we assume, that the link is an internal URL and use <Link> from react-router.
// Otherwise we assume it's an external URL and should use a normal <a> element.
export const MenuLink = ({ entry }: MenuLinkProps) =>
    entry.href.startsWith('/') ? (
        <Link to={entry.href} key={entry.name} rel="noopener noreferrer" target={entry.target}>
            {entry.label}
        </Link>
    ) : (
        <a href={entry.href} key={entry.name} rel="noopener noreferrer" target={entry.target}>
            {entry.label}
        </a>
    );
