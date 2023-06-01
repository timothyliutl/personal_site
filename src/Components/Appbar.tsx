import { AppBar, Box, Button, Grid, Slide, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom';
import useScrollTrigger from '@mui/material/useScrollTrigger';

interface Props{
    window?: () => Window;
    children: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
    return (
        <Slide appear={false} direction="down" in={!trigger}>
          {children}
        </Slide>
      );
    }

    interface onClickProps{
        skillOnClick?: React.MouseEventHandler,
        projectOnClick?: React.MouseEventHandler
    }


const MyAppBar = (props:onClickProps) =>{

    return(
        <HideOnScroll>
        <AppBar position='fixed' component={'nav'} style={{zIndex:100}}>
                <Toolbar>
                    <Typography variant='h4' sx={{ my: 2 }}>
                        
                    </Typography>
                    <Box sx={{ flexGrow: 1 }}>

                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container justifyContent={'flex-end'}>
                            <Link to={'/'} style={{textDecoration:'none'}}>
                            <Button onClick={props.skillOnClick} sx={{ my: 2, color: 'white' }}>
                                Projects
                            </Button>
                            </Link>
                            <Link to={'/'} style={{textDecoration:'none'}}>
                            <Button onClick={props.projectOnClick} sx={{ my: 2, color: 'white' }}>
                                Experience
                            </Button>
                            </Link>
                        </Grid>
                    </Box>

                </Toolbar>
            </AppBar>
            </HideOnScroll>
    )
}
export default MyAppBar;