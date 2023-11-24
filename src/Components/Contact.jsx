import React from 'react'

const Contact = () => {
  return (
    <div className='container ' style={{marginBottom:"500px", marginTop:"60px"}}>
      <div className='row'>
        <div className='col-md-5'>
          <h1><span className='text-danger '>Contact </span>Hb & Sons LLC</h1>
          <p className='font-weight-bold'>Thank you for trusting Hb & sons. We are so pleased to have you here. Please provide the following i nformation</p>
        </div>
        
        <div className='col-md-6'>
           <img src={`${process.env.PUBLIC_URL}/Assets/RectangleRed.png`} style={{position:"absolute", right:"20px"}} alt="" />
            <img src={`${process.env.PUBLIC_URL}/Assets/mapAccurate.png`} style={{position:"absolute", right:"120px", top:"200px"}} alt="" />
        </div>
      </div>

      <div className='row'>
        <div>
          <form action="">
            <input type="text" placeholder='Name' style={{width:"500px"}} required/> <br /> <br />
             <input type="email" placeholder='Email' style={{width:"500px"}} required/> <br /> <br />
              <input type="phone" placeholder='Phone Number' style={{width:"500px"}} required/> <br /> <br />

            <select id="foundUs" name="foundUs" style={{width:"500px"}}>
  <option value="instagram">Instagram</option>
  <option value="twitter">Twitter</option>
  <option value="linkedin">Linkedin</option>
  <option value="other">Other</option>
</select>
<br /> <br />
<button className=' btn btn-danger' style={{width:"500px"}}>Send</button>
          </form>
          
        </div>
        
      </div>

      {/* icons */}
    <div className='container mt-5'>
  <div className='row'>
    <div className='col-md-2 mb-3 d-flex align-items-center'>
      <img src={`${process.env.PUBLIC_URL}/Assets/tel.png`} alt="" style={{ width: "20px" }} />
      <div className='ms-3'>
        <p>Phone</p>
        <p className='text-danger'>051-990098-76</p>
      </div>
    </div>
    <div className='col-md-2 mb-3 d-flex align-items-center'>
      <img src={`${process.env.PUBLIC_URL}/Assets/fax.png`} alt="" style={{ width: "20px" }} />
      <div className='ms-3'>
        <p>Fax</p>
        <p className='text-danger'>89743-223-4</p>
      </div>
    </div>
    <div className='col-md-2 mb-3 d-flex align-items-center'>
      <img src={`${process.env.PUBLIC_URL}/Assets/mail.png`} alt="" style={{ width: "50px" }} />
      <div className='ms-3'>
        <p>Email</p>
        <p className='text-danger'>email@gmail.com</p>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Contact