import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from '../src/auth/Login'
import IntroCard from './pages/IntroCard';
import Category from './shared/Category/index';
import Creators from './pages/Creators';


function App() {
  return (
    <div className="App">
      <BrowserRouter>   
        <Routes>
          <Route path='/' element={<IntroCard/>}/>             
          <Route path='/login' element={<Login/>}/>       
        </Routes>
     </BrowserRouter>
      <Category />
      <Creators/>

    </div>
  );
}

export default App;
