import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from '../src/auth/Login'
import IntroPage from './pages/index'
import FurnitureType from './shared/FurnitureType/index';
import FitnessType from './shared/FitnessType/index';
import VehicleType from './shared/VehicleType/index';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>   
        <Routes>
          <Route path='/' element={<IntroPage/>}/>             
          <Route path='/login' element={<Login/>}/>
          <Route path='/furniture' element={<FurnitureType/>} /> 
          <Route path='/fitness' element={<FitnessType/>} /> 
          <Route path='/vehicle' element={<VehicleType/>} />      
        </Routes>
     </BrowserRouter>
     

    </div>
  );
}

export default App;
