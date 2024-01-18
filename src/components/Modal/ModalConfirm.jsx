import React, { Children } from 'react'
import { Form } from 'react-router-dom';

const ModalConfirm = (props) => {
  const {closeModal, openModalDelete, openLoaderDelete, children} = props;
  return (
    <>
         {/* Delete Modal */}
      <div className={openModalDelete?'fade modal show d-block':'fade modal'} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header">
                  <h4 className="modal-title" style={{ fontSize:14 }}>Konfirmasi</h4>
                  <button
                      type="button"
                      className="close"
                      
                      onClick={closeModal}
                  >
                      <span aria-hidden="true">×</span>
                  </button>
                  </div>
                  <div className="modal-body">
                      {children}
                  </div>
                  <div className="modal-footer justify-content-between">
                  <button
                      type="button"
                      className="btn btn-default btn-sm"
                      data-dismiss="modal"
                      onClick={closeModal}
                  >
                      Batal
                  </button>
                  <button type="submit" className="btn btn-danger btn-sm">
                      {openLoaderDelete?<i className="fas fa-spinner fa-spin"></i>:<i className="fa fa-trash"></i>} Delete
                  </button>
                  </div>
              </div>
          {/* /.modal-content */}
          </div>
        
         {/* /.modal-dialog */}
     </div>
     
     {/* /.modal */}
     </>
  )
}

export default ModalConfirm