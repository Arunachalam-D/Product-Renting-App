import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from '../src/auth/Login'
import IntroCard from './pages/IntroCard';
function App() {
  return (
    <div className="App">
      <BrowserRouter>   
        <Routes>
          <Route path='/' element={<IntroCard/>}/>             
          <Route path='/login' element={<Login/>}/>       
        </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
