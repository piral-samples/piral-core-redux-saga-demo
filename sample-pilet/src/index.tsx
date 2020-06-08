import { PiletApi } from 'piral-core-redux-saga-demo-shell';

import { DynamicTodoPage } from './components/TodoPage';

export function setup(app: PiletApi) {
    app.registerMenu({
        type: 'mainmenu',
        name: 'pilet',
        label: 'Todo List',
        href: '/todo',
    });
    app.registerMenu({
        type: 'footer',
        name: 'pilet',
        label: 'Todo List',
        href: '/todo',
    });
    app.registerPage('/todo', DynamicTodoPage);
}
