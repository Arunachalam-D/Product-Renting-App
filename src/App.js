import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from '../src/auth/Login'
import IntroPage from './pages/index'

import FurnitureType from './shared/Furniture/index';
import FitnessType from './shared/Fitness/index';

import ElectronicType from './shared/ElectonicsType/index'
import Appliances from './shared/Appliances/index'
import VehicleType from './shared/Vehicles/index';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>   
        <Routes>
          <Route path='/' element={<IntroPage/>}/>             
          <Route path='/login' element={<Login/>}/>
          <Route path='/furniture' element={<FurnitureType/>} /> 

          <Route path='/electronic' element={<ElectronicType/>} /> 
          <Route path='/fitness' element={<FitnessType/>} /> 
          <Route path='/vehicle' element={<VehicleType/>} />
          <Route path='/appliances' element={<Appliances/>} />      

        </Routes>
     </BrowserRouter>
  

    </div>
  );
}

export default App;
