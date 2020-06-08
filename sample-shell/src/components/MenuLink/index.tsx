import React from 'react';
import { Link } from 'react-router-dom';
import { PiletMenuEntry } from '../../redux';

interface MenuLinkProps {
    entry: PiletMenuEntry;
    className?: string;
}

// If the link starts with a slash, we assume, that the link is an internal URL and use <Link> from react-router.
// Otherwise we assume it's an external URL and should use a normal <a> element.
export const MenuLink = ({ entry, className }: MenuLinkProps) =>
    entry.href.startsWith('/') ? (
        <Link
            to={entry.href}
            key={entry.name}
            rel="noopener noreferrer"
            target={entry.target}
            className={className}
        >
            {entry.label}
        </Link>
    ) : (
        <a
            href={entry.href}
            key={entry.name}
            rel="noopener noreferrer"
            target={entry.target}
            className={className}
        >
            {entry.label}
        </a>
    );
