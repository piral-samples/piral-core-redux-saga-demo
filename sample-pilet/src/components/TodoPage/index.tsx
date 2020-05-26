import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import samplePiletModule from '../../redux/module';

export const TodoPage = () => (
    <DynamicModuleLoader modules={[samplePiletModule()]}>
        <div>Todos</div>
    </DynamicModuleLoader>
);
