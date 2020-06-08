import { mapReducers } from 'tsrux';
import { PiletMetadata } from 'piral-core';

import { fetchPilets } from './actions';

const initialState = {
    list: [] as PiletMetadata[],
    fetched: false,
};

export type PiletsState = typeof initialState;

export const piletsReducer = mapReducers(initialState, (handle) => [
    handle(fetchPilets.success, (state, action) => ({
        ...state,
        list: action.payload.pilets,
        fetched: true,
    })),
    handle(fetchPilets.failure, (state, action) => ({
        ...state,
        fetched: true,
    })),
]);
