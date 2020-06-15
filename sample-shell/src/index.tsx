// Polyfills
import 'core-js/es/map';
import 'core-js/es/set';
import 'core-js/es/promise';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'current-script-polyfill';

import * as React from 'react';
import { render } from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import {
    createInstance,
    Piral,
    PiletApi,
    extendSharedDependencies,
    PiletMetadata,
} from 'piral-core';

import { Layout } from './components/Layout';
import { Dashboard } from './components/pages/Dashboard';
import { configureStore } from './redux/configureStore';
import { extendApi } from './extendApi';
import { Profile } from './components/pages/Profile';
import { selectPiletsFetched, selectPilets, unloadPilet } from './redux/pilets';
import { LoadingIndicator } from './components/LoadingIndicator';
import { ErrorInfo } from './components/ErrorInfo';
import { IModuleStore } from 'redux-dynamic-modules';
import { ShellState } from './redux';

function setupShell(app: PiletApi, store: IModuleStore<ShellState>) {
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
        name: 'external',
        label: 'External Link',
        href: 'https://www.jambit.com',
        target: '_blank',
    });
    app.registerPage('/', Dashboard);
    app.registerPage('/profile', Profile);
    app.on('unload-pilet', (e) => {
        store.dispatch(unloadPilet(e.name));
    });
}

// Here we export our own module explicitly, since it's not possible to do this via the "externals" property in the package.json
// If this wasn't here, we could only export types to pilets, not functions, classes, etc. due to circular dependency issues.
const getDependencies = extendSharedDependencies({
    // eslint-disable-next-line global-require
    'piral-core-redux-saga-demo-shell': require('./exports'),
});

function init() {
    const store = configureStore();

    function createApp(pilets: PiletMetadata[]) {
        try {
            const instance = createInstance({
                getDependencies,
                requestPilets: async () => pilets,
                extendApi: extendApi(store),
                state: {
                    components: {
                        LoadingIndicator,
                        ErrorInfo,
                        Layout,
                    },
                },
            });
            setupShell(instance.root, store);

            return <Piral instance={instance} />;
        } catch (error) {
            return <ErrorInfo type="loading" error={error} />;
        }
    }

    function App() {
        const fetched = useSelector(selectPiletsFetched);
        const pilets = useSelector(selectPilets);
        const [app, setApp] = React.useState<JSX.Element | null>(null);
        React.useEffect(() => {
            if (fetched && pilets && !app) {
                setApp(createApp(pilets));
            }
        }, [fetched, pilets, app]);
        return app || <LoadingIndicator />;
    }

    render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.querySelector('#app'),
    );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (process.env.DEBUG_PILET && (window as any).exportPortalDependencies) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).portalDependencies = getDependencies();
} else {
    init();
}
