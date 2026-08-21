import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Contact from './contact';
import Home from './home';
import About from './about';
function Land() {
    return(

        <BrowserRouter>
        <nav className="navbar bg-primary p-3 text-white justify-content-center fs-2">Buy Your Hair Here</nav>
           <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#">Navbar</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav d-flex justify-content-around w-50">
        <li className="nav-item">
         <Link to="/" className="text-decoration-none"> <i className="bi bi-house"></i> <span className="nav-item ">Home</span></Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="text-decoration-none"><i className="bi bi-info-circle"></i> About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="text-decoration-none"><i className="bi bi-envelope"></i> Contact</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <Link to="#" className="text-decoration-none ms-3">
        <i className="bi bi-cart"> cart</i> 
      </Link>
      <Link to="#" className="text-decoration-none ms-3">
        <i className="bi bi-whatsapp">support</i> 
      </Link>
      <Link to="#" className="text-decoration-none ms-3">
        <i className="bi bi-person-circle">Account</i> 
      </Link>
    </div>
  </div>
</nav>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        
        </BrowserRouter>
    )
    
}
export default Land;