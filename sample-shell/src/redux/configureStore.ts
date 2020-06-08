import { createStore } from 'redux-dynamic-modules';
import { getSagaExtension } from 'redux-dynamic-modules-saga';

import { shellModule } from './module';

export function configureStore() {
    return createStore(
        {
            extensions: [getSagaExtension()],
        },
        shellModule(),
    );
}
