import React, {useState} from 'react';
import { useHistory , Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  let history = useHistory();
   const [data,setdata] = useState({
       email:"",
       fullname:"",
       phone:"",

       pswd:""

   });
   
   const Changehandler = (event) => {
      const{name,value} = event.target;
      setdata((preVal) => {
        return {
           ...preVal,
           [name]: value,
        };
      });
   };

   const Submithandler = async (e) => {
    e.preventDefault()
    var name=data.email
    var txt=data.fullname
    var phoneno=data.phone
    var msg=data.pswd
    const user = {
     email:name,
     name:txt,
     phone:phoneno,

     pswd:msg
    };

    const res = await axios.post(`http://localhost:3001/signup`, { user })
    
      
    console.log(res.data);


    console.log(`${name} and ${msg}`)
   

       
    history.push("/")        
   };

  return (


    <>
      <div align="center">

      <div className="topnav1">
       
  
        <Link to="/login">Login</Link>
        
        <a className="v1"></a>
        <a className="active" href="#">Sign Up</a>
     </div>
        

      </div>
      <div className="container1">
        <form onSubmit={Submithandler }>




          <label for="email">Email</label>
          <input 
          className="new" 
          type="email" 
          id="email" 
          name="email"
          value={data.email} 
          onChange={Changehandler} required />
           
          <label for="txt">Name</label>
          <input 
          className="new" 
          type="text" 
          id="txt" 
          name="fullname"
          value={data.fullname} 
          onChange={Changehandler} required />

          <label for="phone">Phone No.</label>
          <input 
          className="new" 
          type="text" 
          id="phone" 
          name="phone"
          value={data.phone} 
          onChange={Changehandler} required />



          <label for="pswd">Password</label>
          <input 
          className="new" 
          type="password" 
          id="pswd" 
          name="pswd" 
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
          value={data.pswd}
          onChange={Changehandler} required />


          <button type="submit" className="btn btn-primary">Sign Up</button>

        </form>
      </div>

      <div id="message">
        <h3>Password must contain the following:</h3>
        <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
        <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
        <p id="number" class="invalid">A <b>number</b></p>
        <p id="length" class="invalid">Minimum <b>8 characters</b></p>
      </div>
      <div align="center">
        <h5> <a href="">Log in with Email</a> </h5>
        <h4>OR</h4>
        <h5> <a href="">Forgot Password</a> </h5>

      </div>
    </>

  );

};
export default Signup