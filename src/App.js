import React from 'react';
import './style/App.css';
import { useRoutes } from 'react-router-dom';
import routesList from './router/routesList';
import Header from './layouts/Header';
import Footer from './layouts/Footer';


const App = () => {
  const  element  = useRoutes(routesList)
  return (
    <div className="App">
      <Header />
      {element}
      <Footer />
    </div>
  );
}

export default App;
