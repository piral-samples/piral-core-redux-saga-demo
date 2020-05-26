import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createInstance, Piral, SetComponent, SetRoute } from 'piral-core';

import { Layout } from './components/Layout';
import { Dashboard } from './components/pages/Dashboard';
import configureStore from './redux/configureStore';

async function requestPilets() {
    try {
        const piletFeedUrl = 'http://localhost:9000/api/v1/pilet';
        const requestParams: RequestInit & { headers: Headers } = {
            method: 'GET',
            headers: new Headers({ Accept: 'application/json' }),
        };
        requestParams.cache = 'no-cache';
        const response = await fetch(piletFeedUrl, requestParams);

        if (response.ok) {
            const responseBody = await response.json();
            return responseBody.items;
        } else {
            console.error('Could not load pilets from feed');
        }
    } catch (e) {
        console.error('Could not load pilets from feed');
    }
    return [];
}

const instance = createInstance({
    requestPilets,
});

const store = configureStore();

const app = (
    <Provider store={store}>
        <Piral instance={instance}>
            <SetComponent name="Layout" component={Layout} />
            <SetRoute path="/" component={Dashboard} />
        </Piral>
    </Provider>
);
render(app, document.querySelector('#app'));
