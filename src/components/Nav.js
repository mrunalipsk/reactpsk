import React, { useEffect } from 'react'
import { Link, Navigate, useLocation ,useNavigate} from 'react-router-dom';

const Nav = () => {
  var nevigate=useNavigate();
  var location=useLocation();
  useEffect(()=>{
      console.log(location.pathname)
    },[location])


     const clicklogout=()=>{
      localStorage.removeItem('token');
      nevigate("/login");
     }

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="javascript:void(0)">Mrunali</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/" ? 'active' : ''}`} to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/about" ? 'active' : ''}`} to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="javascript:void(0)">Link</Link>
        </li>
      </ul>
      {!localStorage.getItem('token') ?
      <form className="d-flex">
       <Link to="/login"> <button className="btn btn-primary mx-2" type="button">Login</button></Link>

       <Link to="/signin"> <button className="btn btn-primary mx-2" type="button">Sign in</button></Link>
      </form> :
      <button className="btn btn-primary mx-2" type="button" onClick={clicklogout}>Logout</button>}
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav
