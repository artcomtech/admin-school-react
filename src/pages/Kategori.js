import {React, useState, useEffect} from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

import DataTable from 'react-data-table-component';

import './css/Table.css';
import './css/Custom.css';
//import useNavigate


import Footer from '../components/Footer'
import Header from '../components/Header'
import SideNav from '../components/SideNav'

const Kategori = () => {
    const [categories, setCategory] = useState([]);
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [id, setId] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [openLoader, setOpenLoader] = useState(false);
    const [openLoaderDelete, setOpenLoaderDelete] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertDelete, setShowAlertDelete] = useState(false);
    const [countSelectedRows, setCountSelectedRows] = useState(0);
    const [listSelectedRows, setListSelectedRows] = useState([]);
    const [toggledClearRows, setToggleClearRows] = useState(false);
      //state validation
    const [errors, setErrors] = useState([]);

    const Button = () => <button className='btn btn-sm btn-danger btn-edit' type="button"><i className='fa fa-trash'></i></button>;

    //useNavigate
    const navigate = useNavigate();

    const columns = [
        {
            name:'No',
            selector:row=>row.id,
            width:'50px'
        },
        {
            name:'Kategori',
            selector:row=>row.category_name
        },
        {
            name: 'Opsi',
            button: true,
            width:'100px',
            cell: row => (
                <div><button type='button' onClick={()=>deleteAction(row.id)} className="btn btn-xs btn-danger"><i className="fa fa-trash"></i></button> <button className="btn btn-xs btn-success"><i className="fa fa-pen"></i></button></div>
            ),
        },
    ];

    const data = categories;

    const loadData = () =>{
        axios.get('http://127.0.0.1:8000/api/category')
        .then(function (response) {
        setCategory(response.data.data);
        // console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }

   function filterData(event){

        if(event.target.value.length <= 1){
            loadData();
        }else{
            const newCategory = data.filter(row => {
                return row.category_name.toLowerCase().includes(event.target.value.toLowerCase())
            })
            setCategory(newCategory);
        }
       
   }

    useEffect(() => {
        loadData();
    }, []);

       //method store post
    const storePost = async (e) => {
        e.preventDefault();
        setOpenLoader(true);
        
        //init FormData
        const formData = new FormData();

        //append data
        formData.append('category_name', name);
        formData.append('parent_id', 2);
        formData.append('status', status);

        //send data with API
        await axios.post('http://127.0.0.1:8000/api/category', formData)
            .then(() => {
                //redirect to posts index
                setOpenModal(false);
                setOpenLoader(false);
                setShowAlert(true);
                setName('');
                loadData();
                

            })
            .catch(error => {
                
                //set errors response to state "errors"
                // setErrors(error.response.data);
            })
    }

    const deleteAction = (idCat) => {
        setOpenModalDelete(true);
        setId(idCat);
        // console.log(idCat);
    }

    const deletePost = async (e) =>{
        e.preventDefault();
        setOpenLoaderDelete(true);
        //send data with API
        await axios.delete('http://127.0.0.1:8000/api/category/'+id)
            .then(() => {
                //redirect to posts index
                setOpenModalDelete(false);
                setOpenLoaderDelete(false);
                setShowAlertDelete(true);
                setId('');
                loadData();

            })
            .catch(error => {
                // set errors response to state "errors"
                setErrors(error.response.data);
            })

    }

    const deleteActionMultiple = () => {
        setOpenModalDelete(true);
        listSelectedRows.map((list)=>
            axios.delete('http://127.0.0.1:8000/api/category/'+list.id)
        );
        setOpenModalDelete(false);
        setOpenLoaderDelete(false);
        setShowAlertDelete(true);
        setToggleClearRows();
        loadData();
    }

    const handleChange = ({ selectedRows }) => {
        setCountSelectedRows(selectedRows.length);
        setListSelectedRows(selectedRows);

    };

    const handleClearRows = () => {
        setToggleClearRows(!toggledClearRows);
    }

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
                    <h3>Kategori</h3>
                </div>
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                        <a href="#">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Kategori Informasi</li>
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
                    
                {showAlert?
                <div className='col-md-12'>
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Sukses!</strong> Data berhasil Disimpan.
                        <button type="button" className="close" onClick={()=>setShowAlert(false)} data-dismiss="alert" aria-hidden="true">×</button>
                    </div>
                </div>
                :''}

                {showAlertDelete?
                <div className='col-md-12'>
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Sukses!</strong> Data berhasil Dihapus.
                    <button type="button" className="close" onClick={()=>setShowAlertDelete(false)} data-dismiss="alert" aria-hidden="true">×</button>
                </div></div>
                :''}
                <div className='col-md-12'>
                    <Link to={'/informasi'}><button className='btn btn-sm btn-warning mb-2 mr-2'><i class="fa fa-newspaper"></i> Informasi</button></Link>
                    <button className='btn btn-sm btn-primary mb-2' onClick={(e)=>{setOpenModal(true)}}><i class="fa fa-plus"></i> Tambah</button>
                    {
                        countSelectedRows>0 &&
                        <button className='btn btn-danger btn-sm mb-2 ml-2' onClick={deleteActionMultiple}><i className='fa fa-trash'></i> Delete ({countSelectedRows})</button>
                    }
                </div>
                <div className="col-12">
                    
                   
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">
                            List Data Kategori Informasi
                            </h3>
                        </div>
                        {/* /.card-header */}
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='form-group row'>
                                        <label className="form-label col-md-2" style={{ textAlign:"left", marginTop:"6px" }}>Pencarian</label>
                                        <div className="col-md-10" style={{ paddingLeft:'0px' }}>
                                            <input type="text" className="form-control form-control-sm" placeholder='Cari' onChange={filterData}/>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        <DataTable
                            columns={columns}
                            data={categories}
                            noDataComponent="Data Kategori Tidak Ada"
                            selectableRows
                            fixedHeader
                            pagination
                            onSelectedRowsChange={handleChange}
                            clearSelectedRows={toggledClearRows}  
                        >
                        </DataTable>
                        
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
        <div className={openModal?'fade modal show d-block':'fade modal'} tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <form onSubmit={storePost} method='POST'>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-color-temp">
                        <h4 className="modal-title" style={{ fontSize:14 }}>Form Tambah Kategori</h4>
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={(e)=>{setOpenModal(false)}}
                    >
                        <span aria-hidden="true">×</span>
                    </button>
                    </div>
                    <div className="modal-body">
                        <div className='form-group'>
                            <label className='form-label'>Nama Kategori</label>
                            <input type="text" className='form-control form-control-sm' onChange={(e)=>setName(e.target.value)} value={name}/>
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Status</label>
                            <select className='form-control form-control-sm' onChange={(e)=>setStatus(e.target.value)} value={status}>
                                <option value="">--Pilih--</option>
                                <option value="y">Aktif</option>
                                <option value="n">Tidak Aktif</option>
                            </select>
                        </div>
                    </div>
                    <div className="modal-footer justify-content-between">
                    <button
                        type="button"
                        className="btn btn-default btn-sm"
                        data-dismiss="modal"
                        onClick={(e)=>{setOpenModal(false)}}
                    >
                        <i class="fa fa-times"></i> Close
                    </button>
                    <button type="submit" className="btn btn-primary btn-sm">
                        {openLoader?<i class="fas fa-spinner fa-spin"></i>:<i class="fa fa-save"></i>} Simpan
                    </button>
                    </div>
                </div>
            {/* /.modal-content */}
            </div>
            </form>
            {/* /.modal-dialog */}
        </div>
        {/* /.modal */}


        {/* Delete Modal */}
        <div className={openModalDelete?'fade modal show d-block':'fade modal'} tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <form onSubmit={deletePost} method='Post'>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h4 className="modal-title" style={{ fontSize:14 }}>Konfirmasi</h4>
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={(e)=>{setOpenModalDelete(false)}}
                    >
                        <span aria-hidden="true">×</span>
                    </button>
                    </div>
                    <div className="modal-body">
                        <p>Yakin ingin menghapus data ini?</p>
                    </div>
                    <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-info btn-xs"
                        data-dismiss="modal"
                        onClick={(e)=>{setOpenModalDelete(false)}}
                    >
                        <i className='fas fa-times'></i> Batal
                    </button>
                    <button type="submit" className="btn btn-danger btn-xs">
                        {openLoaderDelete?<i class="fas fa-spinner fa-spin"></i>:<i class="fa fa-trash"></i>} Delete
                    </button>
                    </div>
                </div>
            {/* /.modal-content */}
            </div>
            </form>
            {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
    </div>
    
  )
}

export default Kategori
