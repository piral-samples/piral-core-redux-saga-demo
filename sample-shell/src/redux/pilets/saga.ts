import { put, all, call } from 'typed-redux-saga';

import { fetchPilets } from './actions';
import { addNotification } from '../notifications';

export function* piletsRootSaga() {
    yield* all([fetchPiletsSaga()]);
}

export function* fetchPiletsSaga() {
    try {
        const piletFeedUrl = 'http://localhost:9000/api/v1/pilet';
        const requestParams: RequestInit & { headers: Headers } = {
            method: 'GET',
            headers: new Headers({ Accept: 'application/json' }),
        };
        requestParams.cache = 'no-cache';
        requestParams.cache = 'no-cache';
        const timestamp = yield* call([Date, 'now']);
        const response = yield* call(fetch, `${piletFeedUrl}?t=${timestamp}`, requestParams);

        if (!response.ok) {
            throw new Error('Pilet fetch response not OK');
        }
        const responseBody = yield* call([response, 'json']);
        yield* put(fetchPilets.success(responseBody.items));
    } catch (e) {
        console.error('Could not load pilets from feed', e);
        yield* put(fetchPilets.failure());
        yield* put(
            addNotification({
                type: 'error',
                title: 'Failed fetching pilets!',
                text: 'Could not fetch pilets. Make sure your feed service is running!',
            }),
        );
    }
}
