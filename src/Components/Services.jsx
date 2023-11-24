import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Services = () => {
  const style=()=>{
       const buttonElement = document.getElementsByClassName('custom-button'); 
    buttonElement.classList.add('custom-button'); 
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='d-flex align-items-center justify-content-center mt-5'>
          <h1>Our Services</h1>
        </div>
        <div className='row '>
          <p className='d-flex align-items-center justify-content-center'>Explore how our offering go beyond expectation, product quality and delivering services are best</p>
        </div>
        <div className='row'>
          <div className='col-md-5'></div>
          
          <div className='col-md-4'>
          <button className='custom-button btn btn-danger d-flex align-items-center justify-content-center'>Get in touch</button></div>
        </div>
      </div>

  <div className='d-flex mt-5 gap-5'>
  <div class="card" style={{width: "20rem"}}>
  <img src={`${process.env.PUBLIC_URL}/Assets/Rectangle1.png`} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Fuel Transport</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <img src={`${process.env.PUBLIC_URL}/Assets/Rectangle2.png`} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">On demend deivery</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <img src={`${process.env.PUBLIC_URL}/Assets/Rectangle3.png`}class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Fleet fueling Solutions</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
  </div>

  <div className='d-flex mt-5 gap-5'>
  <div class="card" style={{width: "20rem"}}>
  <img src={`${process.env.PUBLIC_URL}/Assets/Rectangle4.png`} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Quality Assurance</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <img src={`${process.env.PUBLIC_URL}/Assets/Rectangle5.png`} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Consultant Services</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <img src={`${process.env.PUBLIC_URL}/Assets/Rectangle6.png`} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Customized solutions</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
  </div>

    </div>

  )
}

export default Services