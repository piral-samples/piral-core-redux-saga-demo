import * as React from 'react';
/**
 * Shows an advanced usage of the connector.
 */
export const ConnectorPilet = {
    content: '',
    name: 'Connector Module',
    version: '1.0.0',
    hash: '4',
    setup(piral) {
        const connect = piral.createConnector(() => new Promise((resolve, reject) => setTimeout(() => resolve(['one', 'two', 'three']), 5000)));
        const DataView = connect(props => (React.createElement("ul", null, props.data.map((item, i) => (React.createElement("li", { key: i }, item))))));
        piral.registerTile(() => (React.createElement("div", { className: "tile" },
            React.createElement("b", null, "This is the example tile from connector module."),
            React.createElement(DataView, null))));
    },
};
