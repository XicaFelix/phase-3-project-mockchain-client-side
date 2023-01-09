import React from "react";
import {Form, Button} from 'semantic-ui-react';


function LoginForm(){

    return(
        <Form>
            <Form.Field>
                <label>Username</label>
                <input placeholder="Username" />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input placeholder="Password" />
            </Form.Field>
            <Button type="submit" >Log-in</Button>
        </Form>
    )
}

export default LoginForm;