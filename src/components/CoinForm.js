import {Form, FormField, Button, ButtonGroup, Label} from 'semantic-ui-react'

function CoinForm({selectedRecord, setSelectedRecord}){

    
    console.log('selected record', selectedRecord)
    return(
        <Form>
        <p>{`Transaction ID # ${selectedRecord.record_id}`}</p>
        <p>{`Coin: ${selectedRecord.coin.toUpperCase()}`}</p>
        <p>{`Buyer: ${selectedRecord.buyer}`}</p>
        <p>{`Seller: ${selectedRecord.seller}`}</p>
        <FormField>
            <label>Transaction Amount</label>
            <input placeholder="Amount"/>
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