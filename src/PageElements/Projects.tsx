import { Grid, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "../Components/ProjectCard";

const Projects = () => {

    interface projectData {
        name: string,
        description: string,
        image?: string,
        github?: string,
        liveDemo?: string
    }

    const projects: Array<projectData> = [{
        name: 'Manim Animations',
        description: 'Custom animations made for my Calculus TA sessions',
        image: 'https://i.ytimg.com/vi/I0MwXnKSIAM/maxresdefault.jpg',
        github:'https://github.com/timothyliutl/math-animations',
        liveDemo:''
    },{
        name: 'Capstone Project',
        description: 'Image Compression System used to send images through a noisy channel',
        image: 'https://github.com/timothyliutl/MTHE-493/blob/main/quantizer_code/images/image_city_24b_e005.png?raw=true',
        github:'https://github.com/timothyliutl/MTHE-493',
        liveDemo:''
    },
    {
        name: 'Personal Website',
        description: 'What you are looking at right now!',
        image: './website.png',
        github:'https://github.com/timothyliutl/personal_site',
        liveDemo:'https://www.timothyliu.dev/'
    },
    {
        name: 'Spotify Visualizations',
        description: 'Visualizations of my Spotify Listening History',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png',
        github:'https://github.com/timothyliutl/personal_site',
        liveDemo:'https://www.timothyliu.dev/spotiwhy'
    }]

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#023E8A', paddingBottom:'100px' }}>
            <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', paddingTop: '200px' }}>
                <Typography style={{ marginTop: '10px' }} textAlign={'center'} fontFamily={'Open Sans'} color={'white'} variant="subtitle1">My Recent Work</Typography>
                <Typography textAlign={'center'} variant="h3" fontFamily={'Open Sans'} color={'#caf0f8'}>Projects</Typography>
                <Grid style={{marginTop:'50px'}} container spacing={3}>
                    {
                        projects.map((data) => {
                            return (
                                <Grid xs={4} item>
                                    <ProjectCard title={data.name} description={data.description} image={data.image} liveDemo={data.liveDemo} github={data.github}></ProjectCard>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
        </div>
    )
}

export default Projects;