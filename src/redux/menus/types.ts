export interface MenuEntry {
    type: 'footer' | 'mainmenu';
    name: string;
    label: string;
    href: string;
    target?: string;
}
