import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodoSuccess } from '../../redux/todos/actions';

export const AddTodoSection = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <input id="vname" name="vname" />
            <button onClick={() => dispatch(addTodoSuccess('todo'))} type="button">
                Add Todo
            </button>
        </div>
    );
}
