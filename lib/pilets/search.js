import * as React from 'react';
/**
 * Shows a custom search registration.
 */
export const SearchPilet = {
    content: '',
    name: 'Search Module',
    version: '1.0.0',
    hash: '428',
    setup(piral) {
        piral.registerSearchProvider(q => new Promise(resolve => setTimeout(() => resolve([
            React.createElement("b", null,
                "Sample result 1 for ",
                q.query),
            React.createElement("i", null,
                "Sample result 2 for ",
                q.query),
            React.createElement("span", null, "Third result"),
            React.createElement("div", null, "4th result"),
            React.createElement("div", null, q.immediate ? 'IMMEDIATE' : 'chill'),
            {
                component: {
                    mount(element) {
                        element.innerHTML = '<span style="color: red;">I AM HTML</span>';
                    },
                },
                type: 'html',
            },
        ]), 1000)));
        piral.registerSearchProvider(q => new Promise(resolve => setTimeout(() => resolve([React.createElement("div", null,
                "Another result (",
                q.query,
                ")")]), 3500)), {
            onClear() {
                console.log('Cleared...');
            },
        });
        piral.registerSearchProvider(q => new Promise(resolve => setTimeout(() => resolve([React.createElement("div", null,
                "ONLY WHEN ENTER: (",
                q.query,
                ")")]), 100)), {
            onlyImmediate: true,
        });
    },
};
