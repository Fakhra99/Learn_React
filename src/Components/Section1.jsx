import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

const Section1 = () => {
    const Styles=()=>{
        const sec1=document.getElementsByClassName('sec1Div');
        sec1.ClassList.add('sec1Div');

         const van=document.getElementsByClassName('van');
        van.ClassList.add('van');

          const vehicles=document.getElementsByClassName('car');
        vehicles.ClassList.add('car');

         const buttonElement = document.getElementsByClassName('custom-button'); 
    buttonElement.classList.add('custom-button'); 

     const imaged = document.getElementsByClassName('image16'); 
    imaged.classList.add('image16'); 

     const Sec3 = document.getElementsByClassName('sec3'); 
    Sec3.classList.add('sec3'); 

     const Sec4 = document.getElementsByClassName('sec4'); 
    Sec4.classList.add('sec4');

      const Sec6 = document.getElementsByClassName('sec6'); 
    Sec6.classList.add('sec6');

     const Sec7 = document.getElementsByClassName('sec7'); 
    Sec7.classList.add('sec7');

      const CEOimg = document.getElementsByClassName('imgceo'); 
    CEOimg.classList.add('imgceo');

    
    };
  return (
    // main div section 1
    <div>
    <div className='container sec1Div'>
    <div className=' row'>
        <div className='col-md-5'>
            <h1>Discover excellence with Hb & Sons LLC</h1>
        </div>
        <div className='row'>
            <div className='col-md-3'>
                <h6>Our Premier Partner in Fuel Transport and Delivery</h6>
                <button className='custom-button btn btn-danger'>Get in touch</button>

            </div>
        <div className='col-md-4'>
          <img src={`${process.env.PUBLIC_URL}/Assets/van.png`} className='van' alt="" />
             <img src={`${process.env.PUBLIC_URL}/Assets/fuel_pump.png`} className='fuel_pump' alt="" />
             <img src={`${process.env.PUBLIC_URL}/Assets/car.png`} className='car' alt="" />
             </div>
        </div>  
    </div>
    </div>

    <div className='container sec2'>
      <div className='row'>
        <div className='col-md-6 mx-auto'>
          <h2>Working With Fortune <span className='text-danger'>500+ Clients</span></h2>
          <p className='text-center'>Join us in our journey to success</p>
        </div>
      </div>
      
      <div className='row d-flex align-items-center justify-content-evenly'>
         <img src={`${process.env.PUBLIC_URL}/Assets/image16.png`} className='image16'/>
         <img src={`${process.env.PUBLIC_URL}/Assets/image10.png`} className='image16'/>
         <img src={`${process.env.PUBLIC_URL}/Assets/image11.png`} className='image16'/>
         <img src={`${process.env.PUBLIC_URL}/Assets/image14.png`} className='image16'/>
         <img src={`${process.env.PUBLIC_URL}/Assets/image15.png`} className='image16'/>
      </div>
    </div>
{/* sec 3 */}
    <div className='container sec3'>
      <div className='row'>
      <div className='col-md-6'>
            <img src={`${process.env.PUBLIC_URL}/Assets/image 7.png`} alt=""/>
             </div>
             
              <div className='col-md-6'>
            <h1>Discover excellence with Hb & Sons LLC</h1>
        
                <h6>Our Premier Partner in Fuel Transport and Delivery</h6>
                <button className='custom-button text-danger' style={{ border: '1px solid red'}}>
  Get in touch
</button>
            </div>
            </div>
        </div> 
         {/* sec 4 */}
        
         <div className='container d-flex align-items-center justify-content-center sec4'>
          <div className='row'>
            <div className='col-md-6 '>
              <img className='imgceo' src={`${process.env.PUBLIC_URL}/Assets/Frame79.png`}/>
            </div>
            <div className='col-md-6'>
              <p>I can`t praise Hb & sons LLc for their exceptional services</p>
              <p>Their teams dedication to safety and on time fuel deliveries has
                 been a game changer for our operations. We are proud to have them as our fuel transport partner. </p>
                 <h5 className='text-danger'>John Smith,</h5>
                 <h4 style={{marginright:'10px'}}>CEO, Energy Corp Inc <img src={`${process.env.PUBLIC_URL}/Assets/Frame86.png`} alt=""/></h4>
            </div>
          </div>

         </div>

         {/* sec 5 */}
         <div className='container sec5 d-flex justify-content-center'>
          <div className='row'>
            <div className='col-md-12'>
<h1>Our Journey, Your Assurance</h1>
<p>Dedication is delivering Excellence in fuel Hauler and Gas Hauler Services</p>
<button className='custom-button btn btn-danger'>Get in touch</button>
            </div>
          </div>
         </div>
         {/* sec6 */}

         <div className='container sec6'>
          <div className='row'>
            <div className='col-md-4'>
              <h1>Find Us On Map</h1>
              <p>Explore Our physical location</p>
              <button className='custom-button text-danger' style={{ border: '1px solid red'}}>
  Locate us
</button>
            </div>
            <div className='col-md-5'>
              <img src={`${process.env.PUBLIC_URL}/Assets/map.png`} alt=""/>
            </div>
          </div>

         </div>
         {/* sec 7 */}
    {/* sec 7 */}
<div className='container d-flex align-items-center justify-content-center sec7 '>
  <div className='row'>
    <div className='col-md-12 text-center'>
      <h1 className='text-danger'>Ready To Fuel Your Needs?</h1>
      <p>Dedication is delivering Excellence in fuel Hauler and Gas Hauler Services</p>
      <button className='custom-button btn btn-danger'>Get in touch</button>
    </div>
  </div>
</div>
        
</div>
    
  )
}

export default Section1