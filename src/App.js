import { useState } from 'react';
import './App.css';
import ListUsers from './Components/ListUsers';
import NavUser from './Components/NavUser';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Profil from './Components/Profil';

function App() {
  const [users,setUsers] = useState([
    {name : "Youssef", age : 23, city : "Jardin", id : Math.random()},
    {name : "Achref", age : 26, city : "Hay Tadhamen", id : Math.random()},
    {name : "Mahmoud", age : 20, city : "Mhamdia", id : Math.random()}
  ])
  return (
   <div>
      <NavUser/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Users' element={<ListUsers users={users}/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Profil/:id' element={<Profil users={users}/>}/>
      </Routes>
  
   </div>
  );
}

export default App;
