import React from 'react';
import Loadable from 'react-loadable';

const Loading=(props)=>{
  return <div>Loading...</div>
}

const Index = Loadable({
  loader: () =>import(/* webpackChunkName: 'Index' */'../src/components/pages/Index'),
  delay:0,
  loading: Loading,
});
const NotFound = Loadable({
  loader: () =>import(/* webpackChunkName: 'NotFound' */'../src/components/pages/NotFound'),
  delay:0,
  loading: Loading,
});

const routesConfig=[{
  path: '/',
  exact: true,
  component: Index,
  thunk:()=>{}
}, {
  path: '/404',
  component: NotFound,
  thunk: ()=>{}
}];

export default routesConfig;




