import React,{useState,useRef,useEffect} from 'react'
import "./Home.css"
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';
// import Services from './Services.js';
// import { render } from '@testing-library/react';



const Application = () => {
  const location = useLocation();
  const {state} = location
  // console.log("🚀 ~ file: Application.js:47 ~ Application ~ location:", location)
  console.log("🚀 ~ file: Application.js:47 ~ Application ~ state:", state)
  // console.log("🚀 ~ file: Application.js:47 ~ Application ~ pathname:", pathname)
const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    dob: '',
    itin: '',
    gender: '',
    occupation: '',
    marital_status: '',
    residentialStatus: '',
    emailID: '',
    motherName: '',
    fatherName: '',
    address: '',
    city: '',
    pincode: '',
    landmark: '',
    companyAddress: '',
    companyName: '',
    grossIncomeMonthly: '',
    // liabilities: '',
    credit_score: '',
    sign: '',
    card_type:state?.info2,
  });


  const [errors, setErrors] = useState({});
  const info = useRef(null)
  const middle = useRef(null)
  const last = useRef(null)
  const address= useRef(null)
  const end= useRef(null)
  const [popbox, setPopbox]= useState(false);
  const [selectedOption, setSelectedOption] = useState('');


  const toggleModal = (e) =>{
    e.preventDefault();
    setPopbox(!popbox)
}
const Close = () => {
   setPopbox(false);
}



  const navigate = useNavigate();

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  
  useEffect(() => {
    const existingData = location.state?.formData;
    if (existingData) {
      setFormData(existingData);
    }
  }, [location.state]);

   
  // const [itin1, setItin1] = useState("");

  const handleChange = (e) => {
    if(e.target.name == 'checkbox'){
      setFormData({
        ...formData,
        [e.target.name]: e.target.checked,
  
      });  
    }else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
  
      });  
    }


  };


 const handleSubmit = (event) => {
    event.preventDefault();
        
    if (validateForm()) {
          navigate('/display', { 
            state: { 
            formData,
            img:state.img,
            info2:state.info2
           } 
         });
         window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
    }
    

    
        
 };

  

    // if(e.target.name ==="itin"){
    //   console.log('priya',e.target.name)
    // }

 
//   const handleC = () => {
//     axios.request({
//       url: 'http://localhost:8081/creditcard/applyCreditcard',
//       method: 'post',
//       // headers: requestHeaders,
//       data:formData,
//   }).then(res => {
//     console.log(res);
//     console.log(res.data);
//   });
// }
  

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = 'Please enter firstName!';
    }else if(formData.firstName === formData.lastName){
       newErrors.firstName= "Should not be identical to lastName"
    }else if(formData.firstName.split(' ').length > 1){
      newErrors.firstName = "This is designated for first firstName only!"
    }else if(!(/^[A-Za-z]+$/).test(formData.firstName)){
      newErrors.firstName = 'Only Alphabets!';
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Please enter Last Name!';
    }else if(formData.lastName === formData.firstName){
      newErrors.lastName= "Should not be identical to first name"
   }else if(formData.lastName.split(' ').length > 1){
     newErrors.lastName = "This is designated for first name only!"
   }else if(!(/^[A-Za-z]+$/).test(formData.lastName)){
     newErrors.lastName = 'Only Alphabets!';
   }
  
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Mobile Number is required!';
    } else if (!/^[1-9]\d{9}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Must contain 10 digits';
    }

    if (!formData.itin) {
      newErrors.itin = 'ITIN is required!';
    } else if (!/^([9]\d{2})([ -]?)([7]\d|8[0-8])([ -]?)(\d{4})$/.test(formData.itin)) {
      newErrors.itin = 'Please enter valid ITIN';
    }

