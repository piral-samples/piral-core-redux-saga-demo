import React, { useState, KeyboardEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todos/actions';
import { Key } from 'ts-keycode-enum';
import { addNotification, Button, Input } from 'sample-piral-core-jambit';
import './style.scss';

export const AddTodoForm = () => {
    const dispatch = useDispatch();

    const [todoText, setTodoText] = useState('');

    const submitTodo = () => {
        if (todoText != '') {
            dispatch(addTodo(todoText));
            setTodoText('');
            dispatch(
                addNotification({
                    type: 'info',
                    title: 'Todo List',
                    text: 'Todo successfully created! :)',
                }),
            );
        } else {
            dispatch(
                addNotification({
                    type: 'error',
                    title: 'Todo List',
                    text: 'Text is empty! Todo was not created! :(',
                }),
            );
        }
    };
    const onKeyDown = (e: KeyboardEvent) => {
        if (e.keyCode === Key.Enter) submitTodo();
    };

    return (
        <div className="sample-pilet--add-todo-form">
            <Input
                onKeyDown={onKeyDown}
                placeholder="Add Todo"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
            <Button text="Add Todo" onClick={submitTodo} />
        </div>
    );
};
