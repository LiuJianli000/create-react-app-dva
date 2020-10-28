#### 使用 scss

`yarn add node-sass`

#### 使用 @

拉取配置：

`yarn run eject`

安装 `@babel/plugin-proposal-decorators`：

`yarn add @babel/plugin-proposal-decorators`

修改 `package.json` 文件：

```js
"babel": {
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ],
  "presets": [
    "react-app"
  ]
},
```

#### 引入 dva

`yarn add dva`

修改 `src/index.js`

```
import dva from 'dva';
import './index.css';

const createHistory=require("history").createHashHistory
 
// 1. Initialize
const app = dva({
    history:createHistory()
});
 
// 2. Plugins
// app.use({});
 
// 3. Model
app.model(require('./models/app').default);

// 4. Router
app.router(require('./router').default);
 
// 5. Start
app.start('#root');
```

添加 `src/models/app` 文件

```js
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  namespace: 'app',
  state: {
    name:'这是app的model'
  },

  effects: {
    
  },

  reducers: {}
};
```

添加 `src/router.js` 文件

```js
import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic'
 
const routes = [
  {
      path: '/todo-list',
      models: () => [import('./models/todoList.js')], //models可多个
      component: () => import('./pages/TodoList.js'),
  }, 
];
 
function RouterConfig({ history, app }) {
 
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact render={() => (<Redirect to="/todo-list" />)} />
        {
          routes.map(({path,...dynamics},index)=>(
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
```
#### 书写页面

`page/TodoList/index.js`

