import * as React from 'react';
import { render } from 'react-dom';
import { createInstance, Piral, SetComponent, SetRoute } from 'piral-core';

const Layout: React.FC = ({ children }) => (
    <div className="app-container">
        <div className="app-header">
            <h1>Header</h1>
        </div>
        <div className="app-content">{children}</div>
        <div className="app-footer">
            <h1>Footer</h1>
        </div>
    </div>
);

const instance = createInstance({
    requestPilets() {
        return new Promise((resolve) => setTimeout(() => resolve([]), 1000));
    },
});
const Dashboard = () => (
    <div>
        <a href="#">Dashboard</a>
    </div>
);

const app = (
    <Piral instance={instance}>
        <SetComponent name="Layout" component={Layout} />
        <SetRoute path="/" component={Dashboard} />
    </Piral>
);
render(app, document.querySelector('#app'));
