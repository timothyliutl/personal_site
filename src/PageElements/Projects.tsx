import { Typography } from "@mui/material";
import React from "react";

const Projects = () => {

    return (
        <div style={{ height: '100vh', background: "linear-gradient(180deg, rgba(2,62,138,1) 40%, rgba(37,182,212,1) 99%)" }}>
            <div style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto' }}>
                <Typography sx={{textDecoration:'underline'}} variant="h3" fontFamily={'Open Sans'} color={'#caf0f8'}>Projects</Typography>
            </div>
        </div>
    )
}

export default Projects;