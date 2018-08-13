import React from 'react';
import Loadable from 'react-loadable';

const Loading=(props)=>{
  return <div>Loading...</div>
}

const Index = Loadable({
  loader: () =>import(/* webpackChunkName: 'Index' */'../src/components/pages/Index'),
  loading: Loading,
});
const LoadableUser = Loadable({
  loader: () =>import(/* webpackChunkName: 'NotFound' */'../src/components/pages/NotFound'),
  loading: Loading,
});

const routesConfig=[{
  path: '/',
  exact: true,
  component: Index,
  thunk:()=>{}
}, {
  path: '/user',
  component: LoadableUser,
  thunk: ()=>{}
}];

export default routesConfig;




