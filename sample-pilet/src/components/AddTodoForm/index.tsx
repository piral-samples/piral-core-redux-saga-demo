import React, { useState, KeyboardEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todos/actions';
import { Key } from 'ts-keycode-enum';
import { addNotification } from 'sample-piral-core-jambit';
import './style.scss';

export const AddTodoForm = () => {
    const dispatch = useDispatch();

    const [todoText, setTodoText] = useState('');

    const submitTodo = () => {
        if (todoText != 'a') {
            //dispatch(addTodo(todoText));

            dispatch(addTodo('aaaa'));
            dispatch(addTodo('a'));
            dispatch(addTodo('aaaa'));

            setTodoText('');
            dispatch(
                addNotification({
                    type: 'info',
                    title: 'Todo List',
                    text: 'Todo successfully created! :)',
                }),
            );
        }
        else {
            dispatch(
                addNotification({
                    type: 'info',
                    title: 'Todo List',
                    text: 'Todo was not created! :(',
                }),
            );
        }
    };
    const onKeyDown = (e: KeyboardEvent) => {
        if(e.keyCode === Key.Enter)
            submitTodo();
    };

    return (
        <div className='sample-pilet--add-todo-form'>
            <input className='sample-pilet--add-todo-input' onKeyDown={onKeyDown} placeholder='Add Todo' value={todoText} onChange={e => setTodoText(e.target.value)} />
            <button className='sample-pilet--add-todo-button' onClick={submitTodo} type="button">
                Add Todo
            </button>
        </div>
    );
}
