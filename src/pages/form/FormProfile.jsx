import React from 'react'
import './../css/Table.css';
import './../css/Custom.css';
// import { CKEditor } from 'ckeditor4-react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SideNav from '../../components/SideNav'
import defaultimage from '../../default-large.jpg'
import { Link } from 'react-router-dom';

const FormProfile = () => {
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
                <h3>Form Profile</h3>
            </div>
            <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                    <a href="#">Profile</a>
                </li>
                <li className="breadcrumb-item active">Tambah</li>
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
                        Form Profile
                    </h3>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-8">
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className="form-group">
                                        <label className="form-label">Judul</label>
                                        <input type="text" className="form-control form-control-sm" name='judul'/>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="form-group">
                                        <label className="form-label">Kategori</label>
                                        <select className='form-control form-control-sm'>
                                            <option value="">--Pilih Kategori--</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="form-group">
                                        <label className="form-label">Tanggal Posting</label>
                                        <input type="date" className='form-control form-control-sm' name="tgl" />
                                    </div>
                                </div>
                                <div className='col-md-12'>                                
                                    <div className='form-group'>
                                        <label className="form-label">Isi Konten</label>
                                        <CKEditor
                                            editor={ ClassicEditor }
                                            config={ {
                                                height: 700
                                            } }
                                        />
                                    </div>
                                </div>
                                {/* <div className='col-md-12'>
                                    <div className="form-group">
                                        <label className="form-label">Tag</label>
                                        <input type="text" className='form-control form-control-sm' name="tag"/>
                                    </div>
                                </div> */}
                            </div>
                            
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label className="form-label">Deskripsi Singkat</label>
                                <textarea className='form-control form-control-sm' name="deskripsi" rows="5"></textarea>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Url Youtube</label>
                                <input type='text' className='form-control form-control-sm' name="url" placeholder='Url Youtube'/>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Url Lainnya</label>
                                <input type='text' className='form-control form-control-sm' name="url" placeholder='Url Youtube'/>
                            </div>
                            <div className="form-group">
                                <label className="form-label">File</label>
                                <input type='file' className='form-control form-control-sm' name="url" placeholder='Url Youtube'/>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Gambar Utama</label>
                                <img src={defaultimage} className="img-thumbnail"/><br/>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="customFile" />
                                    <label className="custom-file-label" htmlFor="customFile">
                                        Choose file
                                    </label>
                                </div>
                            </div>
                            
                        </div>
                        <div className='col-md-12'>
                            <div className="form-group">
                                
                                <Link to={'/profile'}><button className='btn btn-sm btn-secondary mt-4'><i className='fa fa-arrow-left'></i> Kembali</button></Link>
                                <button className='btn btn-sm btn-primary mt-4 ml-2'><i className='fa fa-save'></i> Simpan</button>
                            </div>
                        </div>
                    </div>
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

export default FormProfile
