import React from "react";
import { Header, Icon } from "semantic-ui-react";

function AppHeader(){
    return(
        <Header as= 'h1' textAlign='center' size="large" style={{color: 'whitesmoke'}}> <span style={{color: 'whitesmoke'}}> <Icon circular size="small" color="white" name="linkify" /></span> Mockchain </Header>
    );
}

export default AppHeader;