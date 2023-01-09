import React from "react";
import {Grid, Image} from 'semantic-ui-react'

import LoginForm from "./LoginForm";

function LoginPage({appData, currentUser, setCurrentUser}){

    return(
        <Grid padded = 'vertically'>
            <Grid.Column width={8}>
                <Image  src= 'https://randomwordgenerator.com/img/picture-generator/locomotive-616267_640.jpg'/>
            </Grid.Column>
            <Grid.Column width={8}>
                <h2> Login to Mockchain</h2>
                <LoginForm appData={appData} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            </Grid.Column>
        </Grid>
    )

}

export default LoginPage;