import React from 'react';
import './styles.css';

const Journey = () => {
    const style=()=>{
           const buttonElement = document.getElementsByClassName('custom-button'); 
    buttonElement.classList.add('custom-button'); 
    }
  return (
    <div className='container '>
        <div className='row'>
            <div className='col-md-6 mt-5'>
        <h2>Our Journey</h2>
        <p>Welcome to Hb and Sons. Where Welcome to HB and Sons, where our commitment 
            and excellence fuel our journey towards success. At HB and Sons, we pride 
            ourselves on delivering unparalleled service and setting industry standards. </p>
         <p>Join us on this exciting journey as we continue to push boundaries and redefine
             the standards.</p>  
           <button className='custom-button btn btn-danger' style={{ border: '1px solid red'}}>
  Get in touch
</button>  
</div> 
</div>
    </div>
  )
}

export default Journey