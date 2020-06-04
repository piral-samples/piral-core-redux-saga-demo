import React from 'react';
import { selectTodos } from '../../redux/todos/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../../redux/todos/actions';
import './style.scss';

export const TodoList = () => {
    const todos = useSelector(selectTodos).list;
    const dispatch = useDispatch();

    return (
        <ul className="sample-pilet-todo-list">
            {todos.map((todo) => (
                <li className={`sample-pilet--todo-list-entry sample-pilet--todo-list-entry-${todo.done ? 'done' : 'not-done'}`}>
                    <label className="test">
                        <input className="sample-pilet-todo-list-checkbox" type="checkbox" checked={todo.done} onClick={() => dispatch(toggleTodo(todo.id))}></input>
                        <span className="sample-pilet-todo-list-text">{todo.text}</span>
                    </label>
                    <button className="sample-pilet-todo-list-remove-button" onClick={() => dispatch(removeTodo(todo.id))} type="button">
                    x
                    </button>
                </li>
            ))}
        </ul>
    );
}
