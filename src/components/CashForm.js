import {Form, FormField, Button, Header, Label} from 'semantic-ui-react'

function CashForm(){

    return(
        <>
        <Header as={'h3'}>Deposit Cash</Header>
        <Form>
            <FormField>
                <Label>Amount</Label>
                <input placeholder="Deposit Amount"/>
            </FormField>
            <b> Cash Balance: $xx</b>
            <br/>
            <Button>Fund</Button>
        </Form>
    </>
    );
}

export default CashForm;