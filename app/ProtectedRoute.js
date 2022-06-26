import React from 'react';
import { Route, Redirect } from 'react-router';
import routes from './constants/routes';

import App from './app';
import Login from './features/login';
import Dashboard from './features/dashboard';
import CustomerDirectory from './features/customerDirectory';
import Statements from './features/statements';
import Journals from './features/journals';
import Reports from './features/reports';
import Settings from './features/settings';
import HelpCenter from './features/helpcenter';
import PrivacyPolicy from './features/policies';

const ProtectedRoute = props => {
  if (props.check) {
    return (
      <App>
        <Route
          render={() => (
            <>
              <Route path={routes.DASHBOARD} component={Dashboard} />
              <Route
                path={routes.CUSTOMER_DIRECTORY}
                component={CustomerDirectory}
              />
              <Route path={routes.STATEMENTS} component={Statements} />
              <Route path={routes.JOURNALS} component={Journals} />
              <Route path={routes.REPORTS} component={Reports} />
              <Route path={routes.SETTINGS} component={Settings} />
              <Route path={routes.HELPCENTER} component={HelpCenter} />
              <Route path={routes.PRIVACYPOLICY} component={PrivacyPolicy} />
              <Route
                path="*"
                render={() => <Redirect to={routes.DASHBOARD} />}
              />
            </>
          )}
        />
      </App>
    );
  }
  return (
    <>
      <Route
        render={() => (
          <>
            <Route path={routes.LOGIN} component={Login} />
            <Route path="*" render={() => <Redirect to={routes.LOGIN} />} />
          </>
        )}
      />
    </>
  );
};
export default ProtectedRoute;
