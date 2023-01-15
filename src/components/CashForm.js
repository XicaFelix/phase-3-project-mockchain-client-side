import {Form, FormField, Button, Header} from 'semantic-ui-react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function CashForm({currentUser, setCurrentUser}){
    const history = useHistory();
    

    const [userUpdate, setUserUpdate] = useState({
        cash: 0
    })

    let total_cash = parseInt(currentUser.cash) + parseInt(userUpdate.cash)
    console.log(total_cash)

    function handleChange(event){
        setUserUpdate({
            ...userUpdate,
            cash: event.target.value
        })
    }

    function handleClick(event){
        event.preventDefault();

        fetch(`http://localhost:9292/mockchain/${currentUser.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({cash: total_cash,})
        })
        .then(resp=>resp.json())
        .then(data=>console.log('patch response', data));

        currentUser.cash = total_cash;
        
        history.push('/profile')
       
    }
    console.log(currentUser)

    console.log(currentUser.cash)
    return(
        <>
        <Header as={'h3'}>Deposit Cash</Header>
        <Form inverted>
            <FormField>
                <b>{`Current Balance: ${currentUser.cash} ${currentUser.currency} `}</b>
                <input placeholder="Deposit Amount" onChange={handleChange} value={userUpdate.cash}/>
            </FormField>
            <b> {userUpdate.cash > 0 ? `New Balance: ${total_cash}` : `New Balance: ${currentUser.cash}`}</b>
            <br/>
            <Button onClick={handleClick}>Fund</Button>
        </Form>
    </>
    );
}

export default CashForm;