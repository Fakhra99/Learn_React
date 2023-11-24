import React from 'react';
import './styles.css';

const Footer = () => {
    const style=()=>{
         const Sec8 = document.getElementsByClassName('sec8'); 
    Sec8.classList.add('sec8');
    }
  return (
     <div className='container sec8'>
          <div className='row'>
            <div className='col-md-3'>
              <img src={`${process.env.PUBLIC_URL}/Assets/image 1.png`} alt="" />
              <p>Copyright @ 2020 HB & SONS LLC</p>
              <p>All Rights Reserved </p>
              <div className='d-flex justify-content-evenly'>
              <img src={`${process.env.PUBLIC_URL}/Assets/p1.png`} alt="" />
              <img src={`${process.env.PUBLIC_URL}/Assets/p2.png`} alt="" />
              <img src={`${process.env.PUBLIC_URL}/Assets/p3.png`} alt="" />
              <img src={`${process.env.PUBLIC_URL}/Assets/p4.png`} alt="" /></div>
            </div>
            <div className='col-md-3'>
              <h5>Comapny</h5>
              <p>About us</p>
              <p>Blog</p>
              <p>Contact us</p>
              <p>Testimonials</p>
            </div>

            <div className='col-md-3'>
              <h5>Support</h5>
              <p>Help Center</p>
              <p>Terms of Service</p>
              <p>Legal</p>
              <p>Privacy Policy</p>
            </div>

            <div className='col-md-3'>
              <h5>Stay Up To Date</h5>
              <button className='btn btn-danger'>Your Email address</button>
            </div>
          </div>
         </div>
  )
}

export default Footer