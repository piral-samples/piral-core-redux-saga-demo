export type MenuType = 'footer' | 'mainmenu';

export interface MenuEntry {
    type: MenuType;
    name: string;
    label: string;
    href: string;
    target?: string;
}
