import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import samplePiletModule from '../../redux/module';
import { selectTodos, selectTodosProcessing } from '../../redux/todos/selectors';
import { useSelector } from 'react-redux';
import { SamplePiletState } from '../../redux/state';
import { TodoPage } from '../TodoPage';

export const DynamicTodoPage = () => (
    <DynamicModuleLoader modules={[samplePiletModule()]}>
        <TodoPage />
    </DynamicModuleLoader>
);
