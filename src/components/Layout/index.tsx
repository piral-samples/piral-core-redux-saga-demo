import React from 'react';

import './style.scss';
import { ShellHeader } from './ShellHeader';
import { ShellFooter } from './ShellFooter';

export const Layout: React.FC = ({ children }) => (
    <div className="shell--layout">
        <ShellHeader />
        <div className="shell--layout-content">{children}</div>
        <ShellFooter />
    </div>
);
