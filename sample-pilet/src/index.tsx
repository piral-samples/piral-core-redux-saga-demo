import { PiletApi } from 'sample-piral-core-jambit';

import TodoPage from './components/TodoPage';

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
    app.registerPage('/todo', TodoPage);
}
