import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { getUser, removeUserSession } from '../utils/Common';

const Header = () => {
  const navigate = useNavigate;
  const user = getUser();

  const Logout = () => {
    removeUserSession();
    navigate("/login");
  }
  return (
  
    <nav className="main-header navbar navbar-expand navbar-green navbar-light">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button">
          <i className="fas fa-bars" />
        </a>
      </li>
     
    </ul>
    <ul className="navbar-nav ml-auto">
      
      <li className="nav-item">
        <div className="btn-group mr-4">
            <button type="button" className="btn btn-xs" data-toggle="dropdown"><i className="fa fa-user"></i>  <strong>{user.name}</strong></button>
            <button type="button" className="btn btn-xs dropdown-toggle dropdown-icon" data-toggle="dropdown" aria-expanded="false">
                <span className="sr-only">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu" role="menu" style={{ left:'-50px',minWidth:'auto' }}>
                <Link className="dropdown-item" >Ganti Password</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" onClick={Logout}>Logout</Link>
            </div>
        </div>
      </li>
    </ul>
  </nav>
  
 
  )
}

export default Header;

