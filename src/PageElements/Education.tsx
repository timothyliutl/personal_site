import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, Chip, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import Fade from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import BookIcon from '@mui/icons-material/Book';


interface props {
    refs?: any
}
const Education = (props: props) => {

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#023E8A', paddingBottom: '100px', marginTop: '0px', paddingTop: '100px', display: '' }}>
            <hr style={{ width: '30%', marginBottom: '100px' }}></hr>
            <Typography style={{ marginTop: '10px' }} textAlign={'center'} fontFamily={'Open Sans'} color={'white'} variant="subtitle1">My Academic Journey</Typography>
            <Typography textAlign={'center'} variant="h3" fontFamily={'Open Sans'} color={'#caf0f8'}>Education</Typography>
            <div style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: '70px' }}>
                <Grid width={'100%'} container={true} spacing={1} justifyContent={'space-around'}>
                    <Grid item md={5} sm={8}>
                    <Card sx={{ maxWidth: 445 }}>
                            <CardContent>
                                <Typography gutterBottom={false} color={'#023e8a'} variant='h5'>Bachelor's of Applied Science</Typography>
                                <Typography gutterBottom={true} color={'#023e8a'} variant='subtitle1'>Mathematics and Engineering</Typography>
                                <hr style={{width:'60%'}}></hr>
                                <Grid container spacing={1} justifyContent={'space-between'}>
                                    <Grid item xl={5.5} sm={12}>
                                        <Chip icon={<SchoolIcon></SchoolIcon>} color='primary' variant='outlined' label="Queen's University"></Chip>
                                    </Grid>
                                    <Grid item xl={6.5} sm={12}>
                                        <Chip icon={<CalendarMonthIcon></CalendarMonthIcon>} color='primary' variant='outlined' label="Sept 2019 - April 2023"></Chip>
                                    </Grid>
                                    <Grid item xl={6} sm={12}>
                                        <Chip icon={<PlaceIcon></PlaceIcon>} color='primary' variant='outlined' label='Kingston, ON'></Chip>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item sm={8} md={5}>
                        <Card sx={{ maxWidth: 445 }}>
                            <CardContent>
                                <Typography gutterBottom={false} color={'#023e8a'} variant='h5'>Master's of Applied Science</Typography>
                                <Typography gutterBottom={true} color={'#023e8a'} variant='subtitle1'>Engineering Mathematics</Typography>
                                <hr style={{width:'60%'}}></hr>
                                <Grid container spacing={1} justifyContent={'space-between'}>
                                    <Grid item xl={6} sm={12}>
                                        <Chip icon={<SchoolIcon></SchoolIcon>} color='primary' variant='outlined' label="Queen's University"></Chip>
                                    </Grid>
                                    <Grid item xl={6} sm={12}>
                                        <Chip icon={<CalendarMonthIcon></CalendarMonthIcon>} color='primary' variant='outlined' label="Sept 2023 - Present"></Chip>
                                    </Grid>
                                    <Grid item xl={6} sm={12}>
                                        <Chip icon={<PlaceIcon></PlaceIcon>} color='primary' variant='outlined' label='Kingston, ON'></Chip>
                                    </Grid>
                                    <Grid item xl={6} sm={12}>
                                        <Chip icon={<BookIcon></BookIcon>} color='primary' variant='outlined' label='Research Based'></Chip>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}

export default Education;