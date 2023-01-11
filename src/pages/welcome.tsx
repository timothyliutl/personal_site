import { AppBar, Box, Button, Card, CardContent, Container, Divider, Grid, Icon, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';


import React from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import MyAppBar from '../Components/Appbar';



const Welcome = () => {

    return (
        <div style={{ justifyContent: 'center', width: '100%' }}>
            <MyAppBar></MyAppBar>
            <div style={{ marginTop: '70px' }}>
                <Container style={{ width: '70%' }}>
                    <Typography variant='h2' textAlign={'center'}> Hello I'm Timothy Liu </Typography>
                    <Typography variant='h5' textAlign={'center'}> A Fourth Year Mathematics and Engineering Student</Typography>

                    <div style={{ marginTop: '75px' }}>

                    </div>
                    <Grid container direction={'row'} justifyContent='space-evenly' style={{ marginTop: '30px' }}>
                        <a href={''} style={{ textDecoration: 'none' }}>
                            <Card sx={{ minWidth: '220px', paddingTop: '10px' }}>
                                <CardContent>
                                    <Grid container justifyContent={'space-between'}>
                                        <Grid item>
                                            <ArticleIcon color='primary' fontSize='large'></ArticleIcon>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='h6' textAlign={'center'}>
                                                Resume
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </a>
                        <a href='https://github.com/timothyliutl' target={'_blank'} style={{ textDecoration: 'none' }}>
                            <Card sx={{ minWidth: '220px', paddingTop: '10px' }}>
                                <CardContent>
                                    <Grid container justifyContent={'space-between'}>
                                        <Grid item>
                                            <GitHubIcon color='primary' fontSize='large'></GitHubIcon>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='h6'>
                                                GitHub
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </a>
                        <a href='https://www.linkedin.com/in/timothy-liu-4a738619b/' target={'_blank'} style={{textDecoration:'none'}}>
                            <Card sx={{ minWidth: '220px', paddingTop: '10px' }}>
                                <CardContent>
                                    <Grid container justifyContent={'space-between'}>
                                        <Grid item>
                                            <LinkedInIcon color='primary' fontSize='large'></LinkedInIcon>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='h6'>
                                                LinkedIn
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </a>
                    </Grid>
                </Container>
            </div>

        </div>
    )
}

export default Welcome;