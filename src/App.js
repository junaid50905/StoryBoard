import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/Navigation';
import AllRouters from './components/router/AllRouters';



function App() {
  return (
    <>
      <Navigation/>
      <BrowserRouter>
        <AllRouters/>
      </BrowserRouter>
      </>
  );
}

export default App;
