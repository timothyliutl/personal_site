import React from "react";
import Intro from "../PageElements/Intro";
import MyAppBar from "../Components/Appbar";
import Projects from "../PageElements/Projects";

const Welcome2 = () =>{

    return(
        <div style={{minHeight:'100%'}}>
            <MyAppBar></MyAppBar>
            <Intro></Intro>
            <Projects></Projects>
        </div>
    )
}

export default Welcome2;