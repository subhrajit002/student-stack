import React from 'react'
import { Link } from 'react-router-dom'

const Avatar = () => {
    return (
        <Link to="/" className="d-flex align-items-center dropdown-toggle" id="drop-down-arrow"
        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src="../assets/images/user/1.jpg" className="img-fluid rounded-circle me-3" alt="user" />
        <div className="caption">
            <h6 className="mb-0 line-height">Subhrajit</h6>
        </div>
    </Link>
    )
}

export default Avatar
