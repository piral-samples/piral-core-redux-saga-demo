import * as React from 'react';
import { Link } from 'react-router-dom';
import { Pilet } from 'piral-core';

/**
 * Shows the usage of another module, here with a
 * feed connector.
 */
export const Pilet2: Pilet = {
  content: '',
  name: 'Sample Module',
  version: '1.0.0',
  hash: '2',
  setup(piral) {
    console.log(piral);

    const connect = piral.createConnector({
      initialize() {
        return new Promise<Array<string>>(resolve => setTimeout(() => resolve(['one', 'two', 'three']), 20));
      },
      connect(cb) {
        let i = 0;
        const id = setInterval(() => {
          cb(`${i++}`);
        }, 1000);
        return () => clearInterval(id);
      },
      update(data: Array<string>, item: string) {
        return [...data, item];
      },
    });

    piral.registerTile(() => <div className="tile">Rendered tile from another module. <Link to="/newpage">New Page</Link></div>);

    piral.registerPage(
      '/newpage',
      connect(() => (
        <div>
          <h1>New Page</h1>
          <Link to="/">back</Link>
        </div>
      )),
    );
  },
};