// 123-45-6789
    if (!formData.dob) {
      newErrors.dob = 'Please select your dob';
      // console.log(formData.dob);
    } else{
      const selectDate = new Date(formData.dob)
      const currentDate = new Date();
      if(selectDate > currentDate){
        newErrors.dob = 'Invalid date format';
      }
      else{
        const ageInMs = currentDate - selectDate;
        const ageInYears = ageInMs / (1000*60*60*24*365.25);
        if(ageInYears < 18){
          newErrors.dob  = 'Age must be above 18';
        }
      }
    }



    if (!formData.checkbox) {
      newErrors.checkbox = 'Please the tick the checkbox if you agree with our terms and conditions';
    }


    if (!formData.marital_status) {
      newErrors.marital_status = 'Please select your marital status';
    }

    if (!formData.gender) {
      newErrors.gender = 'Please mention your gender';
      // console.log(formData.gender);
    } 

    if (!formData.residentialStatus) {
      newErrors.residentialStatus = 'Please mention your residential status';
  
    } 

    if (!formData.occupation) {
      newErrors.occupation = 'Please select your occupation ';
      // console.log(formData.occupation);
    } 

    if (!formData.emailID) {
      newErrors.emailID = 'Please enter your EmailID!';
    } else if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(formData.emailID)) {
      newErrors.emailID = 'Please Enter valid EmailID';
    }
  // 
  if (!formData.motherName) {
    // info.current.scrollIntoView({behaviour:'smooth'})
    newErrors.motherName = 'Please enter Mother Name!';
  }else if(formData.motherName === formData.fatherName){
     newErrors.motherName= "Should not be identical to Father name"
  }else if(formData.motherName.split(' ').length > 2){
    newErrors.motherName = "This is designated for first name and last name only!"
  }else if(!(/[a-zA-Z\s]+/g).test(formData.motherName)){
    newErrors.motherName = 'Only Alphabets';
  }

  if (!formData.fatherName) {
    newErrors.fatherName = 'Please enter Father Name!';
  }else if(formData.fatherName === formData.motherName){
     newErrors.fatherName= "Should not be identical to Mother name"
  }else if(formData.fatherName.split(' ').length > 2){
    newErrors.fatherName = "This is designated for first name and last name only!"
  }else if(!(/[a-zA-Z\s]+/g).test(formData.fatherName)){
    newErrors.fatherName = 'Only Alphabets';
  }



  if(!formData.address){
    newErrors.address = 'Please enter your Address!';
  }else if (formData.address.length>50){
     newErrors.address = "It takes Maximum upto 50 Characters"
      
  }


     if(!formData.city){
      newErrors.city = 'Please enter your city name!';
    }else if(formData.motherName.split(' ').length > 3){
        newErrors.motherName = "Enter city"
    }else if (!/^[a-zA-Z]+[a-zA-Z]+$/.test(formData.city)){
      newErrors.city = "Only Alphabets"

    }

    if(!formData.state){
        newErrors.state = 'Please enter your state name!';
    }else if (!/^[a-zA-Z]+[a-zA-Z]+$/.test(formData.state)){
         newErrors.state = "Only Alphabets"
    }

    if(!formData.companyName){
        newErrors.companyName = 'Please enter your Company name!';
    }else if (!/^[a-zA-Z]+[a-zA-Z]+$/.test(formData.companyName)){
         newErrors.companyName = "Only Alphabets"
    }

    if(!formData.companyAddress){
    newErrors.companyAddress = 'Please enter your Company address!';
    }else if (formData.companyAddress.length>59){
     newErrors.companyAddress = "It takes Maximum upto 50 Characters"
    }

    if(!formData.credit_score){
      newErrors.credit_score = 'Please enter your Credit score!';
    }else if(formData.credit_score<1){
      newErrors.credit_score = 'Please enter a Positive value';
    }
    
    // if(!formData.liabilities){
    //   newErrors.liabilities = 'Liabilities is Required';
    // }else if (formData.liabilities.length>25){
    //    newErrors.liabilities = "It takes Maximum upto 30 Characters"
    // }

    if(!/^\d+(\.\d{1,2})?$/.test(formData.grossIncomeMonthly)){
      newErrors.grossIncomeMonthly = 'Please enter your Gross Monthly Income';
    }else if (!(parseFloat(formData.grossIncomeMonthly) >= 20000)){
       newErrors.grossIncomeMonthly = "Minimum income must be 20000"
    }

    if(!formData.pincode){
        newErrors.pincode = 'Please enter your location pincode ';
    }else if (formData.pincode.length>6 && isNaN(formData.pincode)){
         newErrors.pincode= "Please enter valid pincode"
    }

    if(!formData.landmark){
          newErrors.landmark = 'Please Enter your landmark ';
    }else if ((formData.landmark).length > 20){
           newErrors.landmark = "It will take maximum upto 20 characters"
    }

    if(!formData.sign){
      newErrors.sign = 'Please sign here';
    }else if(formData.sign !== formData.firstName + formData.lastName){
      newErrors.sign = "Enter your full name";
    }
    

    setErrors(newErrors);
    
    if(newErrors.firstName || newErrors.lastName || newErrors.phoneNumber || 
       newErrors.itin ||  newErrors.dob )
       {
        info.current.scrollIntoView({behaviour:'smooth'})
       }else if (newErrors.occupation || newErrors.gender ||newErrors.emailID || newErrors.motherName || newErrors.fatherName || newErrors.marital_status ||newErrors.residentialStatus ){
        middle.current.scrollIntoView({behaviour:'smooth'})
       }else if (newErrors.address || newErrors.city || newErrors.pincode || newErrors.landmark || newErrors.state ){
        address?.current?.scrollIntoView({behaviour:'smooth'})
       }else if (newErrors.companyAddress || newErrors.companyName || newErrors.grossIncomeMonthly || newErrors.liabilities || newErrors.credit_score ){
        last?.current?.scrollIntoView({behaviour:'smooth'})
       }else if(newErrors.sign || newErrors.checkbox)
         end?.current?.scrollIntoView({behaviour:'smooth'})

      
    return Object.keys(newErrors).length === 0;
  };



