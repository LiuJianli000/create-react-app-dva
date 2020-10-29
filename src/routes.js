// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/todo-list',
    models: () => [import('./models/todoList.js')], //models可多个
    component: () => import('./pages/TodoList/index.js'),
  }, 
  {
    path: '/count',
    models: () => [import('./models/count.js')],
    component: () => import('./pages/Count/index.js')
  }
];