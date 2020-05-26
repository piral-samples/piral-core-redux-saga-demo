import { createStore } from 'redux-dynamic-modules';

import shellModule from './module';

export default function configureStore() {
    return createStore({}, shellModule());
}