//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // window.location.reload();

//     if (validateForm() ) {
//       // Submit the form
//       console.log('Form submitted');
//       handleC();
//     }
//   };



  return (
  <>
    <div className='applyform' >
       <div className='infocard'>
         <div className='infocard1'><img src={state.img} alt="" /></div>
         <div className='infocard2'>{state.info2}</div>
       </div>
    <h1 className="title"><b> Application Form</b></h1>
  <form className="animate-slide" onSubmit={handleSubmit} >
    {/* <div className='applyform'> */}
    <h2 ref={info}>Personal Information</h2>
    <div className='box'>
      <div className='boxin1' > 

          <div className='boxinn'>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange}/>
           <div className='error' >{errors.firstName && <span className="error">{errors.firstName}</span>}</div>

         </div>


         <div className='boxinn'>
         <label htmlFor="lastName">Last Name:</label>
         <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange}/>
          <div className='error'>{errors.lastName && <span className="error">{errors.lastName}</span>}</div>

         </div> 

         <div className='boxinn' >        
         <label htmlFor="phoneNumber">Mobile Number:</label>
         <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber}
          onChange={handleChange} />
          {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}

        </div>   
      </div>
      
      <div className='boxin1'>
          <div className='boxinn'>
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date"  id="dob" name="dob" value={formData.dob} onChange={handleChange}/>
            {errors.dob && <span className="error">{errors.dob}</span>}
            
          </div>
            <div className='boxinn' >
            <label id='itint' htmlFor="itint">Individual Tax Identification Number (ITIN):</label>
            <input id='itin' type="tel" name="itin" placeholder='9XX-8X-XXXX' value={formData.itin}  onChange={handleChange} />
            {errors.itin && <span className="error">{errors.itin}</span>}

            </div>  
            <br />
      </div>   
      


 
    </div>
    <div className="category" ref={middle}>
      <div className='boxin1' id='change'>
        <div className='boxinn'>
          <div className='button1'>
            <label htmlFor="gender">Gender:</label>
          </div>
          <div className='button' onChange={handleChange}>
            <input type="radio" id="male" name="gender" value= 'male'/>
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value= 'female'/>
            <label htmlFor="female">Female</label>
            <input type="radio" id="other" name="gender" value= 'other'/>
            <label htmlFor="other">Other</label>
          </div>
           {errors.gender && <span className="error">{errors.gender}</span>}
        </div>
  

        <div className='boxinn' >
           <label id="occupation">Occupation:</label>
           <select name="occupation" className='boxinn' onChange={handleChange}  value={formData.occupation} >
              <option value="text">Select occupation</option>
              <option value="Private Employee">Private Employee</option>
              <option value="Government Employee">Government Employee</option>
              <option value="Self Employed">Self Employed</option>
          </select>
          {errors.occupation && <span className="error">{errors.occupation}</span>}
           
        </div>

      </div>
      <div className='boxin1' id='change'>
        <div className='boxinn'>
          <label htmlFor="email">Email:</label>
          <input type="email" id="emailID" name="emailID" value={formData.emailID} onChange={handleChange} />
          {errors.emailID && <span className="error">{errors.emailID}</span>}

        </div>
        <div className='boxinn'>
              <label htmlFor="fatherName">Father Name:</label>
             <input type="text" id="fatherName" name="fatherName" onChange={handleChange} value={formData.fatherName}/>
             {errors.fatherName && <span className="error">{errors.fatherName}</span>}

        </div>
        <div className='boxinn'>
            <label htmlFor="motherName">Mother Name:</label>
            <input type="text" id="motherName" name="motherName" onChange={handleChange} value={formData.motherName}/>
            {errors.motherName && <span className="error">{errors.motherName}</span>}

        </div>
      
      </div>
      <div className='boxin2'id='passport1' >
        <div  className='boxinn' >
          <div className='button1'>
           <label htmlFor="marital_status">Marital Status:</label>
          </div>
           <div className='button' id='twobutton'value={formData.marital_status}>
            <input type="radio" id="single" name="marital_status" value="single" onChange={handleChange} />
            <label htmlFor="single">Single</label>
            <input type="radio" id="married" name="marital_status" value="married" onChange={handleChange} />
            <label htmlFor="married">Married</label>
          </div>
          {errors.marital_status && <span className="error">{errors.marital_status}</span>}
        </div>
      
           <div className='boxinn'>
            <div className='button1'>
              <label htmlFor="residentialStatus">Residential Status:</label>
           </div>
           <div className='button' id='twobutton'>
            <input type="radio" id="residentialStatus" name="residentialStatus" value="Own" onChange={handleChange}/>
            <label htmlFor="Own">Own</label>
            <input type="radio" id="residentialStatus" name="residentialStatus" value="Rent" onChange={handleChange}/>
            <label htmlFor="Rent">Rent</label>
          </div>
        {errors.residentialStatus && <span className="error">{errors.residentialStatus}</span>}
       </div>
     </div>





      <label htmlFor="address" ref={address}>Address:</label>
      <input type="text" id="address" name="address" placeholder='Street address' onChange={handleChange} value={formData.address}/>
      {errors.address && <span className="error">{errors.address}</span>}

    <div className='boxin3' id='change1'>
      <div className='boxinn'>
      <label htmlFor="city" >city:</label>
      <input type="text" id="city" name="city" onChange={handleChange} value={formData.city}/>
      {errors.city && <span className="error">{errors.city}</span>}

      </div>
      <div className='boxinn'>
      <label htmlFor="state">State:</label>
      <input type="text" id="state" name="state" onChange={handleChange} value={formData.state}/>
      {errors.state && <span className="error">{errors.state}</span>}

      </div>
    </div>
      <div className='boxin3' id='change1'>
         <div className='boxinn' >
            <label htmlFor="pincode" >Pincode:</label>
            <input type="tel" id='pincode' name='pincode' value={formData.pincode} onChange={handleChange} />
            {errors.pincode && <span className="error">{errors.pincode}</span>}

         </div>
         <div className='boxinn'>
            <label htmlFor="landmark">Landmark:</label>
            <input type="text" id='landmark' name='landmark' onChange={handleChange} value={formData.landmark}/>
            {errors.landmark && <span className="error">{errors.landmark}</span>}

         </div>
      
    </div> 
    </div>
   









    <h2 className="fi" ref={last}>Financial Information</h2>
    <div className="box2">
      <div className='boxin1' id='change2'>
        <div className='boxinn'>
        <label htmlFor="companyName">Company Name:</label>
        <input type="text" id="companyName" name='companyName' onChange={handleChange} value={formData.companyName}/>
        {errors.companyName && <span className="error">{errors.companyName}</span>}

        </div>
        <div className='boxinn'>
        <label htmlFor="companyAddress">Company Address:</label>
        <input type="text" id="companyAddress" name='companyAddress' onChange={handleChange} value={formData.companyAddress}/>
        {errors.companyAddress && <span className="error">{errors.companyAddress}</span>}
        </div>

        <div className='boxinn'>
        <label htmlFor="credit_score">Credit Score:</label>
        <input type="number" id="credit_score" name='credit_score' onChange={handleChange} value={formData.credit_score}/>
        {errors.credit_score && <span className="error">{errors.credit_score}</span>}
        </div>
        
     
      </div>
      <div className='boxin1' id='change2'>
        <div className='boxinn' >
        <label htmlFor="income">Gross Monthly Income:</label>
        <input type="tel" id="grossIncomeMonthly" name="grossIncomeMonthly" placeholder='$'onChange={handleChange} value={formData.grossIncomeMonthly}/>
        {errors.grossIncomeMonthly && <span className="error">{errors.grossIncomeMonthly}</span>}

        </div>
        <div className='boxinn'>
        <label htmlFor="liabilities">Liabilities (if any):</label>
        <input type="text" id="liabilities" name="liabilities" onChange={handleChange} value={formData.liabilities}/>
        {errors.liabilities && <span className="error">{errors.liabilities}</span>}

        </div>

      </div>
      <div className='declaration' ref={end}>
      <h2>Declaration</h2>
      <p><i>I hereby apply for the RAL International Credit Cards declare that all the Information submitted by me with <br />this application are true and are deemed to be submitted by me to RAL bank. <a onClick={toggleModal}  className='buttonmodal' href="">Terms and Conditions</a></i></p>
      <div className='checkbox' ><input type="checkbox" id='checkbox' name='checkbox' onChange={handleChange} value={formData.checkbox}/><label htmlFor="">&nbsp;&nbsp;I have read carefully and understood the above terms and conditions</label></div>
      {errors.checkbox && <span className="error">{errors.checkbox}</span>}

      </div>
    </div>
    <div className='footer'>
    <button className='submit2' onClick={handleSubmit}>Submit</button>
    {/* <Button onClick={handleC}></Button> */}
    <div>
    <label htmlFor="sign">Sign:</label>
    <input type="text" id="sign"  name='sign' placeholder='full name' onChange={handleChange} value={formData.sign}/>
    <div> {errors.sign && <span className="error">{errors.sign}</span>}</div>
    
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



export default Application;