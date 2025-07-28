import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavBar(props){
  const styles = {transition : 'background 1s'}
    return (
        <nav style={styles} className={`navbar navbar-${props.mode} navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid ">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
        
      </ul>
      </div>
   <div className="form-check form-switch ">
      <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="switchCheckDefault"/>
      <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="switchCheckDefault">enable {props.mode==='light'?'dark':'light'} mode</label>
    </div>
  </div>
    
</nav>
    );
}

NavBar.propTypes = {
    title:PropTypes.string.isRequired, 
    aboutText:PropTypes.string
};

NavBar.defaultProps ={
    title:"default title",
    aboutText:"default about text"
}