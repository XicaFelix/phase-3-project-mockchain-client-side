import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import {Form, Button} from 'semantic-ui-react';


function LoginForm({appData, currentUser, setCurrentUser}){
    const history = useHistory();

    const [realLogin, setRealLogin] = useState('')
    const [loginState, setLoginState] = useState(true)
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: '',
      })

      function handleChange(event){
        setLoginInfo({...loginInfo, 
            [event.target.name] : event.target.value
        })
      }
    //   console.log('loginInfo', loginInfo)
      console.log(appData)

      function handleSubmit(event){
        event.preventDefault();
        let isRealUser = appData.find((user)=> user.name === loginInfo.username);
        // console.log('isRealUser', isRealUser);
        let isRealPassword = appData.find((user)=> user.password === loginInfo.password);
        // console.log('isRealPassword', isRealPassword);

        if (isRealUser) {
            if (isRealPassword) {
                setLoginState(true)
                setCurrentUser(isRealUser)
                history.push('/home')
            }else {
                setRealLogin('Incorrect Password')
                setLoginState(false)
            }
        }else {
            setRealLogin('Incorrect Username')
            setLoginState(false)
        }
      }

      console.log('current user', currentUser)
    return(
        <>
             <Form>
                <Form.Field>
                    <label style={{color: 'whitesmoke'}}>Username</label>
                    <input placeholder="Username" name="username" value={loginInfo.username} onChange={handleChange}/>
                </Form.Field>
                <Form.Field>
                    <label style={{color: 'whitesmoke'}}>Password</label>
                    <input placeholder="Password" name='password' value={loginInfo.password} onChange={handleChange}/>
                </Form.Field>
                <Button type="submit" onClick={handleSubmit} color= 'teal'>Log-in</Button>
            </Form>
            <br/>
            {loginState ? <p></p> : <b style={{color: 'whitesmoke'}}>{`${realLogin}`}</b>}
        </>
       
    )
}

export default LoginForm;