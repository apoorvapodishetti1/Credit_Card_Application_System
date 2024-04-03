import React, { useState,useRef,useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./Home.css";
import Travel from './travel.png'
import Shop from './shopping.png'
import Gold from './goldcard.png'
import Platinum from './platinum card.png'
import axios from 'axios';


function Display() {
  const navigate = useNavigate();
  // const navigate1 = useNavigate();
  const location = useLocation();
  const {state} = location
  
  console.log("update:",state)
  
  const formData = location.state?.formData;
  const [submitting, setSubmitting] = useState(false);
  const [popbox, setPopbox]= useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  
  const handleEdit1 = () => {
    
    navigate('/application', { state: { formData,
      img:state.img,
      info2:state.info2 } });

  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  // });
    
  };

  const handleEdit2 = () => {
    
    navigate('/application', { 
      state: { formData,
      img:state.img,
      info2:state.info2 } });

  //   window.scrollTo({
  //     bottom: 200,
  //     behavior: 'smooth'
  // });
 };

  const handleEdit3 = () => {
    
    navigate('/application', { state: { formData,
      img:state.img,
      info2:state.info2 } });

  //   window.scrollTo({
  //     bottom: 0,
  //     behavior: 'smooth'
  // });  
  };

  const toggleModal = (e) =>{
    e.preventDefault();
    setPopbox(!popbox)
}
const Close = () => {
   setPopbox(false);
}

  
  

  

  

  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      const response = await axios.post('http://localhost:8081/creditcard/applyCreditcard', formData);
      
      // Make a POST request to your backend API endpoint to save the form data
      // await axios.request({
      //   url: 'http://localhost:8081/creditcard/applyCreditcard',
      //   method: 'POST',
      //   data:formData,
      //  })
      
      setSubmitting(false);
      const responseData = response.data;
      navigate('/track', {
        state:{ responseData,
          img:state.img,
          info2:state.info2,
      
      }});
      console.log(responseData);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitting(false);
    }
  };

  return (
  <>
    <div className='applyform' >
      <div className='infocard'>
      <div onSubmit={()=>handleSubmit(Travel,"Travel Credit card")}></div>
         <div className='infocard1'><img src={state.img} alt="" /></div>
         <div className='infocard2'>{state.info2}</div>
       </div>
       
      <h1 className="title"><b>Verify Details</b></h1>
      <form className="animate-slide" onSubmit={handleSubmit} >
      <button className='edit1' onClick={handleEdit1} >
        Edit
      </button>
         {/* <div className='applyform'> */}
       <h2>Personal Information</h2>
         <div className='box'>
            <div className='boxin1' > 

             <div className='boxinn'>
              <label htmlFor="firstName">First Name:</label>
              <input type="text1"  value={formData.firstName}/>
             </div>


             <div className='boxinn'>
               <label htmlFor="lastName">Last Name:</label>
               <input type="text1"  value={formData.lastName}/>
             </div> 

              <div className='boxinn' >        
                <label htmlFor="phoneNumber">Mobile Number:</label>
                <input type="text1"  value={formData.phoneNumber}/>
              </div>   
           </div>
          <div className='boxin1'>
            <div className='boxinn'>
              <label htmlFor="dob">Date of Birth:</label>
              <input type="text1"  value={formData.dob}/>
            
            </div>
            <div className='boxinn' >
             <label id='itint' htmlFor="itin">Individual Tax Identification Number (ITIN):</label>
             <input type="text1"  value={formData.itin}/>
            </div>  
            <br />
         </div>   
    </div>


    <div className="category">
    <button className='edit2' onClick={handleEdit2} >
        Edit
      </button>
      <div className='boxin1' id='change'>
        <div className='boxinn'>
        
          <div className='button1'>
            <label htmlFor="gender">Gender:</label>
          </div>
          <div className='button'>
          <input type="text1"  value= {formData.gender}/>
          </div>
           
        </div>
  

        <div className='boxinn' >
           <label id="occupation" htmlFor="occupation">Occupation:</label>
           <input type="text1"  value={formData.occupation}/>
          
        </div>

      </div>
      <div className='boxin1' id='change'>
        <div className='boxinn'>
          <label htmlFor="email">Email:</label>
          <input type="text1"  value={formData.emailID}/>
          
        </div>
        <div className='boxinn'>
              <label htmlFor="fatherName">Father Name:</label>
              <input type="text1"  value= {formData.fatherName}/>
             
        </div>
        <div className='boxinn'>
            <label htmlFor="motherName">Mother Name:</label>
            <input type="text1"  value={formData.motherName}/>
        </div>
      
      </div>
      <div className='boxin2'id='passport1' >
        <div  className='boxinn' >
          <div className='button1'>
           <label htmlFor="marital_status">Marital Status:</label>
          </div>
          
           <div className='button'>
           <input type="text1"  value={formData.marital_status}/>
          </div>
          
        </div>
      
           <div className='boxinn'>
            <div className='button1'>
              <label htmlFor="residentialStatus">ResidentialStatus Status:</label>
           </div>
           <div className='button'>
           <input type="text1"  value={formData.residentialStatus}/>
           </div>
       </div>
     </div>





      <label htmlFor="address">Address:</label>
      <input type="text1"  value={formData.address}/>

    <div className='boxin3' id='change1'>
      <div className='boxinn'>
      <label htmlFor="city" >City:</label>
      <input type="text1"  value={formData.city}/>

      </div>
      <div className='boxinn'>
      <label htmlFor="state">State:</label>
      <input type="text1"  value={formData.state}/>

      </div>
    </div>
      <div className='boxin3' id='change1'>
         <div className='boxinn' >
            <label htmlFor="pincode" >Pincode:</label>
            <input type="text1"  value={formData.pincode}/>

         </div>
         <div className='boxinn'>
            <label htmlFor="landmark">Landmark:</label>
            <input type="text1"  value={formData.landmark}/>
         </div>
      
    </div> 
    </div>
   



  <h2 className="fi">Financial Information:</h2>
    <button className='edit3' onClick={handleEdit3} >
        Edit
      </button>
    <div className="box2">
      <div className='boxin1' id='change2'>
        <div className='boxinn'>
        <label htmlFor="companyName">Company Name:</label>
        <input type="text1"  value={formData.companyName}/>
        

        </div>
        <div className='boxinn'>
        <label htmlFor="companyAddress">Company address:</label>
        <input type="text1"  value={formData.companyAddress}/>
        </div>

        <div className='boxinn'>
        <label htmlFor="credit_score">Credit Score:</label>
        <input type="text1"  value={formData.credit_score}/>
        </div>
        
     
      </div>
      <div className='boxin1' id='change2'>
        <div className='boxinn' >
        <label htmlFor="income">Gross Monthly Income:</label>
        <input type="text1"  value={formData.grossIncomeMonthly}/>

        </div>
        <div className='boxinn'>
        <label htmlFor="liabilities">Liabilities (if any):</label>
        <input type="text1"  value={formData.liabilities}/>

        </div>

      </div>
      <div className='declaration'>
      <h2>Declaration</h2>
      <p><i>I hereby apply for the RAL International Credit Cards declare that all the Information submitted by me with <br />this application are true and are deemed to be submitted by me to RAL bank.</i></p>
      </div>
    </div>
    <div className='footer'>
    <button className='submit2' onClick={handleSubmit} disabled={submitting}>
      {submitting ? 'Submitting...' : 'Submit'}
    </button>
        {/* <Button onClick={handleC}></Button> */}
    <div>
    <label htmlFor="sign">Sign:</label>
    <input type="text1"  value={formData.sign}/>
    
    </div>
    </div>


      
   
      
  </form>
</div>

{popbox && (
  <div className='popbox'>
    <div className="overlay">
    <div className="popcontent">
      <div className='btn'><button className="closebtn" onClick={Close}>❌</button></div> 
      <h1>Terms and Conditions</h1>
      <br />
      <div className="list">
        <ul className='listin'>
          <li className='listin'>Additional Credit Card or Add-on Credit Card shall mean a Credit Card issued to the additional Cardmember, on the request of the Primary Cardmember.</li>
          <li className='listin'>I agree that, under normal circumstances, the bank has the liberty to close my account at any time by giving me at least 30 days notice. However, if the Average Monthly/ Quarterly Balance, is not maintained, the Bank reserves the right to close my account without giving any prior notice.</li>
          <li className='listin'>I agree that the Bank can at its sole discretion, amend any of the services/facilities given in my account either wholly or partially at any time by giving me at least 30 days notice and/or provide an option to me to switch to other services/facilities.</li>
          <li className='listin'>I agree that in the event of an account being overdrawn, the Bank reserves the right to set off this amount against any credit lying in any of my accounts.</li>
          <p>The Bank at its sole discretion, without serving any notice, reserves the right to disqualify any User, for any reason including but not limited to any misuse of the products/service or fraud or suspicious transaction/activity or under any legal requirement or applicable rules and regulations.
The User understands and agrees that these terms and conditions are in addition to, and not in derogation of the applicable terms and conditions relating to the usage of any other product or service that the User may be currently availing or may in future avail from the Bank.
The User understands and agrees that each product or service as offered by the Bank is governed by its respective terms and conditions. The User is advised and recommended to read those terms and conditions before availing the respective product and service.</p>
           <p>The User shall not post, distribute or otherwise transmit or make available any software or other computer files that contain a virus or malicious content or otherwise impair or damage the Website or any connected network or interfere with any other person’s or entity's use or enjoyment of the Website.
The software and hardware underlying the Website as well as other internet related software which are required for accessing the Website are legal property of Bank and/or its vendor(s). The permission given by the Bank to access the Bank’s Website shall not convey any proprietary or ownership rights in the above software / hardware.
The User acknowledges and confirms that the Bank is not responsible for availability and/or accuracy of the content or services of third party sites, which are linked to the Website. The Bank has no obligation to verify and monitor the content and opinions expressed and other information and links provided in relation to any third party sites on the Website. The User is aware that he/she/it is accessing such hyperlinks to third party sites at his/her/its own risk.
The User is aware that the products, services and rewards offered on the Website may not be available in all geographic areas and the Bank reserves its right to determine the availability and eligibility for any product, services and rewards offered on the Website. The User is advised to check the regularity provision of the place of his/her/it’s residence. The Bank shall not have any responsibility in respect of the same.</p>
           <p>The Bank services, including all content, software, functions, material, and information made available or accessible through the Website are provided “as is”. The Bank make no representation and warranty of any kind for the content, software, functions, material and information available/accessible through the services.</p>
        </ul>
        </div>
    </div>
    </div>
  </div>
 )};
</>

  );
};

export default Display;
