import { Avatar, Typography } from "@mui/material";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import engsocImg from "../images/engsoc.png"
//actually lets make this experience
interface props{
    refs?: any
}

const Skills = (props:props) => {

    interface timelineElement {
        title: string,
        subtitle: string,
        date: string,
        icon: React.ReactElement,
        description?: string,

    }

    const timelineData: Array<timelineElement> = [
        {
            title: 'Credit Risk Analyst Intern, RBC',
            subtitle: 'Toronto, ON',
            date: 'May 2022 - August 2022',
            icon: <Avatar src="https://1000logos.net/wp-content/uploads/2018/10/RBC-Logo.png" sx={{width:'100%', height:'100%'}}></Avatar>,
            description: `Computed Limit Factor estimations for RBC’s Exposure at Default parameter estimation model.`
        },
        {
            title: 'Teaching Assistant, Queen\'s University',
            subtitle: 'Kingston, ON',
            date: 'September 2021 - April 2023',
            icon: <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCz3t_fC2cxIJXMKJvOEYkG4KGzIdhDtJDY7zooYJwyQ&s" sx={{width:'100%', height:'100%'}}></Avatar>,
            description: `Prepared lessons in first year Calculus I, Calculus II, and Linear Algebra courses.`
        },
        {
            title: 'Web Developer, Queen\'s University',
            subtitle: 'Kingston, ON',
            date: 'May 2021 - August 2021',
            icon: <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCz3t_fC2cxIJXMKJvOEYkG4KGzIdhDtJDY7zooYJwyQ&s" sx={{width:'100%', height:'100%'}}></Avatar>,
            description: `Used PHP and React to develop Physics Under Graduate Laboratory inventory website.`
        },
        {
            title: 'Project Lead, Engineering Society at Queen\'s',
            subtitle: 'Kingston, ON',
            date: 'March 2020 - December 2020',
            icon: <Avatar src={engsocImg} sx={{width:'100%', height:'100%'}}></Avatar>,
            description: `Lead a team of 3 students to create event hosting Flutter Application.`
        },

    ]
    return (
        <div ref={props.refs} style={{ minHeight: '100vh', backgroundColor: '#023E8A', paddingBottom: '100px', marginTop: '0px', paddingTop: '100px' }}>
            <hr style={{width:'30%', marginBottom:'100px'}}></hr>
            <Typography style={{ marginTop: '10px' }} textAlign={'center'} fontFamily={'Open Sans'} color={'white'} variant="subtitle1">My Past Positions</Typography>
            <Typography textAlign={'center'} variant="h3" fontFamily={'Open Sans'} color={'#caf0f8'}>Experiences</Typography>
            <div style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto'}}>
               
                <div style={{marginTop:'30px'}}></div>
                <VerticalTimeline>
                    {timelineData.map((data) => {
                        return (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                date={data.date}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={data.icon}
                            >
                                <h3 className="vertical-timeline-element-title">{data.title}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{data.subtitle}</h4>
                                <p>
                                    {data.description}
                                </p>
                            </VerticalTimelineElement>
                        )
                    })}
                </VerticalTimeline>

            </div>

        </div>
    )
}

export default Skills;