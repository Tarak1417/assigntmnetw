import React from 'react';
import "./DoctorCard.css"; // Import the CSS for styling
import CallIcon from './assets/Button (1).png'; // Phone icon
import DocIcon from './assets/Button (2).png';   // Doctor icon
import Logo from './assets/Circles.png';   
import topLogo from "./assets/AD22-11.png"   
import Doctororange from "./assets/Ellipse 28.png"    // Circular logo on the right
import doctorblue from "./assets/Ellipse 26.png"
import star from "./assets/Vector (8).png"

const DoctorCard = () => {
  return (
    <div className="card-container">
        <div className='top-logo'>
            <img src={topLogo} alt='topLogo'/>
        </div>
      <div className="card-section">
        <h2>Speak with a counsellor now.</h2>
        <p>Let's a counselor guide you</p>
        <div className="card-button">
          <img src={CallIcon} alt="Call" />
          <div>
            <div className="phone-number">+91 8655452746</div>
            <small>9AM to 6PM</small>
          </div>
        </div>
      </div>

      <div className="card-section border-left">
        <h2>Find A Doctor Near You.</h2>
        <p>Find a Doctor</p>
        <button className="card-action">
          <img src={DocIcon} alt="Find doctor" />
          Find A Doctor Now
        </button>
      </div>

      <div className="card-logo">
        <img src={Logo} alt="Logo" className='cardimg' />
        <div className='balloraange'>
       
        </div>
         <div className='blue'>
            

        </div>
        <div className="star">
         <img src={star} alt="Star" className='starimage1'/>
          <img src={star} alt="Star" className='starimage2'/>
                    <img src={star} alt="Star" className='starimage3'/>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
