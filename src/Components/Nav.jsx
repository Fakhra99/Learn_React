import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import './styles.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  const bStyles=()=>{
    const btnStyle=document.getElementsByClassName('custom-button');
    btnStyle.ClassList.add('custom-button');

    const nlinkStyle=document.getElementsByClassName('navLink');
    nlinkStyle.ClassList.add('navLink');
  };
    
  return (
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <img src={`${process.env.PUBLIC_URL}/Assets/image 1.png`} alt="Icon" className='img1'/>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link className="nav-link navLink" aria-current="page" to="/section1">Home</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link navLink" to="/journey">About</Link>
        </li>

        <li class="nav-item">
          <Link className="nav-link navLink" to="/services">Services</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link navLink" to="/contact">Contact</Link>
        </li>
      </ul>
     <button className='custom-button text-danger' style={{ border: '1px solid red'}}>
  SignUp/Login
</button>
     
    </div>
  </div>
</nav>
    
  )
}

export default Nav