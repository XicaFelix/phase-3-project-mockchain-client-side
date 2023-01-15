import React from "react";
import { Menu, MenuItem} from "semantic-ui-react";
import { Link } from "react-router-dom";

function TabbedMenu(){
    // const menuItems = [
    //     { key: 'cashAvailable', active: true, name: 'Cash Available' },
    //     { key: 'transactions', name: 'Transactions' },
    //     { key: 'coins', name: 'Coins' },
    // ]
    return(
        // <Menu items={menuItems}/>

        <Menu inverted color="black">
            <Link to={'/profile/cashavailable'}>
            <MenuItem name="cashAvailable">Cash Available</MenuItem>
            </Link>
            <Link to={'/profile/transactions'}>
            <MenuItem name="transactions">Transactions</MenuItem>
            </Link>
            <Link to={'/profile/coins'}>
            <MenuItem name="coins">Coins</MenuItem>
            </Link>
        </Menu>
    );
}

export default TabbedMenu;