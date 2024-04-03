import React,{useState} from "react";
import Register from "./Register.js";

export default function Login(props) {
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const [open,setOpen] = useState(false); 
    const [error,setError] = useState({});



   const submitForm = (e) => {
        e.preventDefault();
        const newEntry = {email: email , password: pass}
        const errorentries = {};
        console.log("🚀 ~ file: login.js:21 ~ submitForm ~ newEntry:", newEntry);

        // console.log("🚀 ~ file: login.js:21 ~ submitForm ~ allentry:", allentry)
        if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){

            //  setError({...error,['email']:"Not Valid"});
            errorentries.email="not valid";
        }

        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(pass)){
          console.log("Not Valid password")
          // setError({...error,['pass']:"Minimum 8 characters,Uppercase,Lowercase,number,symbol"});
          errorentries.pass="Minimum 8 characters,Uppercase,Lowercase,number,symbol";
          
        }

        if(errorentries.email || errorentries.pass ){
          setError(errorentries);
        }
    }




  return (
    <>

   {!open && <div className="loginform">
       <form onSubmit={submitForm}>
        <div className="username">
          <h5>Sign in to your account</h5>
         <label htmlFor="email">Email</label>
         <input name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
         {error?.email}
         {/* {console.log("🚀 ~ file: login.js:53 ~ Login ~ error:", error)} */}
         
        </div>
        {/* <div className="username">
         <label htmlFor="username">Username</label>
         <input type="username" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </div> */}
        <div className="username">
         <label htmlFor="password">Password</label>
         <input name="password" type="password" placeholder="Password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
         {error?.pass}
          <div><a  className="fp" href="#">Forgot password ?</a></div>
        </div>
       <div className="submit">
        <button type="submit">Sign In</button> 
        {/* <a href="/a"><button type="button">Register</button></a> */}
        <button type="button" onClick={()=> setOpen(true)}>Register</button>
        </div>
      </form>
    </div>}

  


  {open && <Register/> }
 </>

  )
}
