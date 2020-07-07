import React,{useState} from 'react';
import '../App.css';

function Login() {
  
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');

    const handleLogin=()=>{
        console.log(email,pass);
    }

  return (
    <div className="container">

        <input type='email' className='textBox' placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
        <input type='password' className='textBox' placeholder='Enter Password' value={pass} onChange={(e)=>{setPass(e.target.value)}} required/>
        <input type='button' className='btn' value='Login Now' onClick={handleLogin}/>
    </div>
  );
}

export default Login;
