import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Popper from 'popper.js';
import $ from 'jquery';

import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Main from "./Main";
import Login from "./Login";
import Signup from "./Signup";
import Front from "./Front"
import Blog from "./Blog"
import Contactus from "./Contactus"
const Home = () => {
 return (
     <>
     <Main />
     

     <Switch>
     <Route exact path="/" component={Front} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contactus" component={Contactus} />
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup }/>
 
         
     </Switch>
     </>
     

 );


}
export default Home;