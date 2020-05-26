import { FooState } from './foo/reducer';

export interface ShellState {
    shell: {
        foo: FooState;
    };
}
