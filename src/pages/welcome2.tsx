import React, { MutableRefObject } from "react";
import Intro from "../PageElements/Intro";
import MyAppBar from "../Components/Appbar";
import Projects from "../PageElements/Projects";
import About from "../PageElements/About";
import Skills from "../PageElements/Skills";
import Education from "../PageElements/Education";
import {useRef} from 'react';


const Welcome2 = () =>{
    const myRefProject = useRef<HTMLDivElement>();
    const myRefSkills = useRef<HTMLDivElement>()
    const executeScrollProject = () => {
        if (myRefProject.current !== null){
            myRefProject.current?.scrollIntoView({ block: 'start',  behavior: 'smooth' })
            console.log('hello world')
        }
    }

    const executeScrollSkills = () =>{
        if (myRefSkills!==null){
            myRefSkills.current?.scrollIntoView({ block: 'start',  behavior: 'smooth' })
        }
    }


    return(
        <div style={{minHeight:'100%'}}>
            <MyAppBar skillOnClick={executeScrollSkills} projectOnClick={executeScrollProject}></MyAppBar>
            <Intro></Intro>
            <Projects refs={myRefProject}></Projects>
            <Skills refs={myRefSkills}></Skills>
            <Education></Education>
        </div>
    )
}

export default Welcome2;