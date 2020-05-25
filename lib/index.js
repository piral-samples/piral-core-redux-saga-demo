import * as React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { createInstance, useGlobalState, useAction, Piral, SetComponent, SetRoute, } from 'piral-core';
import { createMenuApi } from 'piral-menu';
import { createFeedsApi } from 'piral-feeds';
import { createFormsApi } from 'piral-forms';
import { createNotificationsApi } from 'piral-notifications';
import { createDashboardApi, Dashboard } from 'piral-dashboard';
import { createContainersApi } from 'piral-containers';
import { createSearchApi, useSearch } from 'piral-search';
import { availablePilets } from './pilets';
customElements.define('pi-spinner', class extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.classList.add('spinner', 'circles');
    }
});
const Loader = () => (React.createElement("div", { className: "app-center" },
    React.createElement("pi-spinner", null, "Loading ...")));
const Sitemap = () => {
    const pages = useGlobalState(s => s.registry.pages);
    return (React.createElement("ul", null,
        React.createElement("li", null,
            React.createElement(Link, { to: "/" }, "Go to /")),
        Object.keys(pages)
            .map(url => url.replace(':id', `${~~(Math.random() * 1000)}`))
            .map(url => (React.createElement("li", { key: url },
            React.createElement(Link, { to: url },
                "Go to ",
                url)))),
        React.createElement("li", null,
            React.createElement(Link, { to: "/sitemap" }, "Go to /sitemap")),
        React.createElement("li", null,
            React.createElement(Link, { to: "/not-found" }, "Go to /not-found"))));
};
const Menu = () => {
    const menuItems = useGlobalState(s => s.registry.menuItems);
    return (React.createElement("ul", { className: "app-nav" },
        React.createElement("li", null,
            React.createElement(Link, { to: "/" }, "Home")),
        Object.keys(menuItems).map(name => {
            const item = menuItems[name];
            if (item.settings.type === 'general') {
                const Component = item.component;
                return (React.createElement("li", { key: name },
                    React.createElement(Component, null)));
            }
            return undefined;
        }),
        React.createElement("li", null,
            React.createElement(Link, { to: "/sitemap" }, "Sitemap"))));
};
const SearchResults = () => {
    const { loading, items } = useGlobalState(m => m.search.results);
    return (React.createElement("div", { className: "search-results" },
        items.map((item, i) => (React.createElement("div", { className: "search-results-item", key: i }, item))),
        loading && (React.createElement("div", { className: "search-results-loading" },
            React.createElement(Loader, null)))));
};
const SearchForm = () => {
    const [value, setValue] = useSearch();
    const search = useAction('triggerSearch');
    return (React.createElement("form", { className: "search", onSubmit: ev => {
            search(value, true);
            return ev.preventDefault();
        } },
        React.createElement("input", { type: "search", placeholder: "Search", onChange: e => setValue(e.target.value), value: value }),
        React.createElement(SearchResults, null)));
};
const Notifications = () => {
    const notifications = useGlobalState(s => s.notifications);
    return (React.createElement("div", { className: "app-notifications" }, notifications.map(({ id, close, options, component: Component }) => (React.createElement("div", { className: `notification ${options.type || 'info'}`, key: id },
        React.createElement("div", { className: "notification-content" },
            options.title && React.createElement("div", { className: "notification-title" }, options.title),
            React.createElement("div", { className: "notification-message" },
                React.createElement(Component, { onClose: close, options: options }))),
        React.createElement("div", { className: "notification-close", onClick: close },
            React.createElement("img", { src: require('./close.svg') })))))));
};
const Layout = ({ children }) => {
    const layout = useGlobalState(s => s.app.layout);
    return (React.createElement("div", { className: "app-container" },
        React.createElement("div", { className: "app-header" },
            React.createElement("h1", null,
                "Sample Portal (",
                layout,
                ")"),
            React.createElement(SearchForm, null),
            React.createElement(Menu, null)),
        React.createElement("div", { className: "app-content" }, children),
        React.createElement("div", { className: "app-footer" },
            "For more information or the source code check out our",
            ' ',
            React.createElement("a", { href: "https://github.com/smapiot/piral" }, "GitHub repository"),
            "."),
        React.createElement(Notifications, null)));
};
const instance = createInstance({
    availablePilets,
    extendApi: [
        createMenuApi(),
        createNotificationsApi(),
        createContainersApi(),
        createDashboardApi(),
        createFeedsApi(),
        createFormsApi(),
        createSearchApi(),
    ],
    requestPilets() {
        return new Promise(resolve => setTimeout(() => resolve([]), 1000));
    },
});
const app = (React.createElement(Piral, { instance: instance },
    React.createElement(SetComponent, { name: "LoadingIndicator", component: Loader }),
    React.createElement(SetComponent, { name: "Layout", component: Layout }),
    React.createElement(SetRoute, { path: "/", component: Dashboard }),
    React.createElement(SetRoute, { path: "/sitemap", component: Sitemap })));
render(app, document.querySelector('#app'));
