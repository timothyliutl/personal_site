import { Accordion, AccordionSummary, Typography } from '@mui/material';
import React from 'react';


interface props{
    refs?: any
}
const Education = (props: props) =>{

    return(
        <div style={{ minHeight: '100vh', backgroundColor: '#023E8A', paddingBottom: '100px', marginTop: '0px', paddingTop: '100px' }}>
            <hr style={{width:'30%', marginBottom:'100px'}}></hr>
            <Typography style={{ marginTop: '10px' }} textAlign={'center'} fontFamily={'Open Sans'} color={'white'} variant="subtitle1">My Academic Journey</Typography>
            <Typography textAlign={'center'} variant="h3" fontFamily={'Open Sans'} color={'#caf0f8'}>Education</Typography>
            <div style={{width: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop:'70px'}}>
                <Accordion>
                    <AccordionSummary>
                        <Typography>Bachelor's of Applied Science</Typography>
                    </AccordionSummary>
                </Accordion>
            </div>
        </div>
    )
}

export default Education;