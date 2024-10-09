
import './App.css';

import Calculatorsss from './calculator/Calculatorsss';
import Loginss from './login/Loginss';
import UserLoggedIn from './login/UserLoggedin';
import UserLoggedOut from './login/UserLoggedOut';
import Signups from './signup/Signups';
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
<BrowserRouter>
  <Routes>
    <Route path='' element={<UserLoggedOut/>}>
      <Route path='/' element={<Loginss/>}/> 
      <Route path='/signup' element={<Signups/>}/> 
      <Route path='/calculator' element={<Calculatorsss/>}/> 
    </Route>
    <Route path='' element={<UserLoggedIn />}>
      <Route path='/calculator' element={<Calculatorsss/>}/> 
    </Route>
  </Routes>
</BrowserRouter>


    </div>
  );
}

export default App;
