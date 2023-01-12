import { Card, CardContent } from "@mui/material";
import React from "react";

interface propsData{
//structure of data we need for the card
title: string,
description:string,
link: string
}

const ProjectCard = (props:propsData) =>{

    return(
        <div>
            <Card variant="outlined">
                <CardContent>

                </CardContent>
            </Card>
        </div>
    )
}

export default ProjectCard;