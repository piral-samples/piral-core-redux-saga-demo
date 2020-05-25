import * as React from 'react';
import { render } from 'react-dom';
import { Link, RouteComponentProps } from 'react-router-dom';
import {
  createInstance,
  useGlobalState,
  LoadingIndicatorProps,
  useAction,
  Piral,
  SetComponent,
  SetRoute,
} from 'piral-core';
import { createMenuApi } from 'piral-menu';
import { createFeedsApi } from 'piral-feeds';
import { createFormsApi } from 'piral-forms';
import { createNotificationsApi } from 'piral-notifications';
import { createDashboardApi, Dashboard } from 'piral-dashboard';
import { createContainersApi } from 'piral-containers';
import { createSearchApi, useSearch } from 'piral-search';
import { availablePilets } from './pilets';


customElements.define(
  'pi-spinner',
  class extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.classList.add('spinner', 'circles');
    }
  },
);



const Notifications: React.FC = () => {
  const notifications = useGlobalState(s => s.notifications);

  return (
    <div className="app-notifications">
      {notifications.map(({ id, close, options, component: Component }) => (
        <div className={`notification ${options.type || 'info'}`} key={id}>
          <div className="notification-content">
            {options.title && <div className="notification-title">{options.title}</div>}
            <div className="notification-message">
              <Component onClose={close} options={options} />
            </div>
          </div>
          <div className="notification-close" onClick={close}>
            <img src={require('./close.svg')} />
          </div>
        </div>
      ))}
    </div>
  );
};






const Layout: React.FC = ({ children }) => {
  const layout = useGlobalState(s => s.app.layout);

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>Header</h1>
      </div>
      <div className="app-content">{children}</div>
      <div className="app-footer">
        <h1>Footer</h1>
      </div>
      <Notifications />
    </div>
  );
};




const instance = createInstance({
  availablePilets,
  extendApi: [
    createMenuApi(),
    createNotificationsApi(),
    createContainersApi(),
    createDashboardApi(),
    createFeedsApi(),
    createFormsApi(),
    createSearchApi(),
  ],
  requestPilets() {
    return new Promise(resolve => setTimeout(() => resolve([]), 1000));
  },
});




const app = (
  <Piral instance={instance}>
    <SetComponent name="Layout" component={Layout} />
    <SetRoute path="/" component={Dashboard} />
  </Piral>
);
render(app, document.querySelector('#app'));
