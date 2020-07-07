import React,{useState} from 'react';

import './App.css';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  const [signup,setsignup] = useState(true);
  return (
    <div className="App">
      
        <input type='button' className='btn' value='Register' onClick={()=>setsignup(true)}/>
        <input type='button' className='btn' value='Login' onClick={()=>setsignup(false)}/>
        {signup ? <Register /> : <Login />}
         
    </div>
  );
}

export default App;
