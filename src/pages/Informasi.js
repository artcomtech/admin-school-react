import React from 'react'
import './css/Table.css';
import './css/Custom.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import Header from '../components/Header'
import SideNav from '../components/SideNav'

const Informasi = () => {
  return (
    <div>
    <Header/>
    <SideNav/>
    {/* Content Wrapper. Contains page content */}
    <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
        <div className="container-fluid">
            <div className="row mb-2">
            <div className="col-sm-6">
                <h3>Informasi</h3>
            </div>
            <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                    <a href="#">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Informasi</li>
                </ol>
            </div>
            </div>
        </div>
        {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
        <div className="container-fluid">
            <div className="row">
            <div className="col-12">
                <div className="card">
                <div className="card-header">
                    <h3 className="card-title">
                    List Data Informasi
                    </h3>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                    <div className='row'>
                        <div className='col-md-7'>
                            <div className='form-group row'>
                                <label className="form-label col-md-2" style={{ textAlign:"right", marginTop:"6px" }}>Pencarian</label>
                                <div className="col-md-10">
                                    <input type="text" className="form-control form-control-sm" placeholder='Cari'/>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <Link to={'/informasi/tambah'}><button className='btn btn-xs btn-primary float-right mb-2'><i class="fa fa-plus"></i> Tambah</button></Link>
                        </div>
                    </div>
                    <table
                    id="example2"
                    className="table table-bordered table-hover TableCustom"
                    >
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Judul</th>
                                <th>Kategori</th>
                                <th>Tgl Posting</th>
                                <th>Status</th>
                                <th>Opsi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Judul Informasi</td>
                                <td>Kategori</td>
                                <td>02 January 2023 09:10:00</td>
                                <td><span className="badge badge-success">Publish</span></td>
                                <td>
                                    <button className='btn btn-xs btn-success mr-1 pr-2 pl-2'><i class="fa fa-pen fa-xs"></i></button>
                                    <button className='btn btn-xs btn-danger pr-2 pl-2'><i class="fa fa-trash fa-xs"></i></button>
                                </td>
                            </tr>

                        </tbody>
                
                    </table>
                    <nav aria-label="Page navigation example" class="float-right">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">«</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">»</span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>

                </div>
                {/* /.card-body */}
                </div>

            </div>
            {/* /.col */}
            </div>
            {/* /.row */}
        </div>
        {/* /.container-fluid */}
        </section>
        {/* /.content */}
    </div>
    {/* /.content-wrapper */}
    <Footer/>

</div>
  )
}

export default Informasi
