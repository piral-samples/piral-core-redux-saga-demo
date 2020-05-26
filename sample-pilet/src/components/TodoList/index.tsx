import React from 'react';
import { selectTodos } from '../../redux/todos/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodoEntry, toggleDone } from '../../redux/todos/actions';

export const TodoList = () => {
    const todos = useSelector(selectTodos).list;
    const dispatch = useDispatch();

    return (
        <div className="sample-pilet-todo-list">
            <ul>
                {todos.map((todo) => (
                    <li className="sample-pilet--todo-entry" onClick={() => dispatch(toggleDone(todo))}>
                        {todo.done
                            ? (<del>{todo.text}</del>)
                            : (todo.text)
                        }
                        <button onClick={() => dispatch(removeTodoEntry(todo))} type="button">
                            x
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
