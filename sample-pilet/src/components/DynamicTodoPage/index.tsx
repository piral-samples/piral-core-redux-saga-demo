import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import samplePiletModule from '../../redux/module';
import { TodoPage } from '../TodoPage';

export const DynamicTodoPage = () => (
    <DynamicModuleLoader modules={[samplePiletModule()]}>
        <TodoPage />
    </DynamicModuleLoader>
);
