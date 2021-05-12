import React from 'react'
import { Button, Container, Header, Segment } from 'semantic-ui-react'

const Project = ({project}) => {
    return (
        <Segment style={
            {paddingBottom: '3em'}
        }>
            <Container>
                <Header content={
                    project.title
                }/>
                <p>
                    {project.description}
                </p>
            </Container>
            <Button floated='right' content='View More'/>
        </Segment>
    )
}

export default Project
