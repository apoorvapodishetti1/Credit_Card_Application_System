import React from 'react'
import Face from './facebook.png'
import Twitter from './twitter.png'
import Insta from './instagram.png'
import linked from './linkedin.png'

export default function Footer() {
  return (
    <>
    <div className="footer1">
      <div className='end'>  
          <div className='endline'>RAL BANK</div>
          <div className='endlist'>
            <ul>
              <li>About us</li>
              <li>Our Services</li>
              <li>Privacy Policy</li>
              <li>Affiliate Program</li>
            </ul>
          </div>
      </div>
      <div className='end'>
        <div className='endline'>Get Help</div>
        <div className='endlist'>
            <ul>
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
      </div>
      <div className='end'> 
         <div className='endline'>Follow Us</div>
         <div className="contact">
          <div className='contactin'><img src={Face} alt="" /></div>
          <div className='contactin'><img src={Twitter} alt="" /></div>
          <div className='contactin'><img src={Insta} alt="" /></div>
          <div className='contactin'><img src={linked} alt="" /></div>
         </div>
      </div>
    </div>
    <div className="root"><span id="year">2023 </span><span> RAL Bank. All Rights Reserved<sup>&copy;</sup></span></div>

    </>

  )
}
