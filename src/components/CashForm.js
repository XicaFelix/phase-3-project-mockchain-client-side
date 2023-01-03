import {Form, FormField, Button, Header, Label} from 'semantic-ui-react'

function CashForm(){

    return(
        <>
        <Header as={'h3'}>Deposit Cash</Header>
        <Form>
            <FormField>
                <b>Current Balance: $xx</b>
                <input placeholder="Deposit Amount"/>
            </FormField>
            <b> New Balance: $xx</b>
            <br/>
            <Button>Fund</Button>
        </Form>
    </>
    );
}

export default CashForm;