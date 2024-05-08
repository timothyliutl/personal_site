import { Grid, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "../Components/ProjectCard";

interface props{
    refs?: any
}

const Projects = (props:props) => {
    interface customButton{
        text: string,
        url: string
    }

    interface projectData {
        name: string,
        description: string,
        image?: string,
        github?: string,
        liveDemo?: string,
        customButton?: Array<customButton>
    }

    const projects: Array<projectData> = [{
        name: 'Manim Animations',
        description: 'Custom animations made for my Calculus TA sessions.',
        image: 'https://i.ytimg.com/vi/I0MwXnKSIAM/maxresdefault.jpg',
        github:'https://github.com/timothyliutl/math-animations',
        liveDemo:''
    },{
        name: 'Capstone Project',
        description: 'Final 4th year project. Image Compression System used to send images through a noisy channel.',
        image: './compressed_image.png',
        github:'https://github.com/timothyliutl/MTHE-493',
        liveDemo:'',
        customButton:[{
            text:'Thesis',
            url:'https://github.com/timothyliutl/MTHE-493/blob/main/Capstone.pdf'
        }]
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
    },
    {
        name: 'Valorant E-Sports Predictions',
        description: 'Using Machine Learning to predict the outcome of professional Valorant matches',
        image: 'https://cdn.mos.cms.futurecdn.net/mJVvYfj86AtHd3f4uZBEcX-1200-80.jpg',
        github:'https://github.com/timothyliutl/ValorantData',
        liveDemo:''
    },
    ]
    

    return (
        <div ref={props.refs} style={{ minHeight: '100vh', backgroundColor: '#023E8A', paddingBottom:'100px', marginBottom:'0px' }}>
            <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', paddingTop: '100px' }}>
                <hr style={{width:'40%', marginBottom:'100px'}}></hr>
                
                <Typography style={{ marginTop: '10px' }} textAlign={'center'} fontFamily={'Open Sans'} color={'white'} variant="subtitle1">My Recent Work</Typography>
                <Typography textAlign={'center'} variant="h3" fontFamily={'Open Sans'} color={'#caf0f8'}>Projects</Typography>
                <Grid style={{marginTop:'50px'}} container spacing={3} justifyContent={'center'}>
                    {
                        projects.map((data) => {
                            return (
                                <Grid sm={6} md={4} item justifyContent={'center'}>
                                    <ProjectCard title={data.name} description={data.description} image={data.image} liveDemo={data.liveDemo} github={data.github} customButton={data.customButton}></ProjectCard>
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