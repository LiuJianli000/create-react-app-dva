import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic'
import routes from './routes'
 
function RouterConfig({ history, app }) {
 
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact render={() => (<Redirect to="/todo-list" />)} />
        {
          routes.map(({ path, ...dynamics }, index)=>(
            <Route
              key={index} 
              path={path} 
              exact 
              component={dynamic({
                app,
                ...dynamics
              })} 
            />
          ))
        }
      </Switch>
    </Router>
  );
}
 
export default RouterConfig;