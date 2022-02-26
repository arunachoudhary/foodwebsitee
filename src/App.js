
import './App.css';
import Navbar from './userComponent/Navbar';
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Menu from './userComponent/Menu';
import Welcome from './userComponent/Welcome';
import Checkout from './userComponent/Checkout';


function App() {
  return (<>
    
    
    <Routes>
      <Route path="/" element={<Welcome/>}/>
    <Route path="/menu" element={<Menu/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
    </>
  );
}

export default App;
