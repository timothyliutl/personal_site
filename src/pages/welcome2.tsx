import React from "react";
import Intro from "../PageElements/Intro";
import MyAppBar from "../Components/Appbar";
import Projects from "../PageElements/Projects";
import About from "../PageElements/About";
import Skills from "../PageElements/Skills";

const Welcome2 = () =>{

    return(
        <div style={{minHeight:'100%'}}>
            <MyAppBar></MyAppBar>
            <Intro></Intro>
            <Projects></Projects>
            <Skills></Skills>
            <About></About>
        </div>
    )
}

export default Welcome2;