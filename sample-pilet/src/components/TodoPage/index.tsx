import React from 'react';
import { AddTodoForm } from '../AddTodoForm';
import { TodoList } from '../TodoList';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { samplePiletModule } from '../../redux/module';

const TodoPage = () => (
    <div>
        <h1>Todo Page</h1>
        <AddTodoForm />
        <TodoList />
    </div>
);

export const DynamicTodoPage = () => (
    <DynamicModuleLoader modules={[samplePiletModule()]}>
        <TodoPage />
    </DynamicModuleLoader>
);
