import React from 'react'
import {Button, Grid, Ref, Sticky} from 'semantic-ui-react'
import {createRef} from 'react';
import ProjectForm from '../Components/ProjectForm';
import {useSelector} from 'react-redux';
import Project from '../Components/Project';

const Homepage = () => {
    const {projects} = useSelector((state) => state.projectReducer)
    console.log(projects)
    const contextRef = createRef()
    return (<Grid centered
        columns={3}>
        <Grid.Column></Grid.Column>
        <Grid.Column style={
            {marginTop: '3em'}
        }>
            <ProjectForm/> {
            projects.map(project => (<Project key={
                    project.id
                }
                project={project}/>))
        } </Grid.Column>
        <Ref innerRef={contextRef}>
            <Grid.Column>
                <Sticky context={contextRef}>
                    <Button content='Create Project' primary style={
                        {marginTop: '3em'}
                    }/>
                </Sticky>
            </Grid.Column>
        </Ref>
    </Grid>)
}

export default Homepage
