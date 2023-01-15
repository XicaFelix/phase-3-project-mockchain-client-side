import React from "react";
import { Header, Icon } from "semantic-ui-react";

function AppHeader(){
    return(
        <Header as= 'h1' textAlign='center' size="large" inverted> <span> <Icon circular size="small" color="white" inverted name="linkify" /></span> Mockchain </Header>
    );
}

export default AppHeader;