import { Typography } from "@mui/material";
import React from "react";

const About = () =>{
    return(
        <div style={{minHeight:'100vh', backgroundColor:'#023E8A', paddingBottom:'100px', marginTop:'0px', paddingTop:'100px'}}>
           <hr style={{width:'30%', marginBottom:'100px'}}></hr>
            <Typography style={{ marginTop: '10px' }} textAlign={'center'} fontFamily={'Open Sans'} color={'white'} variant="subtitle1">Learn About Me</Typography>
            <Typography textAlign={'center'} variant="h3" fontFamily={'Open Sans'} color={'#caf0f8'}>About</Typography>
            <div style={{width:'70%', marginLeft:'auto', marginRight:'auto'}}>

            </div>

        </div>
    )
}

export default About;