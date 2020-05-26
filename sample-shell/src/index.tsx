import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createInstance, Piral, SetComponent, SetRoute, PiletApi } from 'piral-core';

import { Layout } from './components/Layout';
import { Dashboard } from './components/pages/Dashboard';
import configureStore from './redux/configureStore';
import { extendApi } from './extendApi';
import { Profile } from './components/pages/Profile';

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

function setupShell(app: PiletApi) {
    app.registerMenu({
        type: 'footer',
        name: 'legal',
        label: 'Legal',
        href: '#legal',
        target: '_blank',
    });
    app.registerMenu({
        type: 'mainmenu',
        name: 'home',
        label: 'Home',
        href: '/',
    });
    app.registerMenu({
        type: 'mainmenu',
        name: 'profile',
        label: 'Profile',
        href: '/profile',
    });
    app.registerMenu({
        type: 'mainmenu',
        name: 'google',
        label: 'Google',
        href: 'https://www.google.de',
    });
    app.registerPage('/', Dashboard);
    app.registerPage('/profile', Profile);
}

const store = configureStore();

const instance = createInstance({
    requestPilets,
    extendApi: extendApi(store),
    state: {
        components: {
            Layout,
        },
    },
});

setupShell(instance.root);

const app = (
    <Provider store={store}>
        <Piral instance={instance} />
    </Provider>
);
render(app, document.querySelector('#app'));
