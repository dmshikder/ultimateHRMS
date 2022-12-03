import { Route, Routes } from 'react-router-dom';
import './App.css';
import Attendance from './components/Attendance/Attendance';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/attendance' element={<Attendance/>}></Route>
     
     </Routes>
    </div>
  );
}

export default App;
