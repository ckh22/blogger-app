// import db from '../Database/db.js'
import './App.scss'
import {useFaker} from 'react-fakers'
import {
    Button,
    Container,
    Form,
    Grid,
    Header,
    Ref,
    Segment,
    Sticky
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import {useState, createRef} from 'react';

function App() {
    const {success, error, loading} = useFaker()
    const contextRef = createRef()
    const [show, setShow] = useState(false)
    if (error) {
        alert(error.message)
    }

    function handleClick() {
        setShow(!show)
    }

    return (
        <Grid centered
            columns={3}>
            <Grid.Column>
                Content
            </Grid.Column>
            <Grid.Column style={{marginTop: '3em'}}> {
                show ? <Form onSubmit={() => handleClick()}><Header content='Add a new project!'/><Form.Input label='Project Name'/><Form.TextArea label='Description'/><Button.Group><Button content='Cancel'/><Button type='submit' content='Submit' positive/></Button.Group>
                </Form> : null
            }
                 {
                    loading && success.map((val, id) => (
                        <Segment style={{paddingBottom: '3em'}}>
                            <Container>
                                <Header content={
                                    val.firstname + " " + val.lastname
                                }/>
                            </Container>
                            <Button floated='right' content='View More'/>
                        </Segment>
                    ))
                } 
            </Grid.Column>
            <Ref innerRef={contextRef}>
                <Grid.Column>
                    <Sticky context={contextRef}>
                        <Button content={show ? 'Cancel': 'Add Project'} style={{marginTop: '3em'}}
                            onClick={
                                () => handleClick()
                            }
                            color={show ? null: 'green'}
                            />
                    </Sticky>
                </Grid.Column>
            </Ref>
        </Grid>
    )
}

export default App;
