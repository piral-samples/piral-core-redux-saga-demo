import * as React from 'react';
/**
 * Shows the general usage of the `setup` function together
 * with some tile and page registrations.
 * Also registeres some custom error page handlers. For details
 * on this, see DashboardModule.
 */
export const Pilet1 = {
    content: '',
    name: 'Example Module',
    version: '1.0.0',
    hash: '1',
    setup(piral) {
        console.log(piral);
        piral.registerTile({
            component: {
                mount(element, props) {
                    element.innerHTML = `
            <div class="tile">
              General rendering for a ${props.columns}x${props.rows} tile.
            </div>
          `;
                },
            },
            type: 'html',
        });
        piral.registerTile('example-react', () => (React.createElement("div", { className: "tile" },
            "Rendered a tile from React.",
            React.createElement("div", null,
                React.createElement("button", { onClick: () => piral.unregisterTile('example-react') }, "Unregister me!")))));
        piral.registerMenu(() => (React.createElement("a", { href: "http://www.google.com?q=piral", target: "_blank" }, "Google")), { type: 'general' });
        piral.registerPage('/example1', () => (React.createElement("div", null,
            React.createElement("p", null,
                "This is the first ",
                React.createElement("b", null, "example"),
                " page"),
            React.createElement("p", null, "Click for a notification."),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("button", { onClick: () => piral.showNotification('Hello there!') }, "Notify me! (Default)")),
                React.createElement("li", null,
                    React.createElement("button", { onClick: () => piral.showNotification('Hello there!', { type: 'error' }) }, "Notify me! (Error)")),
                React.createElement("li", null,
                    React.createElement("button", { onClick: () => piral.showNotification('Hello there!', { title: 'Some title' }) }, "Notify me! (With Title)")),
                React.createElement("li", null,
                    React.createElement("button", { onClick: () => piral.showNotification('Hello there!', { autoClose: 1000, type: 'success' }) }, "Notify me! (1s)")),
                React.createElement("li", null,
                    React.createElement("button", { onClick: () => piral.showNotification(React.createElement("span", null,
                            "Hello there; this is ",
                            React.createElement("b", null, "some longer text"),
                            "!"), { autoClose: 1500, type: 'warning' }) }, "Notify me! (longer, formatted text 1.5s)"))))));
        piral.registerPage('/example2', ({ piral }) => (React.createElement("div", null,
            React.createElement("p", null,
                "This is the second ",
                React.createElement("b", null, "example"),
                " page"),
            React.createElement("p", null,
                "IF YOU ARE IN AN ADVENTUROUS MOOD TRY",
                ' ',
                React.createElement("a", { onClick: e => {
                        piral.unregisterPage('/example2');
                        e.preventDefault();
                    }, href: "#" }, "THIS LINK"),
                "."))));
        piral.registerExtension('error', () => React.createElement("div", null, "Custom Error page"));
        piral.registerExtension('error', ({ params }) => {
            if (params.type === 'not_found') {
                return React.createElement("div", null, "The page was not found!!!");
            }
            return false;
        });
    },
};
