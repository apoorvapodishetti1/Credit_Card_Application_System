import React, { useState } from "react";
import image1 from "./imp1.jpg";
import image2 from "./imp2.jpg";
import image3 from "./imp3.jpg";
import image4 from "./imp4.jpg";
import image5 from "./img5.jpg";
import Timg from './imp1.jpg'
// import './HomeTrack.css';


function HomeTrack() {

//       ID20230712102952: image1,
//       ID20230712103212: image2,
//       ID20230712103327: image3,
//       ID20230712103525: image4,
//       ID20230712103610: image5,

const [inputValue, setInputValue] = useState('');
const [displayedImage, setDisplayedImage] = useState(null);
const [errorMessage, setErrorMessage] = useState('');
const [poptrack, setPoptrack] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();



  const validFormatRegex = /^ID\d{14}$/;

  if (validFormatRegex.test(inputValue)) {
    const number = parseInt(inputValue.slice(2));
    switch (number) {
      case 20230712102952:
        setDisplayedImage(image1);
        break;
      case 20230712103212:
        setDisplayedImage(image2);
        break;
      case 20230712103327:
        setDisplayedImage(image3);
        break;
      case 20230712103525:
        setDisplayedImage(image4);
        break;
      case 20230712103610:
        setDisplayedImage(image5);
        break;
      default:
        setDisplayedImage(Timg);
        break;
    }

    setErrorMessage('');
  } else {
    setErrorMessage('Enter a valid ReferenceID !');
    setDisplayedImage(null);
  }
};

return (
  <>
   <div className='trackform'>
      <div className="Ridbox">
        <div className="Rtitle">Reference ID :</div>
        
        <form onSubmit={handleSubmit}>
         <input className="Rid"
          placeholder='IDXXXXXXXXXXXXXX'
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}/>
          <button type="submit" className="tbutton">
          Track
        </button>
        {errorMessage && (
      <div className="error-message">{errorMessage}</div>
    )}

         </form>
        </div>
        
      </div>   
    <div>    
     <div className='Timg'>     
     {displayedImage && <img src={displayedImage} alt="Displayed Image" />}
     </div>
    </div>
   
</>









);
};

export default HomeTrack;

