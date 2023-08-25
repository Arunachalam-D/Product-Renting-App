import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from '../src/auth/Login'
import IntroCard from './pages/IntroPage/IntroCard';
import IntroPage from './pages/index'
import Category from './pages/IntroPage/Category/index';
import Creators from './pages/Creators';
import FurnitureType from './shared/FurnitureType';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>   
        <Routes>
          <Route path='/' element={<IntroPage/>}/>             
          <Route path='/login' element={<Login/>}/>
          <Route path='/furniture' element={<FurnitureType/>} />      
        </Routes>
     </BrowserRouter>
    

    </div>
  );
}

export default App;
