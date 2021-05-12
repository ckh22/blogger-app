import React from 'react'
import {Link} from 'react-router-dom'
import {List} from 'semantic-ui-react'

const NavBar = () => {
    return (
        <nav style={
            {zIndex: '15'}
        }>
            <List horizontal>
                <List.Item>
                    <Link to='/'>Home</Link>
                </List.Item>
                <List.Item>
                    <Link to='/'>Home</Link>
                </List.Item>
                <List.Item>
                    <Link to='/'>Home</Link>
                </List.Item>
            </List>
        </nav>
    )
}

export default NavBar
