import React from "react";
import { Route } from "react-router-dom";
import Home from "./component/home";
import ViewCard from "./component/ViewCard";
import AboutUs from "./component/AboutUs";
const Routes =()=>{
    return <div>
        
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/ViewCard" component={ViewCard}></Route>
        <Route exact path="/AboutUs" component={AboutUs}></Route>
    </div>
}
export default Routes;