import React from 'react'

function ButtonDropdown() {
  return (
    <div>
        <div className="btn-group">
            <button type="button" className="btn btn-xs btn-default">Action</button>
            <button type="button" className="btn btn-default dropdown-toggle dropdown-icon" data-toggle="dropdown" aria-expanded="false">
                <span className="sr-only">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu" role="menu">
                <a className="dropdown-item" href="#">Ganti Password</a>
                <div class="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Logout</a>
            </div>
        </div>
    </div>
  )
}

export default ButtonDropdown