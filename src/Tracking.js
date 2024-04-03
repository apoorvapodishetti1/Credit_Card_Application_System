import React, { useState } from 'react';
import './OrderTracking.css';
import { useLocation } from 'react-router-dom';
import Timg from './imp1.jpg'

// import 'bootstrap/dist/css/bootstrap.min.css';

const OrderTracking = () => {
  
  const [poptrack, setPoptrack] = useState(false);

  const location = useLocation();
  const {state} = location
  

  const POP=(e)=>{
    e.preventDefault();
    setPoptrack(!poptrack);
  }




 
  return (
    <>
     <div className='trackform'>
        <div className='success'>          
            You have Successfully Submitted the Form!!
        </div>
        <div className="Ridbox">
          <div className="Rtitle">Reference ID :</div>
          <div className="Rid">{state?.responseData.applicationid}</div>
          <div className="tbutton" onClick={POP}>Track</div>
        </div>
     </div>
     {poptrack && (
      <div>
       <div className='Ridbox'>
        <div className='Rtitle'>Card Type :</div>
         <div className='trackinfo'>{state?.info2}</div>
       </div>
       <div className='Timg'>
        
        <img src={Timg} alt="" />
       </div>
      </div>
     )}
    </>
  )
}
export default OrderTracking;