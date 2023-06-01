import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import MyAppBar from "../Components/Appbar";
import { loadFull } from "tsparticles";
import { Box, Button, Grid, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material';


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
                                <Button style={{ color: '#90e0ef', borderColor: '#90e0ef' }} variant="outlined">Projects</Button>
                            </Grid>
                            <Grid item>
                                <Button style={{ color: '#90e0ef', borderColor: '#90e0ef' }} variant="outlined">About</Button>
                            </Grid>
                            <Grid item>
                                <Button style={{ color: '#90e0ef', borderColor: '#90e0ef' }} variant="outlined">Skills</Button>
                            </Grid>
                            <Grid item>
                                <Button style={{ color: '#90e0ef', borderColor: '#90e0ef' }} variant="outlined">Contact Me</Button>
                            </Grid>
                        </Grid>
                    </div>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Intro;