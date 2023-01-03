import React from "react";
import {Menu, Header, MenuItem, Button} from 'semantic-ui-react';

function AppMenu(){

    return(
        <Menu vertical>
            <MenuItem name="Menu">Menu</MenuItem>
            <MenuItem name="Home">
                Home
            </MenuItem>  
            <MenuItem name="Transactions">
                Transactions
            </MenuItem>
            <MenuItem name="Profile">
                Profile
            </MenuItem>
            <MenuItem name="Login/out">
                <Button>Login/out</Button>
            </MenuItem>
        </Menu>
    );
}

export default AppMenu;