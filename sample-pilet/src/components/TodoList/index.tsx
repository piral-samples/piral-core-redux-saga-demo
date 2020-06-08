import React from 'react';
import { selectTodos } from '../../redux/todos/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../../redux/todos/actions';
import './style.scss';
import { Todo } from '../../redux/todos/types';

interface TodoListEntryProps {
    todo: Todo;
}

const TodoListEntry = ({ todo }: TodoListEntryProps) => {
    const dispatch = useDispatch();
    return (
        <li
            className={`sample-pilet--todo-list-entry sample-pilet--todo-list-entry-${
                todo.done ? 'done' : 'not-done'
            }`}
        >
            <label className="sample-pilet--todo-list-label">
                <input
                    className="sample-pilet--todo-list-checkbox"
                    type="checkbox"
                    defaultChecked={todo.done}
                    onClick={() => dispatch(toggleTodo(todo.id))}
                ></input>
                <span className="sample-pilet--todo-list-text">{todo.text}</span>
            </label>
            <button
                className="sample-pilet--todo-list-remove"
                onClick={() => dispatch(removeTodo(todo.id))}
                type="button"
            >
                x
            </button>
        </li>
    );
};

export const TodoList = () => {
    const todos = useSelector(selectTodos).list;

    return (
        <ul className="sample-pilet--todo-list">
            {todos.map((todo) => (
                <TodoListEntry todo={todo} key={todo.id} />
            ))}
        </ul>
    );
};
