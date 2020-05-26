import { PiletApi } from 'sample-piral-core-jambit';

export function setup(app: PiletApi) {
    app.registerMenu({
        type: 'mainmenu',
        name: 'pilet',
        label: 'Sample Pilet',
        href: '#pilet',
        target: '_blank',
    });
}
