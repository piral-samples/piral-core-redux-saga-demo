import * as React from 'react';
import { render } from 'react-dom';
import { createInstance, Piral, SetComponent, SetRoute } from 'piral-core';
import { Layout } from './components/Layout';
import { Dashboard } from './components/pages/Dashboard';

const instance = createInstance({
    requestPilets() {
        return new Promise((resolve) => setTimeout(() => resolve([]), 1000));
    },
});

const app = (
    <Piral instance={instance}>
        <SetComponent name="Layout" component={Layout} />
        <SetRoute path="/" component={Dashboard} />
    </Piral>
);
render(app, document.querySelector('#app'));
