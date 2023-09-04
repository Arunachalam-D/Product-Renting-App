import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from '../src/auth/Login'
import IntroPage from './pages/index'
import FurnitureType from './shared/Furniture/index';
import FitnessType from './shared/Fitness/index';
import ElectronicType from './shared/ElectonicsType/index'
import Appliances from './shared/Appliances/index'
import VehicleType from './shared/Vehicles/index';
import Lessor from './pages/Lessor/index'
import Mobiles from './pages/Mobiles'
import Iphone11pro from './pages/MobileModal/iphone11pro'
import Redmi12c from './pages/MobileModal/redmi12c'
import RealmeNarzo from './pages/MobileModal/realmenarzo'
import OnePlus7 from './pages/MobileModal/oneplus7'
import SmartDevices from './pages/SmartDevices/index'
import ZebCam from './pages/SmartModal/zebCam'
import NoisePulse from './pages/SmartModal/noisePulse'
import EchoDot from './pages/SmartModal/echoDot'
import EchoShow from './pages/SmartModal/echoShow'
import MicrosoftSurface from './pages/LaptopModal/MicrosoftSurface'
import HP from './pages/LaptopModal/Hp255'
import MacBook from './pages/LaptopModal/Macbook'
import Asus from './pages/LaptopModal/Asus'
import Laptops from './pages/Laptops/index'
import Boat from './pages/EarphoneCharger/BoatEarphone'
import Sony from './pages/EarphoneCharger/SonyEarphone'
import Earpod from './pages/EarphoneCharger/Earpod'
import TypeC from './pages/EarphoneCharger/TypeC'
import Earphone from './pages/Earphone/index'
import Tab from './pages/Tablet/index'
import Ipad from './pages/TabletModals/IpadPro'
import HonorPad from './pages/TabletModals/Honor'
import RedmiPad from './pages/TabletModals/RedmiPad'
import LenovoPad from './pages/TabletModals/LenovoPad'
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
          <Route path='/lessor' element={<Lessor/>} /> 
          <Route path='/smartphones' element={<Mobiles/>} />     
          <Route path='/iphone11pro' element={<Iphone11pro/>} />     
          <Route path='/redmi12c' element={<Redmi12c/>} />     
          <Route path='/realmenarzo' element={<RealmeNarzo/>} />     
          <Route path='/oneplus7' element={<OnePlus7/>} />
          <Route path='/smartdevices' element={<SmartDevices/>} />
          <Route path='/zebsmartcam' element={<ZebCam/>} />
          <Route path='/noisepulse2max' element={<NoisePulse/>} />
          <Route path='/echodot4thgen' element={<EchoDot/>} />
          <Route path='/echoshow5' element={<EchoShow/>} /> 
          <Route path='/laptops' element={< Laptops/>} /> 
          <Route path='/microsoftsurface' element={<MicrosoftSurface/>} />
          <Route path='/hp255' element={<HP/>} />  
          <Route path='/macbook' element={<MacBook/>} />  
          <Route path='/asus' element={<Asus/>} />  
          <Route path='/boatrockerz' element={<Boat/>} />  
          <Route path='/sonyear' element={<Sony/>} /> 
          <Route path='/earpod' element={<Earpod/>} />  
          <Route path='/ctypecharger' element={<TypeC/>} />  
          <Route path='/earphoneandcharger' element={<Earphone/>} /> 
          <Route path='/tablet' element={<Tab/>} /> 
          <Route path='/ipadpro' element={<Ipad/>}/> 
          <Route path='/honorpad' element={<HonorPad/>}/> 
          <Route path='/redmipad' element={<RedmiPad/>}/>
          <Route path='/lenovopad' element={<LenovoPad/>}/>
        </Routes>
     </BrowserRouter>
      
    
    </div>
  );
}

export default App;
