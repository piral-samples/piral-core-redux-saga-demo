import React from 'react';

import './style.scss';
import { ShellHeader } from './ShellHeader';
import { ShellFooter } from './ShellFooter';
import { ShellSidebar } from './ShellSidebar';
import { ShellNotifications } from './ShellNotifications';

export const Layout: React.FC = ({ children }) => (
    <div className="shell--layout">
        <ShellHeader />
        <div className="shell--layout-horizontal">
            <ShellSidebar />
            <div className="shell--layout-content">{children}</div>
            <ShellNotifications />
        </div>
        <ShellFooter />
    </div>
);
