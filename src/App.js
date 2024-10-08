
import './App.css';

import Calculatorsss from './calculator/Calculatorsss';
import Loginss from './login/Loginss';
import Signups from './signup/Signups';
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Loginss/>}/> 
    <Route path='/signup' element={<Signups/>}/> 
    <Route path='/calculator' element={<Calculatorsss/>}/> 
  </Routes>
</BrowserRouter>


    </div>
  );
}

export default App;
