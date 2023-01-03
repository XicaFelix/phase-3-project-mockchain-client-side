import {Form, FormField, Button, ButtonGroup, Label} from 'semantic-ui-react'

function CoinForm(){

    return(
        <Form>
        <p>Current Investment: $xx</p>
        <FormField>
            <Label>Amount</Label>
            <input placeholder="Amount"/>
        </FormField>
        <FormField>
            <ButtonGroup>
                <Button>Buy</Button>
                <Button>Sell</Button>
            </ButtonGroup>
        </FormField>
    </Form>
    );
}

export default CoinForm