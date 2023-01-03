import React from "react";
import { Menu} from "semantic-ui-react";

function TabbedMenu(){
    const menuItems = [
        { key: 'cashAvailable', active: true, name: 'Cash Available' },
        { key: 'transactions', name: 'Transactions' },
        { key: 'coins', name: 'Coins' },
    ]
    return(
        <Menu items={menuItems}/>
    );
}

export default TabbedMenu;