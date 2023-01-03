import React from "react";
import { Link } from "react-router-dom";
import {Menu, Header, MenuItem, Button} from 'semantic-ui-react';

function AppMenu(){

    return(
        <Menu vertical>
            <MenuItem name="Menu">Menu</MenuItem>

            <Link to={'/home'}>
                <MenuItem name="Home">
                    Home
                </MenuItem> 
            </Link> 

            <Link to={'/profile/transactions'}>
                <MenuItem name="Transactions">
                    User Transactions
                </MenuItem>
                </Link>

                <Link to={'/profile'}>
                    <MenuItem name="Profile">
                        Profile
                    </MenuItem>
                </Link>

                <Link to={'/'}>
                    <MenuItem name="Login/out">
                        <Button>Login/out</Button>
                    </MenuItem>
                </Link>

        </Menu>
    );
}

export default AppMenu;