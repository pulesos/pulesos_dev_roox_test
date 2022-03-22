import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import ProfileList from './components/ProfileList/ProfileList';
import Users from './components/Users/Users';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App () {
  
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            
            setUsers(res.data);
            setIsFetching(false);
        })
    }, [])

  const sortFunc = (sortName) => {
    const clone = [...users]
    setUsers(clone.sort(byField(sortName)))
  }

  const byField = (sortName) => {
    switch (sortName) {
      case 'city':
        return (a, b) => a.address.city > b.address.city ? 1 : -1
      case 'company':
        return (a, b) => a.company.name > b.company.name ? 1 : -1
      default:
        return null
    }
  }
    return (
      <div className="App">
        <Navbar sortFunc={sortFunc}/>
        <Routes>
          <Route path="" element={
            <Users users={users} isFetching={isFetching}/>}>
          </Route>
          <Route path="user/:id" element={
            <ProfileList users={users} isFetching={isFetching}/>}>
          </Route>
        </Routes>
      </div>
    );
  }


export default App;