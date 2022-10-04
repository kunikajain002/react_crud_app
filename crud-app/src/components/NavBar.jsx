
import { AppBar, Toolbar, Typography, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: #111111;
`
const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 20px;
    color: inherit;
    text-decoration: none;
`
//<Tabs to="/">CRUD App</Tabs>
const NavBar = () => {
    return (
        <Header position="static">
            <Toolbar>
                <Tabs to="/">All User</Tabs>
                <Tabs to="/add">Add User</Tabs>
            </Toolbar>
        </Header>
    );
}

export default NavBar;