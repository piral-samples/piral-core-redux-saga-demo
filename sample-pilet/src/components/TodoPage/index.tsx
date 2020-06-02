import React from 'react';
import { AddTodoForm } from '../AddTodoForm';
import { TodoList } from '../TodoList';

export const TodoPage = () => (
    <div>
        <h1>Todo Page</h1>
        <AddTodoForm />
        <TodoList />
    </div>
);
