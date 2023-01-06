import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {Form, Button} from 'semantic-ui-react';


function LoginForm({onLogin, userData, onUserData, userList}){
    const history = useHistory();

    function handleChange(event){

        onUserData({...userData, 
            [event.target.name] : event.target.value
        })
        console.log(userData)
    }

    function handleSubmit(event){
        let realUser = userList.find((user)=>user.name == userData.username)
        let realPassword = userList.find((user)=> user.password == userData.password)
        event.preventDefault();
        if (realUser && realPassword) {
            history.push('/home')
        }else if (!realUser){
            console.log('incorrect username')
            console.log(realUser)
        }else if(!realPassword){
            console.log('incorrect password')
        }else {
            console.log('username and password incorrect')
        }
    }

    return(
        <Form>
            <Form.Field>
                <label>Username</label>
                <input placeholder="Username" name="username" value={userData.username} onChange={handleChange}/>
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input placeholder="Password" name="password" value={userData.password} onChange={handleChange}/>
            </Form.Field>
            <Button type="submit" onClick={handleSubmit} >Log-in</Button>
        </Form>
    )
}

export default LoginForm;