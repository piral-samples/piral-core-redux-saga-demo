import React from 'react';
import { selectTodos } from '../../redux/todos/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodoEntry, toggleDone } from '../../redux/todos/actions';
import './style.scss';

export const TodoList = () => {
    const todos = useSelector(selectTodos).list;
    const dispatch = useDispatch();

    return (
        <div className="sample-pilet-todo-list">
            
            <ul>
                {todos.map((todo) => (                    
                    <div className="sample-pilet--todo-entry">
                        <input type="checkbox" checked={todo.done} onClick={() => dispatch(toggleDone(todo))}></input>
                        {todo.done
                            ? <span className='sample-pilet--todo-entry-text-done'>{todo.text}</span>
                            : <span className='sample-pilet--todo-entry-text'>{todo.text}</span>
                        }
                        <button onClick={() => dispatch(removeTodoEntry(todo))} type="button">
                        x
                        </button>
                    </div> 
                ))}
            </ul>
        </div>
    );
}
