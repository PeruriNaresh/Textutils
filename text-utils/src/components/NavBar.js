import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
export default function NavBar(props){
   
    const style={color:props.color};
    return(
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">TextUtils</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                </li>
            </ul>
            </div>
            <div className="form-check form-switch" style={style}>
                <img className='container mr-3' style={{ height: '26px',  filter: props.color === 'white' ? 'invert(1)' : 'none' }} src={props.imgSrc} alt='alt' onClick={props.toggleMode}/>
            </div>
        </div>
        </nav>
        </>
    );
}
NavBar.defaultProps={mode:"light"}
NavBar.prototype={mode:PropTypes.string.isRequired}