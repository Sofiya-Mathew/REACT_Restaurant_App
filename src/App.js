import React from 'react'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Restaurantlist from './components/Restaurantlist';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ViewRestaurant from './components/ViewRestaurant';

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Header/>
        <Routes>
        <Route path='/' element={<Restaurantlist/>}/>
        <Route path='/viewrestaurant/:id' element={<ViewRestaurant/>}/>
        </Routes>
        <Footer/>
      </header>
      </Router>
    </div>
  );
}

export default App;
