[![Piral Logo](https://github.com/smapiot/piral/raw/develop/docs/assets/logo.png)](https://piral.io)

# [Piral Sample](https://piral.io) &middot; [![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/smapiot/piral/blob/main/LICENSE) [![Gitter Chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/piral-io/community)

> Piral-Core Redux & Saga Demo

:zap: A demo of a microfrontend portal based on piral-core and Redux with Saga. 

This is a sample project using [piral-core](https://github.com/smapiot/piral/tree/develop/src/framework/piral-core) in combination with [redux](https://redux.js.org/) for global state and [redux-saga](https://redux-saga.js.org/) for side-effects.

We use [redux-dynamic-modules](https://redux-dynamic-modules.js.org/) to dynamically load reducers and sagas into redux when needed.

You can visit this demo at [core-redux-saga.samples.piral.cloud/](https://core-redux-saga.samples.piral.cloud/).

**Be aware**, that state added via `<DynamicModuleLoader>` is only available when the `<DynamicModuleLoader>` is actually mounted.

## Overview

- `sample-shell` contains the shell (core) application.
- `sample-pilet` contains a pilet (sub-application).

## How to Build

- Go into `sample-shell` and execute these commands:
  - `npm ci` => will install dependencies
  - `npm run build` => will create both a simulator package (in `dist/emulator/*.tgz`) and a release build.
- Go into `sample-pilet` and execute these commands:
  - `npm i ../sample-shell/dist/emulator/piral-core-redux-saga-demo-shell-0.11.5.tgz` => installs the simulator package you just build above.
  - `npm run build` => will create a release build.

Normally, you'd publish your simulator package for easier installment, but since this is a demo, it isn't published anywhere.

## How to Use

- To run the sample pilet in the simulator, follow these steps:
  - run `npm start` from within the `sample-pilet` directory.
    - This starts the simulator package and automatically loads the pilet into it.
  - Open your browser at http://localhost:3000
  - This is nice for debugging.
- To run the sample pilet in a more realistic way, follow these steps:
  - run `npm start` from within the `sample-shell` directory.
    - This starts the shell application normally (no simulator)
  - run `npm run feed` from within the `sample-shell` directory.
    - This starts a sample feed service
  - run `npm run publish-pilet:fresh` from within the `sample-pilet` directory.
    - This creates a fresh build of the pilet and publishes it on the sample feed service.
  - Open your browser at http://localhost:3000

## License

Piral and this sample code is released using the MIT license. For more information see the [license file](./LICENSE).
