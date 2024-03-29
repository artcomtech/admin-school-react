import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNav from '../components/SideNav';

const Home = () => {
  return (
    <div>
    <Header/>
    <SideNav/>
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h3 className="m-0">Dashboard</h3>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Dashboard v1</li>
              </ol>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content-header */}
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          {/* Small boxes (Stat box) */}
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box">
                <span className="info-box-icon bg-info elevation-1"><i className="fas fa-list"></i></span>
                <div className="info-box-content">
                  <span className="info-box-text">Total Kategori</span>
                  <span className="info-box-number">
                  10
                  </span>
                </div>

              </div>

            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box">
                <span className="info-box-icon bg-teal elevation-1"><i className="fas fa-newspaper"></i></span>
                <div className="info-box-content">
                  <span className="info-box-text">Total Posting</span>
                  <span className="info-box-number">
                  10
                  </span>
                </div>

              </div>

            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box">
                <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-envelope"></i></span>
                <div className="info-box-content">
                  <span className="info-box-text">Total Saran</span>
                  <span className="info-box-number">
                  10
                  </span>
                </div>

              </div>

            </div>
            
            <div className="col-12 col-sm-6 col-md-3">
              <div className="info-box">
                <span className="info-box-icon bg-primary elevation-1"><i className="fas fa-users"></i></span>
                <div className="info-box-content">
                  <span className="info-box-text">Total Penunjung</span>
                  <span className="info-box-number">
                  10
                  </span>
                </div>

              </div>

            </div>

          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card h-100">
                <div className="card-header bg-danger">
                  <h6 style={{ marginBottom:'0px' }} className="text-white"><i className="fa fa-server"></i> Informasi Penyimpanan Server</h6>
                </div>
                <div className="card-body">
                
                  <label style={{ fontSize:'12px' }}>Space Terpakai</label>
                  <div className="progress">
                    <div className="progress-bar bg-primary progress-bar-striped" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <table className="table table-hover table-bordered mb-2 mt-4">
                    <thead>
                      <tr>
                        <th style={{ fontSize:'13px' }}>File Master</th>
                        <th style={{ fontSize:'13px' }}>Database</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>200Mb</td>
                        <td>10Mb</td>
                      </tr> 
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100">
              <div className="card-header bg-orange">
                  <h6 className="text-white" style={{ marginBottom:'0px' }}><i className="fa fa-users"></i> Pengunjung</h6>
                </div>
                <div className="card-body" style={{ overflowY: "scroll" }}>
                  <table className="table table-bordered table-striped ip_list mt-2 mb-2 ">
                      <thead>
                          <tr>
                            <th>No</th>
                            <th>IP</th>
                            <th>Waktu</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                            <td>1</td>
                            <td>192.12.34.12</td>
                            <td>12 Mei 2023 12.00</td>
                          </tr>
                      </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-4">
              <div className="card h-100">
              <div className="card-header bg-color-temp">
                  <h6 style={{ marginBottom:'0px' }}><i className="fa fa-envelope"></i> Kotak Saran</h6>
                </div>
                <div className="card-body" style={{ overflowY: "scroll", height:'200px' }}>
                  <table className="table table-bordered table-striped ip_list mt-2 mb-2 ">
                      <thead>
                          <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Isi</th>
                            <th>Opsi</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                            <td>1</td>
                            <td>Setio</td>
                            <td>setio.adinata@gmail.com</td>
                            <td>Pesan Dari Kontak Saran </td>
                            <td width={'6%'} className="text-center">
                              <div className="btn-group">
                                  <button type="button" className="btn btn-xs btn-info">Action</button>
                                  <button type="button" className="btn btn-info dropdown-toggle dropdown-icon" data-toggle="dropdown" aria-expanded="false">
                                      <span className="sr-only">Toggle Dropdown</span>
                                  </button>
                                  <div className="dropdown-menu" role="menu">
                                      <a className="dropdown-item" href="#">Lihat</a>
                                      <div className="dropdown-divider"></div>
                                      <a className="dropdown-item" href="#">Hapus</a>
                                  </div>
                              </div>
                            </td>
                          </tr>
                      </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </section>
      {/* /.content */}
    </div>
    <Footer/>
    </div>
  )

}  

export default Home;
