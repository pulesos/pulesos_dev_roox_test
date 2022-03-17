import React, {Component} from 'react';
import { connect } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import UsersContainer from './components/Users/UsersContainer';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Navbar/>
        <UsersContainer />
        
      </div>
    );
  }
}

export default App;
