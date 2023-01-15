import React from "react";
import {Grid, Image} from 'semantic-ui-react'

import LoginForm from "./LoginForm";

function LoginPage({appData, currentUser, setCurrentUser}){

    return(
        <Grid padded = 'vertically' color= 'gray'>
            <Grid.Column width={8}>
                <Image  src= 'https://media.istockphoto.com/id/1332002332/photo/global-communication-network.jpg?s=612x612&w=0&k=20&c=peu8U_wCmrnpQDfPHdZL7UGCY3oapnSBPvKi9kVCh7w='/>
            </Grid.Column>
            <Grid.Column  width={8}>
                <h2 style={{color: 'whitesmoke'}}> Login to Mockchain</h2>
                <LoginForm appData={appData} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            </Grid.Column>
        </Grid>
    )

}

export default LoginPage;