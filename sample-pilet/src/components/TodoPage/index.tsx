import React from 'react';
import { AddTodoSection } from '../AddTodoSection';
import { TodoList } from '../TodoList';

export const TodoPage = () => (
    <div>
        <h1>Todo Page</h1>
        <AddTodoSection />
        <TodoList />
    </div>
);
