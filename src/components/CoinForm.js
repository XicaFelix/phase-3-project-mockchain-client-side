import { useHistory } from 'react-router-dom';
import {Form, FormField, Button, ButtonGroup} from 'semantic-ui-react'

function CoinForm({selectedRecord, setSelectedRecord, appData, currentUser}){
    const history = useHistory();

    // console.log('selected record', selectedRecord)

    function handleChange(event){
        setSelectedRecord({
            ...selectedRecord, 
            [event.target.name]: event.target.value,
            record_id: selectedRecord.record_id,
            currency: `${selectedRecord.currency}`,
            seller: `${selectedRecord.seller}`,
        })
    }

    function handleUpdate(event){
        event.preventDefault();
        const buyer = appData.find((user)=> user.name === selectedRecord.buyer)
        // console.log('buyer', buyer)

        const dataToPatch = {
            price: selectedRecord.price,
            user_id: buyer.id
        }
        // console.log('dataToPatch', dataToPatch)

        fetch(`http://localhost:9292/mockchain/transactions/${selectedRecord.record_id}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(dataToPatch),
        }
        ).then(resp=>resp.json())
        .then(data=> console.log('patch response', data))

        history.push('/home')
    }

    function handleCancel(event){
        event.preventDefault();
        
        fetch(`http://localhost:9292/mockchain/transactions/${selectedRecord.record_id}`,{
            method: "DELETE",
        })
        .then(resp=> resp.json())
        .then(data=> console.log('deleted record', data));

        history.push('/home')
    }

    function handleExecute(event){
        event.preventDefault();
        const buyer = appData.find((user)=> user.name === selectedRecord.buyer);
        const coin = currentUser.coin_transactions.find((record)=> record.coin.name === selectedRecord.coin).coin
        // console.log('coin', coin)


        const dataToPost = {
            price: selectedRecord.price,
            coin_id: coin.id,
            user_id: buyer.id
        }

        fetch(`http://localhost:9292/mockchain/transactions/new`,{
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(dataToPost)
        })
        .then(resp=>resp.json())
        .then(data=>console.log('post response', data))
        history.push('/home')
    }

    return(
        <Form>
        <p>{`Transaction ID # ${selectedRecord.record_id}`}</p>
        <p>{`Seller: ${selectedRecord.seller}`}</p>
        <FormField>
            <label> Buyer: </label>
            <input placeholder='Buyer name' name='buyer' value={selectedRecord.buyer} onChange={handleChange}/>
        </FormField>
        <FormField>
            <label>Coin:</label>
            <input placeholder='Coin' name='coin' value={selectedRecord.coin} onChange={handleChange}/>
        </FormField>
        <FormField>
            <label>Transaction Amount</label>
            <input placeholder="Amount" name='price' onChange={handleChange} value={selectedRecord.price}/>
        </FormField>
        <p> {`${selectedRecord.currency}`}</p>
        <FormField>
            <ButtonGroup>
                <Button onClick={handleExecute}>Execute</Button>
                <Button onClick={handleUpdate}>Update</Button>
                <Button onClick={handleCancel}>Cancel</Button>
            </ButtonGroup>
        </FormField>
    </Form>
    );
}

export default CoinForm