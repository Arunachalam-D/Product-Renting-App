import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from '../src/auth/Login'
import IntroCard from './pages/IntroPage/IntroCard';
import IntroPage from './pages/index'
import Category from './pages/IntroPage/Category/index';
import Creators from './pages/Creators';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>   
        <Routes>
          <Route path='/' element={<IntroPage/>}/>             
          <Route path='/login' element={<Login/>}/>       
        </Routes>
     </BrowserRouter>
      {/* <Category />
      <Creators/> */}
  
    </div>
  );
}

export default App;
