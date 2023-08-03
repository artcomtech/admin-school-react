import React, { useState } from 'react'

import LogoLogin from './logo89.png'
import "../components/css/login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNotif, setNotif] = useState(false);

  const submitLogin = (e) =>{
    e.preventDefault();
    if(password==='' || password===null){
      setNotif(true);
    }
  }
  return (
    <div className='login-page'>
      <div className="login-box">
        
        <div className="card">
            <div className="card-body login-card-body" style={{ paddingTop:'10px',paddingBottom:'50px' }}>
            <div className="login-logo">
                <img src={LogoLogin} width={'120px'}/>
            </div>
            <h4 className='text-center'>ADMIN LOGIN</h4>
            <p className="login-box-msg">Silahkan masukkan username dan password</p>
            {isNotif?<h3>OKE</h3>:''}
            <form onSubmit={submitLogin} method="post">
                <div className="input-group mb-3">
                <input type="email" className="form-control form-control-sm" value={email} placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
                <div className="input-group-append">
                    <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                    </div>
                </div>
                </div>
                <div className="input-group mb-3">
                <input type="password" className="form-control form-control-sm" value={password} placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                <div className="input-group-append">
                    <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                    </div>
                </div>
                </div>
                <div className="row">
                
                <div className="col-12">
                    <button type="submit" className="btn btn-info btn-sm btn-block">LOGIN</button>
                </div>
                </div>
            </form>
           
            </div>
        </div>
       </div>
    </div>
  )
}

export default Login
