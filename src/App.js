import React from 'react';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.scss';
import Home from './screens/home/Home';

function App() {
  return (
    <div className="chef-kart-app">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
