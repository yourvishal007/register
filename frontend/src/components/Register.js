import React,{useState} from 'react';
import '../App.css';
import axios from 'axios';

function Register() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [confPass,setConfPass] = useState('');
    const validateEmail=(e)=>{
      
        setEmail(e.target.value);       

    }

    const handleRegister=()=>{
      
        axios.post('http://localhost:5000/api', {
            Name: name,
            Email: email,
            Password: pass,
            confirmPass: confPass
          })
          .then(function (response) {
            setName('');
            setPass('');
            setEmail('');
            setConfPass('');
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log(name,email,pass,confPass);
        
    }
  return (
    <div className="container">
      <form >
         <input type='text' className='textBox' placeholder='Enter Name' value={name} onChange={(e)=>{setName(e.target.value)}} required/>
         <input type='email' className='textBox' placeholder='Enter Email' value={email} onChange={validateEmail} required/>
         <input type='password' minLength='6' className='textBox' placeholder='Enter Password' value={pass} onChange={(e)=>{setPass(e.target.value)}} required/>
         <input type='password' minLength='6' className='textBox' placeholder='Confirm Password' value={confPass} onChange={(e)=>{setConfPass(e.target.value)}} required/>
         {confPass === "" ? " ": pass!==confPass ? <p style={{color:'red'}}> Password not matched</p> : <p style={{color:'green'}}> Password matched</p>}
         <input type='button' className='btn' value='Register Now' onClick={handleRegister}  />
      </form>
    </div>
  );
}

export default Register;
