import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios';

import LogoLogin from './logo89.png'
import "../components/css/login.css";
import { setUserSession } from '../utils/Common';



const Login = async => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNotif, setNotif] = useState(false);
  const [isLogin, setLogin] = useState(false);

  const submitLogin = (e) =>{
    e.preventDefault();
    setLogin(true);
    axios.post('http://localhost:8000/api/login', {email, password}).then((res)=>{
      if(res.data.token){
        setUserSession(res.data.token, res.data.user);
        setLogin(false);
        navigate('/dashboard')
      }
    }).catch((err)=>{
      setNotif(true)
      setLogin(false)
    })
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
            {isNotif?(
              <div class="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>Error!</strong> Username & Password tidak cocok.
              <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={()=>setNotif(false)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            ):''}
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
                  {
                    isLogin ? (
                      <button type="button" className="btn btn-info btn-sm btn-block disabled"><i className="fa fa-spinner fa-spin"></i> PROSES LOGIN</button>
                    ):(<button type="submit" className="btn btn-info btn-sm btn-block">LOGIN</button>)
                  }
                    
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
