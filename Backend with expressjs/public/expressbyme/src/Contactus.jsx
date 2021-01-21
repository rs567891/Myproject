import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import axios from "axios"
const Contactus = () => {
   let history= useHistory()
    const [data,setdata]= useState({

        name:"",
        email:"",
        message1:""
    });
    const Changehandler = (event) =>{
        const{name,value}=event.target 
        setdata((preval)=>{
            return{
              ...preval,
              [name]:value
            };
        


        })
        

    };
    const Submithandler = async (e) =>{
        e.preventDefault()
        var name=data.name
        var email=data.email
        var message1=data.message1
        const user={
            name:name,
            email:email,
            msg:message1
        };
        const res= await axios.post(`http://localhost:3001/contact`,{user})
        console.log(res.data)
        console.log(`${name} and ${email}`)
        history.push("/")



    };


    return (

        <div className="row3-flexbox">
            <div className="column3-flexbox">
                <div align="center">
                    <h2><b>Contact Us</b></h2>
                    <p>Get access to customizable webpage designs and useful tools to build your website and grow your ideal business. Easily build a free website to help you get discovered and grow your customer base in style. Start today with our powerful free website builder.
                   </p>
                </div>
            </div>



            <div className="column3-flexbox">
                <div className="pad2"><h2>Send Us Your Message</h2></div>
                    <div className="container">
                    
                    <form onSubmit={Submithandler}>
                        <label for="name" align="left">Name</label>
                        <input 
                        className="new" 
                        type="text" 
                        id="name" 
                        name="name"
                        onChange={Changehandler} 
                        value={data.name}
                        required />
                        <label for="email">Email</label>
                        <input 
                        className="new" 
                        type="email" 
                        id="email" 
                        name="email" 
                        onChange={Changehandler}
                        value={data.email}
                        required />



                        <label for="message1">Message</label>
                        
                        <input 
                        className="new" 
                        style={{padding:"10%"}}  
                        type="text" 
                        id="message1" 
                        name="message1"
                        onChange={Changehandler}
                        value={data.message1}
                        required />

                        <button type="submit" class="btn btn-primary ml-2">Submit & Send</button>

                    </form>
                
                </div>
            </div>
        </div>
    );
}
export default Contactus