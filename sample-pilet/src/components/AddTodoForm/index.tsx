import React, { useState, KeyboardEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoSuccess } from '../../redux/todos/actions';
import { Key } from 'ts-keycode-enum';
import './style.scss';

export const AddTodoForm = () => {
    const dispatch = useDispatch();

    const [todoText, setTodoText] = useState('');

    const submitTodo = () => {
        if (todoText != '') {
            dispatch(addTodoSuccess(todoText));
            setTodoText('');
        }
        else {
            // TODO: show notification
        }
    };
    const onKeyDown = (e: KeyboardEvent) => {
        if(e.keyCode === Key.Enter)
            submitTodo();
    };

    return (
        <div>
            <input onKeyDown={onKeyDown} placeholder='Add Todo' value={todoText} onChange={e => setTodoText(e.target.value)} />
            <button className='sample-pilet--add-todo-button' onClick={submitTodo} type="button">
                Add Todo
            </button>
        </div>
    );
}
