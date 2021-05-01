import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './components/navbar/NavBar';
import Router from './router/Router';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Router />
    </BrowserRouter>
  );
}

export default App;
