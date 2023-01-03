import { AppBar, Box, Button, Card, CardContent, Container, Divider, Grid, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';


import React from 'react'



const Welcome = () => {

    return (
        <div style={{ justifyContent: 'center', width: '100%' }}>
            <AppBar position='static' component={'nav'}>
                <Toolbar>
                    <Typography variant='h4' sx={{ my: 2 }}>
                        Timothy Liu
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>

                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container justifyContent={'flex-end'}>
                            <Button sx={{ my: 2, color: 'white' }}>
                                Home
                            </Button>
                            <Button sx={{ my: 2, color: 'white' }}>
                                Projects
                            </Button>
                            <Button sx={{ my: 2, color: 'white' }}>
                                Contact
                            </Button>
                        </Grid>
                    </Box>

                </Toolbar>
            </AppBar>
            <div style={{ marginTop: '70px' }}>
                <Container>
                    <Typography variant='h2' textAlign={'center'}> Hello I'm Timothy Liu </Typography>
                    <Typography variant='h5' textAlign={'center'}> A Fourth Year Mathematics and Engineering Student</Typography>

                    <div style={{marginTop: '200px'}}>
                    
                    </div>
                    <Typography variant='h4'>Quick Links</Typography>
                    <Grid container direction={'row'} justifyContent='space-evenly'>
                        <Card sx={{minWidth:'275px'}}>
                            <CardContent>
                                Hello world
                            </CardContent>
                        </Card>
                        <Card sx={{minWidth:'275px'}}>
                            <CardContent>
                                Hello world
                            </CardContent>
                        </Card>
                        <Card sx={{minWidth:'275px'}}>
                            <CardContent>
                                Hello world
                            </CardContent>
                        </Card>
                    </Grid>
                </Container>
            </div>

        </div>
    )
}

export default Welcome;