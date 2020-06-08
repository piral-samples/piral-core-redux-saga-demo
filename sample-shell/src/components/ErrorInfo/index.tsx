import React, { useEffect } from 'react';
import { ErrorInfoProps } from 'piral-core';

export const errorComponents = {
    page: () => <div>An error occured in this page!</div>,
    not_found: () => <div>This page was not found!</div>,
    // The loading component will be rendered without the usual layout!
    loading: () => <div>Fatal: Could not load application!</div>,
    generic: () => <div>An error occured!</div>,
};

type ErrorComponentType = keyof typeof errorComponents;

export const ErrorInfo = (props: ErrorInfoProps) => {
    // log error on first render only (to avoid spamming)
    useEffect(() => {
        if (props.type !== 'not_found') {
            console.error(`Error of type '${props.type}'`, props);
        }
    }, []);

    try {
        const type = props.type as ErrorComponentType;
        const Component = errorComponents[type] || errorComponents.generic;
        return <Component />;
    } catch (e) {
        console.error('Error while rendering error component', e);
        return null;
    }
};
