import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"

export default function Register(props) {

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/s');
    // console.log(email);
}

  const [fullname,setFullname] = useState('');
  const [pass,setPass]=useState('');
  // const [name,setName]=useState('');
  const navigate = useNavigate()



  return (
    <div className='register'>
      <form onSubmit={handleSubmit}>
         {/* <label htmlFor="email">Email</label>
         <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/> */}
         <h5>Create Your Account</h5>
        <div className='username'>
         <label htmlFor="name" >Full Name</label>
         <input type="name" placeholder="Full name" value={fullname} onChange={(e)=>setFullname(e.target.value)}/>
         </div>

         <div className='username'>
         <label htmlFor="password">Create Password</label>
         <input type="password" placeholder="Create password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
         </div>

         <div className='username'>
         <label htmlFor="password">Re-enter Password</label>
         <input type="password" placeholder="Password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
         </div>

         <div className='submit'><button type="submit">Register</button></div>
         <a href="/a"><button className='already' type='button'>Already have an account? Login here</button></a>

       </form>
    </div>
  )
}
