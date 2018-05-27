import React from 'react';
import Home from './components/Home';
import UserList, { loadData } from './components/UserList';

const Routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    loadData,
    path: '/users',
    component: UserList
  }
];

export default Routes;
