import {Form, FormField, Button, ButtonGroup} from 'semantic-ui-react'

function CoinForm({selectedRecord, setSelectedRecord}){

    console.log('selected record', selectedRecord)

    function handleChange(event){
        setSelectedRecord({
            ...selectedRecord, 
            [event.target.name]: event.target.value,
            record_id: selectedRecord.record_id,
            currency: `${selectedRecord.currency}`,
            seller: `${selectedRecord.seller}`,
        })
    }

    return(
        <Form>
        <p>{`Transaction ID # ${selectedRecord.record_id}`}</p>
        <p>{`Seller: ${selectedRecord.seller}`}</p>
        <FormField>
            <label> Buyer: </label>
            <input placeholder='Buyer name' name='buyer' value={selectedRecord.buyer}/>
        </FormField>
        <FormField>
            <label>Coin:</label>
            <input placeholder='Coin' name='coin' value={selectedRecord.coin.toUpperCase()}/>
        </FormField>
        <FormField>
            <label>Transaction Amount</label>
            <input placeholder="Amount" name='price' onChange={handleChange} value={selectedRecord.price}/>
        </FormField>
        <p> {`${selectedRecord.currency}`}</p>
        <FormField>
            <ButtonGroup>
                <Button>Execute</Button>
                <Button>Cancel</Button>
            </ButtonGroup>
        </FormField>
    </Form>
    );
}

export default CoinForm