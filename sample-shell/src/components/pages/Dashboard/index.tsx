import React from 'react';
import { useDispatch } from 'react-redux';
import { addMenuEntry, MenuType } from '../../../redux';

let nextIndex = 0;

export const Dashboard = () => {
    const dispatch = useDispatch();
    const createMenuEntry = (type: MenuType) => {
        const index = nextIndex++;
        dispatch(
            addMenuEntry({
                type,
                name: `item_${index}`,
                label: `Link ${index}`,
                href: '#',
                pilet: 'root',
            }),
        );
    };

    return (
        <div>
            <h1>This is the landing page!</h1>
            <button onClick={() => createMenuEntry('footer')}>Add Footer Menu Entry</button>
            <button onClick={() => createMenuEntry('mainmenu')}>Add Main Menu Entry</button>
        </div>
    );
};
