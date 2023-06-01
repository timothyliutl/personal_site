import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

interface propsData {
    //structure of data we need for the card
    title: string,
    description: string,
    image?: string,
    github?: string,
    liveDemo?: string,
    customButton?: Array<customButton>
}

interface customButton{
    text: string,
    url: string
}

interface actionProps {
    text?: string,
    link?: string
}

const ActionButton = (props: actionProps) => {
    if (props.text && props.link) {
        return (
            <Button target="_blank" size="small" href={props.link}>{props.text}</Button>
        )
    } else {
        return (<div></div>)
    }
}

const ProjectCard = (props: propsData) => {

    return (

        <Card variant="outlined" sx={{ width: '345px', height:'100%', display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
            <CardMedia image={props.image} sx={{ height: '140px' }}></CardMedia>
            <CardContent>
                <Typography variant="h5">{props.title}</Typography>
                <Typography variant="body2">{props.description}</Typography>
            </CardContent>
            <CardActions>
                <ActionButton link={props.liveDemo} text="Live Demo"></ActionButton>
                <ActionButton link={props.github} text="GitHub"></ActionButton>
                {props.customButton?.map((data)=>{
                    return(
                        <ActionButton link={data.url} text={data.text}></ActionButton>
                    )
                })}
            </CardActions>
        </Card>

    )
}

export default ProjectCard;