import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoSuccess } from '../../redux/todos/actions';
import './style.scss';

export const AddTodoSection = () => {
    const dispatch = useDispatch();

    const [todoText, setTodoText] = useState('');

    return (
        <div>
            <input placeholder='Add Todo' value={todoText} onChange={e => setTodoText(e.target.value)} />
            <button className='sample-pilet--add-todo-button' onClick={() => {
                dispatch(addTodoSuccess(todoText));
                setTodoText('');
            }} type="button">
                Add Todo
            </button>
        </div>
    );
}
