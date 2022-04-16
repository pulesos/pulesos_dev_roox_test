import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import ProfileList from './components/ProfileList/ProfileList';
import Users from './components/Users/Users';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { UserType } from './types/types';


function App () {
  
  const [users, setUsers] = useState<UserType[]>([]);
  const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            
            setUsers(res.data);
            setIsFetching(false);
        })
    }, [])

  const sortUsersByAddress = () => {
    setUsers([...users].sort((a, b) => (a.address!.city > b.address!.city) ? 1 : -1));
  }

  const sortUsersByCompany = () => {
    setUsers([...users].sort((a, b) => (a.company!.name > b.company!.name) ? 1 : -1));
  }

    return (
      <div className="App">
        <Navbar sortUsersByAddress={sortUsersByAddress} sortUsersByCompany={sortUsersByCompany}/>
        <Routes>
          <Route path="/" element={
            <Users users={users} isFetching={isFetching}/>}>
          </Route>
          <Route path="user/:id" element={
            <ProfileList {...users} isFetching={isFetching}/>}>
          </Route>
        </Routes>
      </div>
    );
  }


export default App;