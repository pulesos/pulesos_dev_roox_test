import React from 'react';
import { connect } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import UsersContainer from './components/Users/UsersContainer';

function App () {
  
    return (
      <div className="App">
        <Navbar/>
        <UsersContainer />
        
      </div>
    );
  }


export default App;