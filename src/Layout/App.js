// import db from '../Database/db.js'
import './App.scss'
import 'semantic-ui-css/semantic.min.css';
import Homepage from './Pages/Homepage';
import {Route} from 'react-router-dom'
import NavBar from './Components/NavBar'

function App() {
    return (
        <>
            <Route path='/'
                component={NavBar}/>
            <Route exact path='/'
                component={Homepage}/>
        </>
    )
}

export default App;
