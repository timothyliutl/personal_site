import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import MyAppBar from "../Components/Appbar";
import { loadFull } from "tsparticles";
import { Avatar, Box, Button, Grid, Icon, SvgIcon, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';


const Intro = () => {
    const theme = createTheme({
        typography: {
            fontFamily: [
                'Josefin Sans',
                'sans-serif',
            ].join(','),
        },
    });

    const particlesInit = useCallback(async (engine: any) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: any) => {
        await console.log(container);
    }, []);

    return (
        <div>
            <Particles
                height="100vh"
                width="100%"
                style={{ position: 'absolute' }}
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: {
                        "enable": false,
                        "zIndex": -1
                    },
                    background: {
                        color: {
                            value: "023E8A",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "48CAE4",
                        },
                        links: {
                            color: "48CAE4",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: false,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 4,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div id="intro-content" style={{ zIndex: 1, position: 'relative', width: '70%', marginLeft: 'auto', marginRight: 'auto', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
                <ThemeProvider theme={theme}>
                    <div
                        style={{
                            position: "relative",
                            top: "50%",
                            transform: 'translate(0px,-50px)'
                        }}
                    >
                        <Typography color={'#caf0f8'} variant="h3" textAlign={'left'} fontFamily={'Open Sans'}>Hi, I'm Timothy Liu</Typography>

                        <Box sx={{ display: { xs: 'none', md: 'block' }}}>
                            <Typography color={'#caf0f8'} variant="h4" fontFamily={'Open Sans'}>A Recent Mathematics and Engineering Graduate</Typography>
                        </Box>
                        <hr style={{ marginTop: '20px', marginBottom: '20px' }}></hr>
                        <Grid container spacing={3}>
                            <Grid item>
                                <Button startIcon={<InsertDriveFileIcon></InsertDriveFileIcon>} style={{ color: '#90e0ef', borderColor: '#90e0ef' }} variant="outlined">Resume</Button>
                            </Grid>
                            <Grid item>
                                <Button startIcon={<GitHubIcon></GitHubIcon>} style={{ color: '#90e0ef', borderColor: '#90e0ef' }} variant="outlined">GitHub</Button>
                            </Grid>
                            <Grid item>
                                <Button startIcon={<LinkedInIcon></LinkedInIcon>} style={{ color: '#90e0ef', borderColor: '#90e0ef' }} variant="outlined">LinkedIn</Button>
                            </Grid>
                            <Grid item>
                                <Button startIcon={<Icon sx={{width:'23px', height:'23px', color:'blue'}}><img style={{width:'23px', height:'23px'}} src="./riot-games.svg"></img></Icon>} style={{ color: '#90e0ef', borderColor: '#90e0ef' }} variant="outlined">Riot Games</Button>
                            </Grid>
                        </Grid>
                    </div>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Intro;