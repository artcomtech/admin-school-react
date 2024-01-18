import React, {useState, useCallback} from 'react'
import './css/Table.css';
import './css/Custom.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import DataTable from 'react-data-table-component';
import ModalConfirm from '../components/Modal/ModalConfirm';
import ModalForm from '../components/Modal/ModalForm';


const Pengumuman = (props) => {
    const {...rest} = props;
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [openLoaderDelete, setOpenLoaderDelete] = useState(false);
    const [countSelectedRows, setCountSelectedRows] = useState(0);
    const [listSelectedRows, setListSelectedRows] = useState([]);
    const [toggledClearRows, setToggleClearRows] = useState(false);
    
    const columns = [
        {
            name:'No',
            selector:row=>row.id,
            width:'50px'
        },
        {
            name:'Judul',
            selector:row=>row.title
        },
        {
            name:'Tgl Posting',
            selector:row=>row.tgl_posting
        },
        {
            name: 'Opsi',
            button: true,
            width:'100px',
            cell: row => (
                <div className="btn-group">
                    <button type="button" className="btn btn-xs btn-default">Action</button>
                    <button type="button" className="btn btn-default dropdown-toggle dropdown-icon" data-toggle="dropdown" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu" role="menu">
                        <a className="dropdown-item" href="#">Edit</a>
                        <div class="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Delete</a>
                    </div>
                </div>
            ),
        },
    ];
    
    
    const data = [
        {
            "id":'1',
            "title":'Pengumuman',
            "tgl_posting":'02 Juli 2023'
        }
    ];

    const deleteAction = (id) => {
        setOpenModalDelete(true);
    }

    const deleteActionMultiple = () => {
        setOpenModalDelete(true);
        listSelectedRows.map((list)=>
            console.log(list.title)
        );
    }

    const deletePost = () => {
        console.log('delete action');
    }

    const handleChange = ({ selectedRows }) => {
        console.log('Selected Rows: ', selectedRows);
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
                <h3>Pengumuman</h3>
            </div>
            <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                    <a href="#">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Pengumuman</li>
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
                            <Link to={'/pengumuman/tambah'}><button className='btn btn-sm btn-primary mb-2 mr-2'><i className="fa fa-plus"></i> Tambah</button></Link>
                            {
                                countSelectedRows>0 &&
                                <button className='btn btn-danger btn-sm mb-2' onClick={deleteActionMultiple}><i className='fa fa-trash'></i> Delete ({countSelectedRows})</button>
                            }
                    </div>
                    <div className="col-12">
                        
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">
                                List Pengumuman
                                </h3>
                            </div>
                            {/* /.card-header */}
                            <ModalConfirm closeModal={(e)=>{setOpenModalDelete(false)}} openModalDelete={openModalDelete} actionDelete={()=>deletePost}  openLoaderDelete={openLoaderDelete}>
                                <p>Yakin ingin menghapus?</p>
                            </ModalConfirm>
                           
                            <div className="card-body">
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='form-group row'>
                                            <label className="form-label col-md-6" style={{ textAlign:"right", marginTop:"6px" }}>Pencarian</label>
                                            <div className="col-md-6">
                                                <input type="text" className="form-control form-control-sm" placeholder='Cari'/>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <DataTable
                                    pointerOnHover='false'
                                    columns={columns}
                                    data={data}
                                    pagination
                                    selectableRows
                                    onSelectedRowsChange={handleChange}
                                    clearSelectedRows={toggledClearRows}                              
                                    />

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

export default Pengumuman
