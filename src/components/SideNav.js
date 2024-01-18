import React from "react";
import "./css/sidebar.css";
import logoside from "../AdminLTELogo.png"
import logouser from "../user2-160x160.jpg"
import logoImage from "./images/logo-admin.png"

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
          src={logoImage}
          alt="AdminLTE Logo"
          style={{ width:'180px' }}
        />
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
           
            <li className="nav-header">Menu Utama</li>
            
            <li className="nav-item">
              <Link to={'/profile'} className={splitLocation[1] === "profile" ? "nav-link active" : "nav-link"}>
                <i className="nav-icon far fa-building" />
                <p>Profile Sekolah</p>
              </Link>
            </li>
            <li className='nav-item'>
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-newspaper"></i>
                <p>
                  Publikasi
                  <i className="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
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
                    <p>Publikasi</p>
                  </Link>
                </li> 
              </ul>
            </li>
            <li className="nav-item">
              <Link to='/pengumuman' className={splitLocation[1] === "pengumuman" ? "nav-link active" : "nav-link"}>
                <i className="nav-icon far fa-bell" />
                <p>Pengumuman</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/prestasisiswa' className={splitLocation[1] === "prestasisiswa" ? "nav-link active" : "nav-link"}>
                <i className="nav-icon fas fa-award" />
                <p>Prestasi Siswa</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='' className={splitLocation[1] === "fasilitas" ? "nav-link active" : "nav-link"}>
                <i className="nav-icon fas fa-hospital-user" />
                <p>Fasilitas</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='' className={splitLocation[1] === "ekstrakulikuler" ? "nav-link active" : "nav-link"}>
                <i className="nav-icon fas fa-running" />
                <p>Ekstrakulikuler</p>
              </Link>
            </li>
            <li className='nav-item'>
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-user-graduate"></i>
                <p>
                  Kesiswaan
                  <i className="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="" className={splitLocation[1] === "siswa" ? "nav-link active" : "nav-link"}>
                    <i className="nav-icon far fa-circle" />
                    <p>
                      Data Siswa
                    </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="" className={splitLocation[1] === "alumni" ? "nav-link active" : "nav-link"}>
                    <i className="nav-icon far fa-circle" />
                    <p>Data Alumni</p>
                  </Link>
                </li> 
              </ul>
            </li>
            <li className="nav-header">Monitoring</li>
            <li className="nav-item">
              <Link to='' className={splitLocation[1] === "visitor" ? "nav-link active" : "nav-link"}>
                <i className="nav-icon fas fa-user" />
                <p>Pengunjung</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='' className={splitLocation[1] === "kontaksaran" ? "nav-link active" : "nav-link"}>
                <i className="nav-icon fas fa-envelope" />
                <p>Kontak Saran</p>
              </Link>
            </li>
            <li className="nav-header">Settings</li>
            <li className="nav-item">
              <Link to='' className={splitLocation[1] === "visitor" ? "nav-link active" : "nav-link"}>
                <i className="nav-icon fas fa-user" />
                <p>Umum</p>
              </Link>
            </li>
            <li className='nav-item'>
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-user-graduate"></i>
                <p>
                  Konten
                  <i className="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="" className={splitLocation[1] === "#" ? "nav-link active" : "nav-link"}>
                    <i className="nav-icon far fa-circle" />
                    <p>
                      Slider
                    </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="" className={splitLocation[1] === "#" ? "nav-link active" : "nav-link"}>
                    <i className="nav-icon far fa-circle" />
                    <p>Ucapan</p>
                  </Link>
                </li> 
                <li className="nav-item">
                  <Link to="" className={splitLocation[1] === "#" ? "nav-link active" : "nav-link"}>
                    <i className="nav-icon far fa-circle" />
                    <p>Popup Info</p>
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
