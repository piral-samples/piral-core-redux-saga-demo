import * as React from 'react';
const MyTile = ({ count, increment }) => (React.createElement("div", { className: "tile" },
    React.createElement("div", null,
        React.createElement("b", null, "Preserves the count")),
    React.createElement("button", { onClick: increment }, count)));
/**
 * Shows an advanced usage of the global state container.
 */
export const ContainerPilet = {
    content: '',
    name: 'Container Module',
    version: '1.0.0',
    hash: '14',
    setup(piral) {
        const connect = piral.createState({
            state: {
                count: 0,
            },
            actions: {
                increment(dispatch) {
                    dispatch(state => ({
                        count: state.count + 1,
                    }));
                },
            },
        });
        piral.registerTile(connect(({ state, actions }) => React.createElement(MyTile, { count: state.count, increment: actions.increment })));
    },
};
