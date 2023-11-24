import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './styles.css';

const Prenav = () => {
  const pStyles =()=>{
    const phonestyle=document.getElementsByClassName('phoneImg');
    phonestyle.ClassList.add('phoneImg');
      const emailstyle=document.getElementsByClassName('emailImg');
    emailstyle.ClassList.add('emailImg');
     const clockstyle=document.getElementsByClassName('clockImg');
    clockstyle.ClassList.add('clockImg');
  };

  return (
    <div className='container'>
      <div className='d-flex justify-content-between'>
        {/* Email */}
        <div className='col-md-4'>
          <img src={`${process.env.PUBLIC_URL}/Assets/Vector3.png`} className='emailImg' alt="Email Icon" />
          <span className='text-danger'>nbandsonslic@gmail.com</span>
        </div>

        {/* Phone */}
        <div className='col-md-4 phoneImg'>
          <img src={`${process.env.PUBLIC_URL}/Assets/Vector2.png`} className='phoneImg' alt="Phone Icon"/>
          <span className='text-danger'>605-648-9841</span>
        </div>

        {/* Time */}
        <div className='col-md-4 text-end'>
          <img src={`${process.env.PUBLIC_URL}/Assets/Vector.png`} className='clockImg' alt="Clock Icon" />
          <span>8:00am until 6:00pm</span>
        </div>
      </div>
    </div>
  );
}

export default Prenav;
