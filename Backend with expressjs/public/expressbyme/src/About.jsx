import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
       
const About = () => {
    
   let history = useHistory();
   const [data,setdata] = useState({
       fullname:"",
       msg:""

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

   const Submithandler = async () => {
    var name=data.fullname
    var msg=data.msg
    const user = {
     name:name,

     msg:msg
    };

    const res = await axios.post(`http://localhost:3001/about`, { user })
    
      
    console.log(res.data);


    console.log(`${name} and ${msg}`)
   

       
    history.push("/")        
   };
   return(
    <>
       <h1>About page</h1>
           <form>
              <input type="text" name="fullname" value={data.fullname} onChange={Changehandler} />
              <input type="text" name="msg" value={data.msg} onChange={Changehandler} />
              <button type="button" onClick={Submithandler} />
           </form>
            

    </>
   );
}
export default About;