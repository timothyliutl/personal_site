import { Accordion, AccordionDetails, AccordionSummary, Box, Card, Container, Grid, Typography } from '@mui/material';
import React from 'react';


interface props {
    refs?: any
}
const Education = (props: props) => {

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#023E8A', paddingBottom: '100px', marginTop: '0px', paddingTop: '100px' }}>
            <hr style={{ width: '30%', marginBottom: '100px' }}></hr>
            <Typography style={{ marginTop: '10px' }} textAlign={'center'} fontFamily={'Open Sans'} color={'white'} variant="subtitle1">My Academic Journey</Typography>
            <Typography textAlign={'center'} variant="h3" fontFamily={'Open Sans'} color={'#caf0f8'}>Education</Typography>
            <div style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: '70px' }}>
                <Accordion disableGutters={true} TransitionProps={{easing:{enter:"cubic-bezier(.17,.67,.83,.67)"}}} elevation={0} sx={{ backgroundColor: 'transparent' }}>
                    <AccordionSummary>
                        <Card style={{ width: '100%', padding: '15px' }}>
                            <Grid container>
                                <Grid item xs={8}>
                                    <Typography>Bachelor's of Applied Science</Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography>Queen's University</Typography>
                                </Grid>
                            </Grid>
                        </Card>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Card style={{ padding: '15px', minHeight: '100px' }}>
                            Hello World
                        </Card>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default Education;