import React from 'react';
import { selectTodos } from '../../redux/todos/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleDone } from '../../redux/todos/actions';
import './style.scss';

export const TodoList = () => {
    const todos = useSelector(selectTodos).list;
    const dispatch = useDispatch();

    return (
        <div className="sample-pilet-todo-list">
            <ul>
                {todos.map((todo) => (                    
                    <div className={`sample-pilet--todo-entry sample-pilet--todo-entry-${todo.done ? 'done' : 'not-done'}`}>
                        <input type="checkbox" checked={todo.done} onClick={() => dispatch(toggleDone(todo))}></input>
                        {todo.text}
                        <button onClick={() => dispatch(removeTodo(todo))} type="button">
                        x
                        </button>
                    </div> 
                ))}
            </ul>
        </div>
    );
}
