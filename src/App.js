import './App.css';
import Home from './pages/Home.jsx';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout.jsx';
import { ExerciseContext } from './Components/ExerciseContext.jsx';
import {AboutUs} from './Components/Company.jsx';
import ExerciseDetail from './pages/ExerciseDetail.jsx';
import { ExerciseProvider } from './Components/ExerciseContext.jsx';
import Login from './Components/Login';
import Register from './Components/Register.jsx';


function App() {
  return (
      <ExerciseProvider> 
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
            <Route path="/company" element={<AboutUs/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            </Route>
        </Routes>
      </ExerciseProvider> 
  );
}

export default App;
