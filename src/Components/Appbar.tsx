import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom';


const MyAppBar = () =>{

    return(
        <AppBar position='static' component={'nav'} style={{zIndex:100}}>
                <Toolbar>
                    <Typography variant='h4' sx={{ my: 2 }}>
                        Timothy Liu
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>

                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container justifyContent={'flex-end'}>
                            <Link to={'/'} style={{textDecoration:'none'}}>
                            <Button sx={{ my: 2, color: 'white' }}>
                                Home
                            </Button>
                            </Link>
                            <Link to={'/projects'} style={{textDecoration:'none'}}>
                            <Button sx={{ my: 2, color: 'white' }}>
                                Projects
                            </Button>
                            </Link>
                            <Link to={'/spotiwhy'} style={{textDecoration:'none'}}>
                            <Button sx={{ my: 2, color: 'white' }}>
                                Spotify
                            </Button>
                            </Link>
                        </Grid>
                    </Box>

                </Toolbar>
            </AppBar>
    )
}
export default MyAppBar;