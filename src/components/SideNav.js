import React from "react";
import "./css/sidebar.css";
import logoside from "../AdminLTELogo.png"
import logouser from "../user2-160x160.jpg"

import {Link, useLocation} from "react-router-dom";
const SideNav = () => {

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      
      <Link to="/" className="brand-link">
        <img
          src={logoside}
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">Admin React</span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src={logouser}
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Admin
            </a>
          </div>
        </div>
        
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
            with font-awesome or any other icon font library */}
            <li className="nav-item">
              <Link to={'/'} className={splitLocation[1] === "" ? "nav-link active" : "nav-link"}>
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Dashboard
                </p>
              </Link>
            </li>
           
            <li className="nav-header">Master</li>
            
            <li className="nav-item">
              <Link to={'/profile'} className={splitLocation[1] === "profile" ? "nav-link active" : "nav-link"}>
                <i className="nav-icon far fa-newspaper" />
                <p>Profile</p>
              </Link>
            </li>
            <li className='nav-item'>
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-newspaper"></i>
              <p>
                Informasi
                <i className="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
            <li className="nav-item">
              <Link to={'/kategori'} className={splitLocation[1] === "kategori" ? "nav-link active" : "nav-link"}>
                <i className="nav-icon far fa-circle" />
                <p>
                  Kategori
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/informasi'} className={splitLocation[1] === "informasi" ? "nav-link active" : "nav-link"}>
                <i className="nav-icon far fa-circle" />
                <p>Informasi</p>
              </Link>
            </li>
              
            </ul>
          </li>
           
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>

  )
}

export default SideNav;
