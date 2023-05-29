import React from "react";
import Intro from "../PageElements/Intro";
import MyAppBar from "../Components/Appbar";

const Welcome2 = () =>{

    return(
        <div style={{minHeight:'100%'}}>
            <MyAppBar></MyAppBar>
            <Intro></Intro>
        </div>
    )
}

export default Welcome2;