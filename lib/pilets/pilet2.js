import * as React from 'react';
import { Link } from 'react-router-dom';
/**
 * Shows the usage of another module, here with a
 * feed connector.
 */
export const Pilet2 = {
    content: '',
    name: 'Sample Module',
    version: '1.0.0',
    hash: '2',
    setup(piral) {
        console.log(piral);
        const connect = piral.createConnector({
            initialize() {
                return new Promise(resolve => setTimeout(() => resolve(['one', 'two', 'three']), 2000));
            },
            connect(cb) {
                let i = 0;
                const id = setInterval(() => {
                    cb(`${i++}`);
                }, 1000);
                return () => clearInterval(id);
            },
            update(data, item) {
                return [...data, item];
            },
        });
        piral.registerTile(() => React.createElement("div", { className: "tile" }, "Rendered tile from another module."));
        piral.registerMenu(() => React.createElement(Link, { to: "/example3" }, "Example 3"), { type: 'general' });
        piral.registerPage('/example3', connect(({ data }) => (React.createElement("div", null,
            React.createElement("b", null, "This is the example page from module 2 (sample module)!"),
            React.createElement("p", null, "Loaded the following data:"),
            React.createElement("ul", null, data.map((item, i) => (React.createElement("li", { key: i }, item))))))));
    },
};
