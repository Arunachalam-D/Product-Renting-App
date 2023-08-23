import './App.css';
import LoginSignin from './shared/Login';
import  Navbar  from './shared/Navbar';
import IntroCard from './pages/IntroCard';
function App() {
  return (
    <div className="App">
     <Navbar/>

     <LoginSignin/>

     <IntroCard/>

    </div>
  );
}

export default App;
