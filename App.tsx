import * as React from 'react';
import MainHeader from './components/main-header/main-header';

import './style.scss';
import Home from './pages/home/home';
import Case1 from './pages/case-studies/case-1/case-1';

let imgs = [
  'https://images.unsplash.com/photo-1672026231903-cc8a1d49e5a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3871&q=80',
];
export default function App() {
  return (
    <div className="Container">
      <MainHeader />
      {/* <Home /> */}
      <Case1 />
    </div>
  );
}
