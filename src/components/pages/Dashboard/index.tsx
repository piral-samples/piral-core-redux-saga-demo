import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFoo, myAction } from '../../../redux';

export const Dashboard = () => {
    const foo = useSelector(selectFoo);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>This is the landing page!</h1>
            <p>foo: {foo}</p>
            <button onClick={() => dispatch(myAction('woot'))}>Click</button>
        </div>
    );
};
